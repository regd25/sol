/**
 * SOL - Semantic Operations Language Support for VS Code
 *
 * This extension provides comprehensive support for SOL following its core principles:
 * 1. Semantic Coherence: Maintaining narrative integrity
 * 2. Traceability: Linking artifacts to strategic vision
 * 3. Simplicity: Start simple, refactor when necessary
 * 4. Documentation: Every change must include clear examples
 *
 * Based on the SOL project: https://github.com/regd25/sol
 *
 * @author Randy Gala <randy@hexy.dev>
 * @license MIT
 */

import * as vscode from "vscode"
import {
  LanguageClient,
  LanguageClientOptions,
  ServerOptions,
  TransportKind,
} from "vscode-languageclient/node"
import {
  SemanticValidator,
  ValidationResult,
} from "./validator/SemanticValidator"
import { SolFormatter } from "./formatter/SolFormatter"
import { DocumentLinkProvider } from "./providers/DocumentLinkProvider"
import { DefinitionProvider } from "./providers/DefinitionProvider"
import { VisualizerPanel } from "./visualizer/SolVisualizer"

let client: LanguageClient

export function activate(context: vscode.ExtensionContext) {
  console.log(
    "SOL - Semantic Operations Language Support extension is now active!"
  )

  // Initialize Language Server
  initializeLanguageServer(context)

  // Register SOL-specific commands following SOL principles
  registerSolCommands(context)

  // Register status bar and diagnostics
  registerStatusBarAndDiagnostics(context)
}

function initializeLanguageServer(context: vscode.ExtensionContext) {
  // The server is implemented in node
  let serverModule = context.asAbsolutePath("./server/out/server.js")

  // Debug options for the server
  let debugOptions = { execArgv: ["--nolazy", "--inspect=6009"] }

  // Server options for both run and debug modes
  let serverOptions: ServerOptions = {
    run: { module: serverModule, transport: TransportKind.ipc },
    debug: {
      module: serverModule,
      transport: TransportKind.ipc,
      options: debugOptions,
    },
  }

  // Language client options
  let clientOptions: LanguageClientOptions = {
    // Register the server for SOL documents
    documentSelector: [
      { scheme: "file", language: "sol" },
      { scheme: "file", language: "sol-yaml" },
    ],
    synchronize: {
      // Notify the server about file changes to SOL files
      fileEvents: [
        vscode.workspace.createFileSystemWatcher("**/*.sop"),
        vscode.workspace.createFileSystemWatcher("**/*.sop.yaml"),
        vscode.workspace.createFileSystemWatcher("**/*.sop.yml"),
      ],
    },
  }

  // Create and start the language client
  client = new LanguageClient(
    "solLanguageSupport",
    "SOL - Semantic Operations Language Support",
    serverOptions,
    clientOptions
  )

  client.start()
}

