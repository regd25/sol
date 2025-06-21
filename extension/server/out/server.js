"use strict";
/**
 * SOL Language Server
 *
 * Language server implementation for Semantic Operations Language following SOL principles:
 * - Semantic Coherence: Maintaining narrative integrity across artifacts
 * - Traceability: Enabling navigation between related artifacts
 * - Simplicity: Clean, understandable language support
 * - Documentation: Comprehensive hover and completion information
 *
 * Based on the SOL project: https://github.com/regd25/sol
 *
 * @author Randy Gala <randy@hexy.dev>
 * @license MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
const node_1 = require("vscode-languageserver/node");
const vscode_languageserver_textdocument_1 = require("vscode-languageserver-textdocument");
// Create a connection for the server, using Node's IPC as a transport.
// Also include all preview / proposed LSP features.
let connection = (0, node_1.createConnection)(node_1.ProposedFeatures.all);
// Create a simple text document manager.
let documents = new node_1.TextDocuments(vscode_languageserver_textdocument_1.TextDocument);
let hasConfigurationCapability = false;
let hasWorkspaceFolderCapability = false;
let hasDiagnosticRelatedInformationCapability = false;
connection.onInitialize((params) => {
    let capabilities = params.capabilities;
    // Does the client support the `workspace/configuration` request?
    // If not, we fall back to a default client setup
    hasConfigurationCapability = !!(capabilities.workspace && !!capabilities.workspace.configuration);
    hasWorkspaceFolderCapability = !!(capabilities.workspace && !!capabilities.workspace.workspaceFolders);
    hasDiagnosticRelatedInformationCapability = !!(capabilities.textDocument &&
        capabilities.textDocument.publishDiagnostics &&
        capabilities.textDocument.publishDiagnostics.relatedInformation);
    const result = {
        capabilities: {
            textDocumentSync: {
                openClose: true,
                change: node_1.TextDocumentSyncKind.Full,
            },
            // Tell the client that the server supports code completion
            completionProvider: {
                resolveProvider: true,
                triggerCharacters: [':']
            },
            // Tell the client that the server supports 'go to definition'
            definitionProvider: true,
            // Tell the client that the server supports document symbols
            documentSymbolProvider: true,
            // Tell the client that the server supports hover
            hoverProvider: true,
            // Tell the client that the server supports document formatting
            documentFormattingProvider: true,
            // Tell the client that the server supports range formatting
            documentRangeFormattingProvider: true,
        },
    };
    if (hasWorkspaceFolderCapability) {
        ;
        result.capabilities.workspace = {
            workspaceFolders: {
                supported: true,
            },
        };
    }
    return result;
});
connection.onInitialized(() => {
    if (hasConfigurationCapability) {
        // Register for all configuration changes.
        connection.client.register(node_1.DidChangeConfigurationNotification.type, undefined);
    }
    if (hasWorkspaceFolderCapability) {
        connection.workspace.onDidChangeWorkspaceFolders((event) => {
            console.log("Workspace folder changes received:", event);
        });
    }
});
// SOL Artifact types following SOL principles
const SOL_ARTIFACT_TYPES = [
    'Vision', 'Domain', 'Concept', 'Policy', 'Process', 'Actor',
    'Indicator', 'Result', 'Signal', 'Observation', 'Authority', 'Protocol'
];
const SOL_FIELDS = [
    'id', 'content', 'description', 'steps', 'actors', 'type', 'vision',
    'premise', 'measurement', 'unit', 'goal', 'issuedBy', 'reason',
    'timestamp', 'author', 'date', 'language', 'tags', 'capabilities',
    'domain', 'indicators', 'policies', 'processes'
];
function parseSolDocument(document) {
    const artifacts = [];
    const lines = document.getText().split("\n");
    let currentArtifactType = null;
    let currentArtifact = null;
    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        // Detect SOL header
        const headerMatch = line.match(/^#\s*SOL\s*-\s*Semantic\s*Operations\s*Language/);
        if (headerMatch) {
            continue;
        }
        // Detect top-level artifact type (e.g., "Vision:", "Policy:", "Actor:")
        const typeMatch = line.match(/^([a-zA-Z_]+):\s*$/);
        if (typeMatch && SOL_ARTIFACT_TYPES.includes(typeMatch[1])) {
            currentArtifactType = typeMatch[1];
            currentArtifact = {
                type: currentArtifactType,
                location: node_1.Location.create(document.uri, {
                    start: { line: i, character: 0 },
                    end: { line: i, character: line.length },
                }),
            };
            continue;
        }
        // Detect ID within an artifact block
        // Handles both list items (- id: MyVision) and single items (id: MyDomain)
        const idMatch = line.match(/^\s*-\s*id:\s*([a-zA-Z0-9_]+)\s*$/) ||
            line.match(/^\s*id:\s*([a-zA-Z0-9_]+)\s*$/);
        if (idMatch && currentArtifactType) {
            const id = idMatch[1];
            const artifact = {
                id: id,
                type: currentArtifactType,
                location: node_1.Location.create(document.uri, {
                    start: { line: i, character: 0 },
                    end: { line: i, character: line.length },
                }),
            };
            // Parse additional fields for the artifact
            parseArtifactFields(artifact, lines, i);
            artifacts.push(artifact);
        }
        // Detect content field for current artifact
        const contentMatch = line.match(/^\s*content:\s*(.+)$/);
        if (contentMatch && currentArtifact) {
            currentArtifact.content = contentMatch[1];
        }
        // Detect vision reference
        const visionMatch = line.match(/^\s*vision:\s*([a-zA-Z0-9_]+)\s*$/);
        if (visionMatch && currentArtifact) {
            currentArtifact.vision = visionMatch[1];
        }
        // Detect description
        const descriptionMatch = line.match(/^\s*description:\s*(.+)$/);
        if (descriptionMatch && currentArtifact) {
            currentArtifact.description = descriptionMatch[1];
        }
    }
    return artifacts;
}
function parseArtifactFields(artifact, lines, startLine) {
    for (let i = startLine + 1; i < lines.length; i++) {
        const line = lines[i];
        // Stop if we hit another artifact or empty line
        if (line.match(/^\s*-\s*id:/) || line.match(/^[a-zA-Z_]+:\s*$/) || line.trim() === '') {
            break;
        }
        // Parse vision reference
        const visionMatch = line.match(/^\s*vision:\s*([a-zA-Z0-9_]+)/);
        if (visionMatch) {
            artifact.vision = visionMatch[1];
        }
        // Parse description
        const descriptionMatch = line.match(/^\s*description:\s*(.+)/);
        if (descriptionMatch) {
            artifact.description = descriptionMatch[1];
        }
        // Parse actors array
        const actorsMatch = line.match(/^\s*actors:\s*$/);
        if (actorsMatch) {
            artifact.actors = [];
            // Parse subsequent list items
            for (let j = i + 1; j < lines.length; j++) {
                const actorLine = lines[j];
                const actorMatch = actorLine.match(/^\s*-\s*([a-zA-Z0-9_]+)/);
                if (actorMatch) {
                    artifact.actors.push(actorMatch[1]);
                }
                else if (actorLine.trim() !== '' && !actorLine.match(/^\s*-/)) {
                    break;
                }
            }
        }
        // Parse steps array
        const stepsMatch = line.match(/^\s*steps:\s*$/);
        if (stepsMatch) {
            artifact.steps = [];
            // Parse subsequent list items
            for (let j = i + 1; j < lines.length; j++) {
                const stepLine = lines[j];
                const stepMatch = stepLine.match(/^\s*-\s*(.+)/);
                if (stepMatch) {
                    artifact.steps.push(stepMatch[1]);
                }
                else if (stepLine.trim() !== '' && !stepLine.match(/^\s*-/)) {
                    break;
                }
            }
        }
    }
}
// Helper function to get the word under the cursor
function getWordAtPosition(line, character) {
    const left = line.substring(0, character);
    const right = line.substring(character);
    const leftMatch = left.match(/[a-zA-Z0-9_]+$/);
    const rightMatch = right.match(/^[a-zA-Z0-9_]+/);
    if (leftMatch && rightMatch) {
        return leftMatch[0] + rightMatch[0];
    }
    else if (leftMatch) {
        return leftMatch[0];
    }
    else if (rightMatch) {
        return rightMatch[0];
    }
    return null;
}
// Enhanced completion provider with SOL-specific completions
connection.onCompletion((params) => {
    var _a;
    const document = documents.get(params.textDocument.uri);
    if (!document) {
        return [];
    }
    const position = params.position;
    const line = document.getText().split("\n")[position.line];
    const completions = [];
    // Provide SOL artifact type completions
    if (line.match(/^\s*$/)) {
        SOL_ARTIFACT_TYPES.forEach(type => {
            completions.push({
                label: type,
                kind: node_1.CompletionItemKind.Class,
                detail: `SOL ${type} artifact`,
                documentation: `Create a new ${type} artifact following SOL principles`,
                insertText: `${type}:\n  - id: ${type}Example\n    description: ""\n    vision: `
            });
        });
    }
    // Provide field completions
    if (line.match(/^\s*-?\s*$/)) {
        SOL_FIELDS.forEach(field => {
            completions.push({
                label: field,
                kind: node_1.CompletionItemKind.Field,
                detail: `SOL ${field} field`,
                insertText: `${field}: `
            });
        });
    }
    // Provide artifact reference completions
    if (line.match(/^\s*(vision|domain|actors|issuedBy):\s*$/)) {
        const artifacts = parseSolDocument(document);
        const fieldName = (_a = line.match(/^\s*(\w+):/)) === null || _a === void 0 ? void 0 : _a[1];
        artifacts.forEach(artifact => {
            if (shouldSuggestArtifact(fieldName, artifact.type)) {
                completions.push({
                    label: artifact.id,
                    kind: node_1.CompletionItemKind.Reference,
                    detail: `${artifact.type}: ${artifact.description || artifact.content || ''}`,
                    documentation: `Reference to ${artifact.type} artifact "${artifact.id}"`
                });
            }
        });
    }
    return completions;
});
function shouldSuggestArtifact(fieldName, artifactType) {
    switch (fieldName) {
        case 'vision':
            return artifactType === 'Vision';
        case 'domain':
            return artifactType === 'Domain';
        case 'actors':
        case 'issuedBy':
            return artifactType === 'Actor';
        default:
            return true;
    }
}
// Enhanced hover provider with SOL-specific information
connection.onHover((params) => {
    const document = documents.get(params.textDocument.uri);
    if (!document) {
        return null;
    }
    const position = params.position;
    const line = document.getText().split("\n")[position.line];
    const word = getWordAtPosition(line, position.character);
    if (!word) {
        return null;
    }
    const artifacts = parseSolDocument(document);
    const artifact = artifacts.find(art => art.id === word);
    if (artifact) {
        let contents = `**${artifact.type}**: ${artifact.id}\n\n`;
        if (artifact.description) {
            contents += `**Description**: ${artifact.description}\n\n`;
        }
        if (artifact.content) {
            contents += `**Content**: ${artifact.content}\n\n`;
        }
        if (artifact.vision) {
            contents += `**Vision**: ${artifact.vision}\n\n`;
        }
        if (artifact.actors && artifact.actors.length > 0) {
            contents += `**Actors**: ${artifact.actors.join(', ')}\n\n`;
        }
        if (artifact.steps && artifact.steps.length > 0) {
            contents += `**Steps**: ${artifact.steps.length} steps\n\n`;
        }
        contents += `*Following SOL principles: Semantic Coherence, Traceability, Simplicity, Documentation*`;
        return {
            contents: {
                kind: 'markdown',
                value: contents
            }
        };
    }
    // Check if word is a SOL artifact type
    if (SOL_ARTIFACT_TYPES.includes(word)) {
        return {
            contents: {
                kind: 'markdown',
                value: `**SOL Artifact Type**: ${word}\n\nA core SOL artifact that maintains semantic coherence and strategic traceability.`
            }
        };
    }
    // Check if word is a SOL field
    if (SOL_FIELDS.includes(word)) {
        return {
            contents: {
                kind: 'markdown',
                value: `**SOL Field**: ${word}\n\nA structured field that contributes to SOL's semantic operations and narrative integrity.`
            }
        };
    }
    return null;
});
// Document symbols provider for SOL artifacts
connection.onDocumentSymbol((params) => {
    const document = documents.get(params.textDocument.uri);
    if (!document) {
        return [];
    }
    const artifacts = parseSolDocument(document);
    return artifacts.map(artifact => ({
        name: `${artifact.id} (${artifact.type})`,
        kind: getSymbolKind(artifact.type),
        location: artifact.location,
        containerName: artifact.vision ? `Vision: ${artifact.vision}` : undefined
    }));
});
function getSymbolKind(artifactType) {
    switch (artifactType) {
        case 'Vision':
            return node_1.SymbolKind.Namespace;
        case 'Domain':
            return node_1.SymbolKind.Module;
        case 'Process':
            return node_1.SymbolKind.Function;
        case 'Actor':
            return node_1.SymbolKind.Class;
        case 'Policy':
            return node_1.SymbolKind.Interface;
        case 'Indicator':
            return node_1.SymbolKind.Variable;
        default:
            return node_1.SymbolKind.Object;
    }
}
// Enhanced definition provider with better SOL support
connection.onDefinition((params) => {
    const document = documents.get(params.textDocument.uri);
    if (!document) {
        return null;
    }
    const position = params.position;
    const line = document.getText().split("\n")[position.line];
    const word = getWordAtPosition(line, position.character);
    if (!word) {
        return null;
    }
    const artifacts = parseSolDocument(document);
    // Enhanced reference detection with SOL semantic awareness
    const referencePatterns = [
        { pattern: /vision:\s*([a-zA-Z0-9_]+)/, type: 'Vision' },
        { pattern: /domain:\s*([a-zA-Z0-9_]+)/, type: 'Domain' },
        { pattern: /actors:\s*-\s*([a-zA-Z0-9_]+)/, type: 'Actor' },
        { pattern: /issuedBy:\s*([a-zA-Z0-9_]+)/, type: 'Actor' },
        { pattern: /\(Policy:\s*([a-zA-Z0-9_]+)\)/, type: 'Policy' },
        { pattern: /\(Process:\s*([a-zA-Z0-9_]+)\)/, type: 'Process' },
        { pattern: /\(Actor:\s*([a-zA-Z0-9_]+)\)/, type: 'Actor' },
        { pattern: /\(Vision:\s*([a-zA-Z0-9_]+)\)/, type: 'Vision' },
        { pattern: /\(Domain:\s*([a-zA-Z0-9_]+)\)/, type: 'Domain' },
    ];
    for (const refPattern of referencePatterns) {
        const refMatch = line.match(refPattern.pattern);
        if (refMatch && refMatch[1] === word) {
            const wordStartInLine = line.indexOf(word, refMatch.index + refMatch[0].indexOf(word));
            if (position.character >= wordStartInLine && position.character <= wordStartInLine + word.length) {
                const definition = artifacts.find(art => art.id === word && art.type === refPattern.type);
                if (definition) {
                    return definition.location;
                }
            }
        }
    }
    // Check for actor execution references (e.g., "ActorID ->")
    const actorExecutionRefMatch = line.match(/^\s*([a-zA-Z0-9_]+)(?:\s*\([^)]*\))?\s*[->→]/);
    if (actorExecutionRefMatch && actorExecutionRefMatch[1] === word) {
        const wordStartInLine = line.indexOf(word, actorExecutionRefMatch.index + actorExecutionRefMatch[0].indexOf(word));
        if (position.character >= wordStartInLine && position.character <= wordStartInLine + word.length) {
            const definition = artifacts.find(art => art.id === word && art.type === 'Actor');
            if (definition) {
                return definition.location;
            }
        }
    }
    // Generic artifact reference lookup
    const definition = artifacts.find(art => art.id === word);
    if (definition) {
        return definition.location;
    }
    return null;
});
// SOL Document Formatter following SOL principles
connection.onDocumentFormatting((params) => {
    const document = documents.get(params.textDocument.uri);
    if (!document) {
        return [];
    }
    return formatSolDocument(document, params.options);
});
// SOL Range Formatter
connection.onDocumentRangeFormatting((params) => {
    const document = documents.get(params.textDocument.uri);
    if (!document) {
        return [];
    }
    return formatSolDocumentRange(document, params.range, params.options);
});
function formatSolDocument(document, options) {
    const text = document.getText();
    const lines = text.split('\n');
    const formattedLines = [];
    let currentIndentLevel = 0;
    let insideArtifactList = false;
    let insideFieldList = false;
    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        const trimmedLine = line.trim();
        // Skip empty lines but preserve them
        if (trimmedLine === '') {
            formattedLines.push('');
            continue;
        }
        // SOL header - no indentation
        if (trimmedLine.match(/^#\s*SOL\s*-\s*Semantic\s*Operations\s*Language/)) {
            formattedLines.push(trimmedLine);
            continue;
        }
        // Comments - preserve original indentation context
        if (trimmedLine.startsWith('#')) {
            const indent = getIndentForComment(currentIndentLevel, options);
            formattedLines.push(indent + trimmedLine);
            continue;
        }
        // Top-level artifact types (Vision:, Domain:, etc.)
        if (trimmedLine.match(/^[A-Z][a-zA-Z]*:\s*$/)) {
            currentIndentLevel = 0;
            insideArtifactList = false;
            insideFieldList = false;
            formattedLines.push(trimmedLine);
            continue;
        }
        // Artifact list items (- id: ArtifactName)
        if (trimmedLine.match(/^-\s*id:\s*[A-Za-z0-9_]+/)) {
            currentIndentLevel = 1;
            insideArtifactList = true;
            insideFieldList = false;
            const indent = getIndent(1, options);
            const formattedContent = formatArtifactListItem(trimmedLine);
            formattedLines.push(indent + formattedContent);
            continue;
        }
        // Single artifact (id: ArtifactName)
        if (trimmedLine.match(/^id:\s*[A-Za-z0-9_]+/)) {
            currentIndentLevel = 1;
            insideArtifactList = false;
            insideFieldList = false;
            const indent = getIndent(1, options);
            const formattedContent = formatField(trimmedLine);
            formattedLines.push(indent + formattedContent);
            continue;
        }
        // Field definitions within artifacts
        if (trimmedLine.match(/^(content|description|vision|premise|measurement|unit|goal|author|date|language|type|domain|version|reason|timestamp):\s*/)) {
            const fieldIndent = insideArtifactList ? 2 : 1;
            const indent = getIndent(fieldIndent, options);
            const formattedContent = formatField(trimmedLine);
            formattedLines.push(indent + formattedContent);
            continue;
        }
        // Array field headers (actors:, steps:, etc.)
        if (trimmedLine.match(/^(actors|steps|tags|capabilities|indicators|policies|processes):\s*$/)) {
            const fieldIndent = insideArtifactList ? 2 : 1;
            const indent = getIndent(fieldIndent, options);
            formattedLines.push(indent + trimmedLine);
            insideFieldList = true;
            continue;
        }
        // Array items
        if (trimmedLine.match(/^-\s+/) && insideFieldList) {
            const listIndent = insideArtifactList ? 3 : 2;
            const indent = getIndent(listIndent, options);
            const formattedContent = formatArrayItem(trimmedLine);
            formattedLines.push(indent + formattedContent);
            continue;
        }
        // Default formatting - preserve structure but clean whitespace
        const indent = getIndent(currentIndentLevel, options);
        formattedLines.push(indent + trimmedLine);
    }
    const formattedText = formattedLines.join('\n');
    // Return single edit replacing entire document
    return [{
            range: node_1.Range.create(node_1.Position.create(0, 0), node_1.Position.create(lines.length, 0)),
            newText: formattedText
        }];
}
function formatSolDocumentRange(document, range, options) {
    // For range formatting, we'll format the selected lines while maintaining context
    const text = document.getText(range);
    const fullText = document.getText();
    const lines = fullText.split('\n');
    const startLine = range.start.line;
    const endLine = range.end.line;
    // Create a mini-document with just the selected range plus context
    const contextLines = lines.slice(Math.max(0, startLine - 2), Math.min(lines.length, endLine + 3));
    const contextDocument = {
        getText: () => contextLines.join('\n')
    };
    // Format the context
    const contextFormatted = formatSolDocument(contextDocument, options);
    if (contextFormatted.length === 0) {
        return [];
    }
    // Extract just the selected portion from the formatted context
    const formattedLines = contextFormatted[0].newText.split('\n');
    const selectedFormattedLines = formattedLines.slice(2, formattedLines.length - 3);
    return [{
            range: range,
            newText: selectedFormattedLines.join('\n')
        }];
}
function getIndent(level, options) {
    const useSpaces = options.insertSpaces !== false;
    const tabSize = options.tabSize || 2;
    if (useSpaces) {
        return ' '.repeat(level * tabSize);
    }
    else {
        return '\t'.repeat(level);
    }
}
function getIndentForComment(contextLevel, options) {
    // Comments should align with their context
    return getIndent(contextLevel, options);
}
function formatField(line) {
    // Format field definitions: "field: value" with proper spacing
    const match = line.match(/^([a-zA-Z_]+):\s*(.*)$/);
    if (match) {
        const [, field, value] = match;
        if (value.trim() === '') {
            return `${field}:`;
        }
        return `${field}: ${value.trim()}`;
    }
    return line;
}
function formatArtifactListItem(line) {
    // Format artifact list items: "- id: Name" with proper spacing
    const match = line.match(/^-\s*id:\s*([A-Za-z0-9_]+)(.*)$/);
    if (match) {
        const [, id, rest] = match;
        return `- id: ${id}${rest}`;
    }
    return line;
}
function formatArrayItem(line) {
    // Format array items: "- item" with proper spacing
    const match = line.match(/^-\s+(.+)$/);
    if (match) {
        const [, content] = match;
        return `- ${content.trim()}`;
    }
    return line;
}
// Make the text document manager listen on the connection
// for open, change and close text document events
documents.listen(connection);
// Listen on the connection
connection.listen();
//# sourceMappingURL=server.js.map