"use strict";
/**
 * SOL Definition Provider for Go to Definition (Ctrl+Click)
 *
 * Provides go-to-definition functionality for SOL artifact references.
 *
 * @author Randy Gala <randy@hexy.dev>
 * @license MIT
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefinitionProvider = void 0;
const vscode = __importStar(require("vscode"));
class DefinitionProvider {
    provideDefinition(document, position, token) {
        const wordRange = document.getWordRangeAtPosition(position, /([A-Z][a-zA-Z0-9]*):([A-Z][a-zA-Z0-9]*)/);
        if (!wordRange) {
            return undefined;
        }
        const text = document.getText(wordRange);
        const match = text.match(/([A-Z][a-zA-Z0-9]*):([A-Z][a-zA-Z0-9]*)/);
        if (!match) {
            return undefined;
        }
        const artifactType = match[1];
        const artifactId = match[2];
        // Find definition in current document
        const definitionLocation = this.findDefinitionLocation(document, artifactType, artifactId);
        if (definitionLocation) {
            return new vscode.Location(document.uri, definitionLocation);
        }
        // TODO: Search in workspace for definitions in other files
        return this.searchWorkspaceForDefinition(artifactType, artifactId);
    }
    findDefinitionLocation(document, artifactType, artifactId) {
        const text = document.getText();
        // Look for artifact definition for types that might not have ID on the same line (like Area)
        if (artifactType === "Area") {
            const areaPattern = new RegExp(`^Area:\s*$`, "gm");
            let match;
            areaPattern.lastIndex = 0;
            while ((match = areaPattern.exec(text)) !== null) {
                const position = document.positionAt(match.index);
                const nextLines = this.getNextLines(document, position.line, 10); // Check next 10 lines for id
                if (this.checkIdInLines(nextLines, artifactId)) {
                    // Found the Area: block, now find the 'id: ArtifactId' line within it
                    const idPattern = new RegExp(`^\s*id:\s*${artifactId}`, "m");
                    for (let i = 0; i < nextLines.length; i++) {
                        const idMatch = nextLines[i].match(idPattern);
                        if (idMatch) {
                            // Calculate the position of the ID within the document
                            const idLineOffset = i + 1; // +1 because getNextLines starts from next line
                            const idPosition = document.positionAt(document.offsetAt(new vscode.Position(position.line + idLineOffset, nextLines[i].indexOf("id:") + "id:".length + 1) // Adjust for "id:" and space
                            ));
                            return idPosition;
                        }
                    }
                }
            }
        }
        else {
            // General case: Look for artifact definition with ID on the same or next line
            const typePattern = new RegExp(`^${artifactType}:\s*$`, "gm");
            let match;
            typePattern.lastIndex = 0;
            while ((match = typePattern.exec(text)) !== null) {
                const position = document.positionAt(match.index);
                const nextLines = this.getNextLines(document, position.line, 10);
                if (this.checkIdInLines(nextLines, artifactId)) {
                    // If the ID is found in the next lines, we need to find its exact position
                    const idPattern = new RegExp(`^\s*(?:-\s*)?id:\s*${artifactId}`, "m");
                    for (let i = 0; i < nextLines.length; i++) {
                        const idMatch = nextLines[i].match(idPattern);
                        if (idMatch) {
                            const idLineOffset = i + 1;
                            return document.positionAt(document.offsetAt(new vscode.Position(position.line + idLineOffset, nextLines[i].indexOf("id:") + "id:".length + 1)));
                        }
                    }
                }
            }
            // Look for direct ID definition (e.g., - id: MyId)
            const directIdPattern = new RegExp(`^\s*-\s*id:\s*${artifactId}`, "gm");
            directIdPattern.lastIndex = 0;
            while ((match = directIdPattern.exec(text)) !== null) {
                return document.positionAt(match.index + match[0].indexOf(artifactId));
            }
        }
        return undefined;
    }
    getNextLines(document, startLine, count) {
        const lines = [];
        const maxLine = Math.min(startLine + count, document.lineCount - 1);
        for (let i = startLine + 1; i <= maxLine; i++) {
            lines.push(document.lineAt(i).text);
        }
        return lines;
    }
    checkIdInLines(lines, targetId) {
        return lines.some((line) => {
            const idMatch = line.match(/^\s*(?:-\s*)?id:\s*([A-Za-z0-9_]+)/);
            return idMatch && idMatch[1] === targetId;
        });
    }
    searchWorkspaceForDefinition(artifactType, artifactId) {
        return __awaiter(this, void 0, void 0, function* () {
            // This is a placeholder for future functionality to search across files.
            // For now, it only searches in the current document.
            return [];
        });
    }
}
exports.DefinitionProvider = DefinitionProvider;
//# sourceMappingURL=DefinitionProvider.js.map