function registerSolCommands(context: vscode.ExtensionContext) {
  const semanticValidator = new SemanticValidator()
  const solFormatter = new SolFormatter()
  const documentLinkProvider = new DocumentLinkProvider()
  const definitionProvider = new DefinitionProvider()

  // Register providers
  context.subscriptions.push(
    vscode.languages.registerDocumentFormattingEditProvider(
      ["sol", "sol-yaml"],
      {
        provideDocumentFormattingEdits(
          document: vscode.TextDocument,
          options: vscode.FormattingOptions,
          token: vscode.CancellationToken
        ): vscode.TextEdit[] {
          const formatted = solFormatter.formatDocument(document.getText(), {
            insertSpaces: options.insertSpaces,
            tabSize: options.tabSize,
            trimTrailingWhitespace: true,
            insertFinalNewline: true,
            trimFinalNewlines: true,
          })

          const fullRange = new vscode.Range(
            document.positionAt(0),
            document.positionAt(document.getText().length)
          )

          return [vscode.TextEdit.replace(fullRange, formatted)]
        },
      }
    ),
    vscode.languages.registerDocumentLinkProvider(
      ["sol", "sol-yaml"],
      documentLinkProvider
    ),
    vscode.languages.registerDefinitionProvider(
      ["sol", "sol-yaml"],
      definitionProvider
    )
  )

  // Command: Validate Semantic Coherence (Updated for Phase 4)
  const validateCoherenceCommand = vscode.commands.registerCommand(
    "sol.validateSemanticCoherence",
    async () => {
      const activeEditor = vscode.window.activeTextEditor
      if (!activeEditor) {
        vscode.window.showWarningMessage("No active SOL document to validate")
        return
      }

      try {
        const document = activeEditor.document
        const documentText = document.getText()

        // Use new semantic validator
        const validationResult = await semanticValidator.validateDocument(
          documentText
        )

        if (validationResult.isValid) {
          vscode.window.showInformationMessage(
            `✅ Validación semántica exitosa - ${validationResult.artifacts.length} artefactos validados en ${validationResult.processingTime}ms`
          )
        } else {
          const errorCount = validationResult.errors.filter(
            (e) => e.severity === "error"
          ).length
          const warningCount = validationResult.warnings.length
          const message = `⚠️ Encontrados ${errorCount} errores y ${warningCount} advertencias semánticas`

          vscode.window.showWarningMessage(message)
          showValidationResults(validationResult)
        }
      } catch (error) {
        vscode.window.showErrorMessage(`Error validating coherence: ${error}`)
      }
    }
  )

  // Command: Show Artifact Traceability
  const showTraceabilityCommand = vscode.commands.registerCommand(
    "sol.showArtifactTraceability",
    async () => {
      const activeEditor = vscode.window.activeTextEditor
      if (!activeEditor) {
        vscode.window.showWarningMessage("No active SOL document")
        return
      }

      try {
        const document = activeEditor.document
        const traceabilityMap = await generateTraceabilityMap(document)
        await showTraceabilityView(traceabilityMap)
      } catch (error) {
        vscode.window.showErrorMessage(
          `Error generating traceability: ${error}`
        )
      }
    }
  )

  // Command: Generate Documentation
  const generateDocumentationCommand = vscode.commands.registerCommand(
    "sol.generateDocumentation",
    async () => {
      const activeEditor = vscode.window.activeTextEditor
      if (!activeEditor) {
        vscode.window.showWarningMessage("No active SOL document")
        return
      }

      try {
        const document = activeEditor.document
        const documentation = await generateSolDocumentation(document)
        await showDocumentationPreview(documentation)
      } catch (error) {
        vscode.window.showErrorMessage(
          `Error generating documentation: ${error}`
        )
      }
    }
  )

  // Command: Format SOL Document
  const formatSolDocumentCommand = vscode.commands.registerCommand(
    "sol.formatDocument",
    async () => {
      const activeEditor = vscode.window.activeTextEditor
      if (!activeEditor) {
        vscode.window.showWarningMessage("No active SOL document to format")
        return
      }

      if (
        activeEditor.document.languageId !== "sol" &&
        activeEditor.document.languageId !== "sol-yaml"
      ) {
        vscode.window.showWarningMessage("Active document is not a SOL file")
        return
      }

      try {
        // Use VS Code's built-in formatting command which will call our language server
        await vscode.commands.executeCommand("editor.action.formatDocument")
        vscode.window.showInformationMessage(
          "✅ SOL document formatted successfully"
        )
      } catch (error) {
        vscode.window.showErrorMessage(
          `Error formatting SOL document: ${error}`
        )
      }
    }
  )

  // Command: Show SOL Visualizer (Phase 4 - Visual Diagrams)
  const showVisualizerCommand = vscode.commands.registerCommand(
    "sol.showVisualizer",
    () => {
      VisualizerPanel.createOrShow(context.extensionUri)
    }
  )

  context.subscriptions.push(
    validateCoherenceCommand,
    showTraceabilityCommand,
    generateDocumentationCommand,
    formatSolDocumentCommand,
    showVisualizerCommand
  )
}

function registerStatusBarAndDiagnostics(context: vscode.ExtensionContext) {
  // Status bar item for SOL documents
  const statusBarItem = vscode.window.createStatusBarItem(
    vscode.StatusBarAlignment.Right,
    100
  )
  statusBarItem.text = "$(check) SOL"
  statusBarItem.tooltip = "SOL - Semantic Operations Language Support"
  statusBarItem.command = "sol.validateSemanticCoherence"

  // Show status bar item when SOL document is active
  const updateStatusBar = () => {
    const activeEditor = vscode.window.activeTextEditor
    if (
      activeEditor &&
      (activeEditor.document.languageId === "sol" ||
        activeEditor.document.languageId === "sol-yaml")
    ) {
      statusBarItem.show()
    } else {
      statusBarItem.hide()
    }
  }

  vscode.window.onDidChangeActiveTextEditor(updateStatusBar)
  updateStatusBar()

  context.subscriptions.push(statusBarItem)
}

