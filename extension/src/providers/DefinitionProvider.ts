/**
 * SOL Definition Provider for Go to Definition (Ctrl+Click)
 *
 * Provides go-to-definition functionality for SOL artifact references.
 *
 * @author Randy Gala <randy@hexy.dev>
 * @license MIT
 */

import * as vscode from "vscode"

export class DefinitionProvider implements vscode.DefinitionProvider {
  public provideDefinition(
    document: vscode.TextDocument,
    position: vscode.Position,
    token: vscode.CancellationToken
  ): vscode.ProviderResult<vscode.Definition | vscode.LocationLink[]> {
    const wordRange = document.getWordRangeAtPosition(
      position,
      /([A-Z][a-zA-Z0-9]*):([A-Z][a-zA-Z0-9]*)/
    )
    if (!wordRange) {
      return undefined
    }

    const text = document.getText(wordRange)
    const match = text.match(/([A-Z][a-zA-Z0-9]*):([A-Z][a-zA-Z0-9]*)/)
    if (!match) {
      return undefined
    }

    const artifactType = match[1]
    const artifactId = match[2]

    // Find definition in current document
    const definitionLocation = this.findDefinitionLocation(
      document,
      artifactType,
      artifactId
    )
    if (definitionLocation) {
      return new vscode.Location(document.uri, definitionLocation)
    }

    // TODO: Search in workspace for definitions in other files
    return this.searchWorkspaceForDefinition(artifactType, artifactId)
  }

  private findDefinitionLocation(
    document: vscode.TextDocument,
    artifactType: string,
    artifactId: string
  ): vscode.Position | undefined {
    const text = document.getText()

    // Look for artifact definition for types that might not have ID on the same line (like Area)
    if (artifactType === "Area") {
      const areaPattern = new RegExp(`^Area:\s*$`, "gm")
      let match: RegExpExecArray | null
      areaPattern.lastIndex = 0

      while ((match = areaPattern.exec(text)) !== null) {
        const position = document.positionAt(match.index)
        const nextLines = this.getNextLines(document, position.line, 10) // Check next 10 lines for id

        if (this.checkIdInLines(nextLines, artifactId)) {
          // Found the Area: block, now find the 'id: ArtifactId' line within it
          const idPattern = new RegExp(`^\s*id:\s*${artifactId}`, "m")
          for (let i = 0; i < nextLines.length; i++) {
            const idMatch = nextLines[i].match(idPattern)
            if (idMatch) {
              // Calculate the position of the ID within the document
              const idLineOffset = i + 1 // +1 because getNextLines starts from next line
              const idPosition = document.positionAt(
                document.offsetAt(
                  new vscode.Position(
                    position.line + idLineOffset,
                    nextLines[i].indexOf("id:") + "id:".length + 1
                  ) // Adjust for "id:" and space
                )
              )
              return idPosition
            }
          }
        }
      }
    } else {
      // General case: Look for artifact definition with ID on the same or next line
      const typePattern = new RegExp(`^${artifactType}:\s*$`, "gm")
      let match: RegExpExecArray | null
      typePattern.lastIndex = 0

      while ((match = typePattern.exec(text)) !== null) {
        const position = document.positionAt(match.index)
        const nextLines = this.getNextLines(document, position.line, 10)

        if (this.checkIdInLines(nextLines, artifactId)) {
          // If the ID is found in the next lines, we need to find its exact position
          const idPattern = new RegExp(`^\s*(?:-\s*)?id:\s*${artifactId}`, "m")
          for (let i = 0; i < nextLines.length; i++) {
            const idMatch = nextLines[i].match(idPattern)
            if (idMatch) {
              const idLineOffset = i + 1
              return document.positionAt(
                document.offsetAt(
                  new vscode.Position(
                    position.line + idLineOffset,
                    nextLines[i].indexOf("id:") + "id:".length + 1
                  )
                )
              )
            }
          }
        }
      }

      // Look for direct ID definition (e.g., - id: MyId)
      const directIdPattern = new RegExp(`^\s*-\s*id:\s*${artifactId}`, "gm")
      directIdPattern.lastIndex = 0
      while ((match = directIdPattern.exec(text)) !== null) {
        return document.positionAt(match.index + match[0].indexOf(artifactId))
      }
    }

    return undefined
  }

  private getNextLines(
    document: vscode.TextDocument,
    startLine: number,
    count: number
  ): string[] {
    const lines: string[] = []
    const maxLine = Math.min(startLine + count, document.lineCount - 1)

    for (let i = startLine + 1; i <= maxLine; i++) {
      lines.push(document.lineAt(i).text)
    }

    return lines
  }

  private checkIdInLines(lines: string[], targetId: string): boolean {
    return lines.some((line) => {
      const idMatch = line.match(/^\s*(?:-\s*)?id:\s*([A-Za-z0-9_]+)/)
      return idMatch && idMatch[1] === targetId
    })
  }

  private async searchWorkspaceForDefinition(
    artifactType: string,
    artifactId: string
  ): Promise<vscode.Location[]> {
    // This is a placeholder for future functionality to search across files.
    // For now, it only searches in the current document.
    return []
  }
}
