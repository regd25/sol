"use strict";
/**
 * SOL Extension Test Setup
 *
 * Global test configuration for Jest following SOL principles:
 * - Semantic Coherence: Consistent test environment setup
 * - Traceability: Clear test configuration and utilities
 * - Simplicity: Minimal, focused setup
 * - Documentation: Well-documented test helpers
 *
 * Based on the SOL project: https://github.com/regd25/sol
 *
 * @author Randy Gala <randy@hexy.dev>
 * @license MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestUtils = void 0;
// Custom Jest matchers for SOL testing
expect.extend({
    toBeValidSOLDocument(received) {
        const hasSOLHeader = received.includes("# SOL - Semantic Operations Language");
        const hasArtifacts = /^(Vision|Domain|Process|Actor|Policy|Indicator):/m.test(received);
        const pass = hasSOLHeader && hasArtifacts;
        if (pass) {
            return {
                message: () => `Expected document not to be a valid SOL document`,
                pass: true,
            };
        }
        else {
            return {
                message: () => `Expected document to be a valid SOL document (missing ${!hasSOLHeader ? "SOL header" : "artifacts"})`,
                pass: false,
            };
        }
    },
    toHaveProperSOLIndentation(received) {
        const lines = received.split("\n");
        let hasProperIndentation = true;
        let errorMessage = "";
        for (let i = 0; i < lines.length; i++) {
            const line = lines[i];
            // Skip empty lines and comments
            if (line.trim() === "" || line.trim().startsWith("#")) {
                continue;
            }
            // Check artifact types (should have no indentation)
            if (/^[A-Z][a-zA-Z]*:\s*$/.test(line.trim())) {
                if (line.startsWith(" ") || line.startsWith("\t")) {
                    hasProperIndentation = false;
                    errorMessage = `Line ${i + 1}: Artifact type should not be indented: "${line}"`;
                    break;
                }
            }
            // Check artifact list items (should be indented with 2 spaces)
            if (/^-\s*id:/.test(line.trim())) {
                if (!line.startsWith("  ") || line.startsWith("   ")) {
                    hasProperIndentation = false;
                    errorMessage = `Line ${i + 1}: Artifact list item should be indented with exactly 2 spaces: "${line}"`;
                    break;
                }
            }
        }
        if (hasProperIndentation) {
            return {
                message: () => `Expected document not to have proper SOL indentation`,
                pass: true,
            };
        }
        else {
            return {
                message: () => `Expected document to have proper SOL indentation: ${errorMessage}`,
                pass: false,
            };
        }
    },
    toContainSOLArtifact(received, artifactType, artifactId) {
        const artifactPattern = new RegExp(`${artifactType}:[\\s\\S]*?id:\\s*${artifactId}`, "m");
        const pass = artifactPattern.test(received);
        if (pass) {
            return {
                message: () => `Expected document not to contain ${artifactType} artifact with id "${artifactId}"`,
                pass: true,
            };
        }
        else {
            return {
                message: () => `Expected document to contain ${artifactType} artifact with id "${artifactId}"`,
                pass: false,
            };
        }
    },
});
// Global test utilities
exports.TestUtils = {
    /**
     * Creates a minimal valid SOL document for testing
     */
    createMinimalSOLDocument() {
        return `# SOL - Semantic Operations Language

Vision:
  - id: TestVision
    content: "Test vision for validation"

Domain:
  id: TestDomain
  description: "Test domain"
  vision: TestVision`;
    },
    /**
     * Creates an invalid SOL document for error testing
     */
    createInvalidSOLDocument() {
        return `# Invalid Document

SomeRandomStuff:
  - invalid: content`;
    },
    /**
     * Removes all whitespace for comparison testing
     */
    normalizeWhitespace(text) {
        return text.replace(/\s+/g, " ").trim();
    },
    /**
     * Extracts artifact IDs from a SOL document
     */
    extractArtifactIds(text) {
        const idMatches = text.match(/id:\s*([A-Za-z0-9_]+)/g);
        return idMatches
            ? idMatches.map((match) => match.replace(/id:\s*/, ""))
            : [];
    },
    /**
     * Checks if a document follows SOL naming conventions
     */
    hasValidSOLNaming(text) {
        const ids = this.extractArtifactIds(text);
        return ids.every((id) => /^[A-Z][a-zA-Z0-9_]*$/.test(id));
    },
};
// Mock VS Code API for testing
const mockVSCode = {
    window: {
        showInformationMessage: jest.fn(),
        showWarningMessage: jest.fn(),
        showErrorMessage: jest.fn(),
        activeTextEditor: null,
        createStatusBarItem: jest.fn(() => ({
            text: "",
            tooltip: "",
            command: "",
            show: jest.fn(),
            hide: jest.fn(),
        })),
        createWebviewPanel: jest.fn(),
        showTextDocument: jest.fn(),
        onDidChangeActiveTextEditor: jest.fn(),
    },
    workspace: {
        createFileSystemWatcher: jest.fn(() => ({
            onDidChange: jest.fn(),
            onDidCreate: jest.fn(),
            onDidDelete: jest.fn(),
        })),
        openTextDocument: jest.fn(),
    },
    commands: {
        registerCommand: jest.fn(),
        executeCommand: jest.fn(),
    },
    languages: {
        createDiagnosticCollection: jest.fn(() => ({
            set: jest.fn(),
            clear: jest.fn(),
        })),
    },
    StatusBarAlignment: {
        Right: 2,
    },
    ViewColumn: {
        Beside: 2,
    },
    DiagnosticSeverity: {
        Error: 0,
        Warning: 1,
        Information: 2,
        Hint: 3,
    },
    Range: jest.fn(),
    Diagnostic: jest.fn(),
};
global.vscode = mockVSCode;
// Console setup for better test output
const originalConsoleError = console.error;
console.error = (...args) => {
    // Suppress expected errors in tests
    if (args[0] &&
        typeof args[0] === "string" &&
        args[0].includes("Expected test error")) {
        return;
    }
    originalConsoleError.apply(console, args);
};
// Test timeout configuration
jest.setTimeout(10000);
//# sourceMappingURL=setup.js.map