// SOL-specific validation functions
async function validateSemanticCoherence(
  document: vscode.TextDocument
): Promise<CoherenceIssue[]> {
  const issues: CoherenceIssue[] = []
  const text = document.getText()
  const lines = text.split("\n")

  // Validate Vision-Domain coherence
  const visionReferences = extractVisionReferences(text)
  const domainDefinitions = extractDomainDefinitions(text)

  for (const visionRef of visionReferences) {
    if (!domainDefinitions.find((d) => d.vision === visionRef.id)) {
      issues.push({
        type: "coherence",
        message: `Vision "${visionRef.id}" is not linked to any Domain`,
        line: visionRef.line,
        severity: "warning",
      })
    }
  }

  // Validate Actor-Process coherence
  const actorReferences = extractActorReferences(text)
  const processDefinitions = extractProcessDefinitions(text)

  for (const actor of actorReferences) {
    const usedInProcesses = processDefinitions.filter((p) =>
      p.actors.includes(actor.id)
    )
    if (usedInProcesses.length === 0) {
      issues.push({
        type: "coherence",
        message: `Actor "${actor.id}" is not used in any Process`,
        line: actor.line,
        severity: "info",
      })
    }
  }

  return issues
}

async function generateTraceabilityMap(
  document: vscode.TextDocument
): Promise<TraceabilityMap> {
  const text = document.getText()

  return {
    visions: extractVisionDefinitions(text),
    domains: extractDomainDefinitions(text),
    actors: extractActorReferences(text),
    processes: extractProcessDefinitions(text),
    policies: extractPolicyDefinitions(text),
    indicators: extractIndicatorDefinitions(text),
  }
}

async function generateSolDocumentation(
  document: vscode.TextDocument
): Promise<string> {
  const traceabilityMap = await generateTraceabilityMap(document)

  let documentation = "# SOL Documentation\n\n"
  documentation += "## Strategic Vision\n\n"

  for (const vision of traceabilityMap.visions) {
    documentation += `### ${vision.id}\n`
    documentation += `${vision.content}\n\n`

    // Find related domains
    const relatedDomains = traceabilityMap.domains.filter(
      (d) => d.vision === vision.id
    )
    if (relatedDomains.length > 0) {
      documentation += "**Related Domains:**\n"
      for (const domain of relatedDomains) {
        documentation += `- ${domain.id}: ${domain.description}\n`
      }
      documentation += "\n"
    }
  }

  documentation += "## Operational Processes\n\n"
  for (const process of traceabilityMap.processes) {
    documentation += `### ${process.id}\n`
    documentation += `**Vision:** ${process.vision}\n`
    documentation += `**Actors:** ${process.actors.join(", ")}\n`
    documentation += "**Steps:**\n"
    for (let i = 0; i < process.steps.length; i++) {
      documentation += `${i + 1}. ${process.steps[i]}\n`
    }
    documentation += "\n"
  }

  return documentation
}

// Helper functions and interfaces
interface CoherenceIssue {
  type: "coherence" | "traceability" | "documentation"
  message: string
  line: number
  severity: "error" | "warning" | "info"
}

interface TraceabilityMap {
  visions: VisionDefinition[]
  domains: DomainDefinition[]
  actors: ActorDefinition[]
  processes: ProcessDefinition[]
  policies: PolicyDefinition[]
  indicators: IndicatorDefinition[]
}

interface VisionDefinition {
  id: string
  content: string
  line: number
}

interface DomainDefinition {
  id: string
  description: string
  vision: string
  line: number
}

interface ActorDefinition {
  id: string
  type: string
  line: number
}

interface ProcessDefinition {
  id: string
  vision: string
  actors: string[]
  steps: string[]
  line: number
}

interface PolicyDefinition {
  id: string
  premise: string
  vision: string
  line: number
}

interface IndicatorDefinition {
  id: string
  description: string
  measurement: string
  line: number
}

// Extraction helper functions
function extractVisionReferences(text: string): VisionDefinition[] {
  // Implementation for extracting vision references
  return []
}

function extractVisionDefinitions(text: string): VisionDefinition[] {
  // Implementation for extracting vision definitions
  return []
}

