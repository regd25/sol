"use strict";
/**
 * SOL Document Link Provider
 *
 * Provides clickable links for SOL artifact references following semantic notation:
 * - Actor:ActorId - Links to actor definitions
 * - Process:ProcessId - Links to process definitions
 * - Vision:VisionId - Links to vision definitions
 * - Area:AreaId - Links to area definitions
 * - etc.
 *
 * Based on the SOL project: https://github.com/regd25/sol
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentLinkProvider = void 0;
const vscode = __importStar(require("vscode"));
class DocumentLinkProvider {
    constructor() {
        this.ARTIFACT_REFERENCE_PATTERN = /([A-Z][a-zA-Z0-9]*):([A-Z][a-zA-Z0-9]*)/g;
    }
    provideDocumentLinks(document, token) {
        const links = [];
        const text = document.getText();
        // Find all artifact references in the document
        let match;
        while ((match = this.ARTIFACT_REFERENCE_PATTERN.exec(text)) !== null) {
            const artifactType = match[1];
            const artifactId = match[2];
            const fullMatch = match[0];
            // Skip if this is an artifact definition (line starts with the match)
            const lineStart = document.positionAt(match.index);
            const line = document.lineAt(lineStart.line);
            if (line.text.trim().startsWith(fullMatch + ":")) {
                continue;
            }
            // Create link range
            const startPos = document.positionAt(match.index);
            const endPos = document.positionAt(match.index + fullMatch.length);
            const linkRange = new vscode.Range(startPos, endPos);
            // Create document link
            const link = new vscode.DocumentLink(linkRange);
            link.tooltip = `Ir a definición de ${artifactType}: ${artifactId}`;
            // Try to find the target location
            const targetLocation = this.findArtifactDefinition(document, artifactType, artifactId);
            if (targetLocation) {
                link.target = targetLocation;
            }
            links.push(link);
        }
        return links;
    }
    findArtifactDefinition(document, artifactType, artifactId) {
        const text = document.getText();
        // Look for artifact definition pattern
        const definitionPatterns = [
            // Pattern 1: Artifact type at line start with ID in next lines
            new RegExp(`^${artifactType}:\\s*$`, "gm"),
            // Pattern 2: List item with ID
            new RegExp(`^\\s*-\\s*id:\\s*${artifactId}`, "gm"),
            // Pattern 3: Direct ID definition
            new RegExp(`^\\s*id:\\s*${artifactId}`, "gm"),
        ];
        for (const pattern of definitionPatterns) {
            let match;
            pattern.lastIndex = 0; // Reset regex state
            while ((match = pattern.exec(text)) !== null) {
                // For artifact type pattern, check if the ID matches in following lines
                if (pattern.source.includes(artifactType)) {
                    const position = document.positionAt(match.index);
                    const nextLines = this.getNextLines(document, position.line, 10);
                    if (this.checkIdInLines(nextLines, artifactId)) {
                        // Create URI fragment to jump to specific line
                        const uri = document.uri.with({
                            fragment: `L${position.line + 1}`,
                        });
                        return uri;
                    }
                }
                else {
                    // Direct ID match
                    const position = document.positionAt(match.index);
                    const uri = document.uri.with({
                        fragment: `L${position.line + 1}`,
                    });
                    return uri;
                }
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
}
exports.DocumentLinkProvider = DocumentLinkProvider;
//# sourceMappingURL=DocumentLinkProvider.js.map