function extractDomainDefinitions(text: string): DomainDefinition[] {
  // Implementation for extracting domain definitions
  return []
}

function extractActorReferences(text: string): ActorDefinition[] {
  // Implementation for extracting actor references
  return []
}

function extractProcessDefinitions(text: string): ProcessDefinition[] {
  // Implementation for extracting process definitions
  return []
}

function extractPolicyDefinitions(text: string): PolicyDefinition[] {
  // Implementation for extracting policy definitions
  return []
}

function extractIndicatorDefinitions(text: string): IndicatorDefinition[] {
  // Implementation for extracting indicator definitions
  return []
}

async function showCoherenceIssues(issues: CoherenceIssue[]) {
  // Show issues in VS Code problems panel
  const diagnostics = issues.map((issue) => {
    const diagnostic = new vscode.Diagnostic(
      new vscode.Range(issue.line, 0, issue.line, 100),
      issue.message,
      issue.severity === "error"
        ? vscode.DiagnosticSeverity.Error
        : issue.severity === "warning"
        ? vscode.DiagnosticSeverity.Warning
        : vscode.DiagnosticSeverity.Information
    )
    diagnostic.source = "SOL"
    return diagnostic
  })

  const collection = vscode.languages.createDiagnosticCollection("sol")
  const activeEditor = vscode.window.activeTextEditor
  if (activeEditor) {
    collection.set(activeEditor.document.uri, diagnostics)
  }
}

async function showTraceabilityView(traceabilityMap: TraceabilityMap) {
  // Create and show traceability view
  const panel = vscode.window.createWebviewPanel(
    "solTraceability",
    "SOL Traceability",
    vscode.ViewColumn.Beside,
    { enableScripts: true }
  )

  const traceabilityHtml = generateTraceabilityHtml(traceabilityMap)
  panel.webview.html = traceabilityHtml
}

async function showDocumentationPreview(documentation: string) {
  // Create and show documentation preview
  const doc = await vscode.workspace.openTextDocument({
    content: documentation,
    language: "markdown",
  })

  await vscode.window.showTextDocument(doc, vscode.ViewColumn.Beside)
  await vscode.commands.executeCommand("markdown.showPreview")
}

function generateTraceabilityHtml(traceabilityMap: TraceabilityMap): string {
  return `
    <!DOCTYPE html>
    <html>
    <head>
        <title>SOL Traceability</title>
        <style>
            body { font-family: Arial, sans-serif; margin: 20px; }
            .artifact { margin: 10px 0; padding: 10px; border-left: 3px solid #007acc; }
            .vision { border-left-color: #28a745; }
            .domain { border-left-color: #007acc; }
            .process { border-left-color: #ffc107; }
            .actor { border-left-color: #dc3545; }
        </style>
    </head>
    <body>
        <h1>SOL Traceability Map</h1>
        <h2>Visions</h2>
        ${traceabilityMap.visions
          .map(
            (v) => `
            <div class="artifact vision">
                <strong>${v.id}</strong>: ${v.content}
            </div>
        `
          )
          .join("")}
        
        <h2>Domains</h2>
        ${traceabilityMap.domains
          .map(
            (d) => `
            <div class="artifact domain">
                <strong>${d.id}</strong>: ${d.description} (Vision: ${d.vision})
            </div>
        `
          )
          .join("")}
        
        <h2>Processes</h2>
        ${traceabilityMap.processes
          .map(
            (p) => `
            <div class="artifact process">
                <strong>${p.id}</strong> - Vision: ${p.vision}<br>
                Actors: ${p.actors.join(", ")}<br>
                Steps: ${p.steps.length}
            </div>
        `
          )
          .join("")}
    </body>
    </html>
    `
}

export function deactivate(): Thenable<void> | undefined {
  if (!client) {
    return undefined
  }
  return client.stop()
}

// ====== HELPER FUNCTIONS FOR PHASE 4 ======

async function showValidationResults(validationResult: ValidationResult) {
  // Create and show validation results in a webview
  const panel = vscode.window.createWebviewPanel(
    "solValidationResults",
    "SOL Validation Results",
    vscode.ViewColumn.Beside,
    { enableScripts: true }
  )

  panel.webview.html = generateValidationResultsHtml(validationResult)
}

function generateValidationResultsHtml(
  validationResult: ValidationResult
): string {
  const errors = validationResult.errors.filter((e) => e.severity === "error")
  const warnings = validationResult.errors.filter(
    (e) => e.severity === "warning"
  )
  const info = validationResult.errors.filter((e) => e.severity === "info")

  return `
        <!DOCTYPE html>
        <html>
        <head>
            <title>SOL Validation Results</title>
            <style>
                body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; margin: 20px; }
                .header { background: #f0f0f0; padding: 15px; border-radius: 5px; margin-bottom: 20px; }
                .stats { display: flex; gap: 20px; margin-bottom: 20px; }
                .stat { padding: 10px; border-radius: 5px; text-align: center; }
                .success { background: #d4edda; color: #155724; }
                .warning { background: #fff3cd; color: #856404; }
                .error { background: #f8d7da; color: #721c24; }
                .issue { margin: 10px 0; padding: 10px; border-left: 4px solid #ccc; }
                .issue.error { border-left-color: #dc3545; }
                .issue.warning { border-left-color: #ffc107; }
                .issue.info { border-left-color: #17a2b8; }
                .artifacts { margin-top: 20px; }
                .artifact { margin: 5px 0; padding: 8px; background: #f8f9fa; border-radius: 3px; }
            </style>
        </head>
        <body>
            <div class="header">
                <h1>🔍 SOL Semantic Validation Results</h1>
                <p>Validación completada en ${
                  validationResult.processingTime
                }ms</p>
            </div>
            
            <div class="stats">
                <div class="stat success">
                    <h3>${validationResult.artifacts.length}</h3>
                    <p>Artefactos</p>
                </div>
                <div class="stat ${errors.length > 0 ? "error" : "success"}">
                    <h3>${errors.length}</h3>
                    <p>Errores</p>
                </div>
                <div class="stat ${
                  warnings.length > 0 ? "warning" : "success"
                }">
                    <h3>${warnings.length}</h3>
                    <p>Advertencias</p>
                </div>
                <div class="stat ${info.length > 0 ? "warning" : "success"}">
                    <h3>${info.length}</h3>
                    <p>Información</p>
                </div>
            </div>

            ${
              errors.length > 0
                ? `
                <h2>❌ Errores Semánticos</h2>
                ${errors
                  .map(
                    (error) => `
                    <div class="issue error">
                        <strong>Línea ${error.line + 1}:</strong> ${
                      error.message
                    }
                        <br><small><strong>Sugerencia:</strong> ${
                          error.suggestion || "No disponible"
                        }</small>
                        <br><small><strong>Regla:</strong> ${
                          error.ruleId
                        }</small>
                    </div>
                `
                  )
                  .join("")}
            `
                : ""
            }

            ${
              warnings.length > 0
                ? `
                <h2>⚠️ Advertencias</h2>
                ${warnings
                  .map(
                    (warning) => `
                    <div class="issue warning">
                        <strong>Línea ${warning.line + 1}:</strong> ${
                      warning.message
                    }
                        <br><small><strong>Sugerencia:</strong> ${
                          warning.suggestion
                        }</small>
                        <br><small><strong>Regla:</strong> ${
                          warning.ruleId
                        }</small>
                    </div>
                `
                  )
                  .join("")}
            `
                : ""
            }

            ${
              validationResult.warnings.length > 0
                ? `
                <h2>💡 Recomendaciones de Mejora</h2>
                ${validationResult.warnings
                  .map(
                    (warning) => `
                    <div class="issue info">
                        <strong>Línea ${warning.line + 1}:</strong> ${
                      warning.message
                    }
                        <br><small><strong>Sugerencia:</strong> ${
                          warning.suggestion
                        }</small>
                        <br><small><strong>Regla:</strong> ${
                          warning.ruleId
                        }</small>
                    </div>
                `
                  )
                  .join("")}
            `
                : ""
            }

            <div class="artifacts">
                <h2>📋 Artefactos Encontrados</h2>
                ${validationResult.artifacts
                  .map(
                    (artifact) => `
                    <div class="artifact">
                        <strong>${artifact.type}:${
                      artifact.id
                    }</strong> (Línea ${artifact.line + 1})
                        ${
                          artifact.references.length > 0
                            ? `<br><small>Referencias: ${artifact.references.join(
                                ", "
                              )}</small>`
                            : ""
                        }
                    </div>
                `
                  )
                  .join("")}
            </div>
        </body>
        </html>
    `
}
