"use strict";
/**
 * SOL Document Formatter
 *
 * Formats SOL documents following SOL principles:
 * - Semantic Coherence: Consistent structure and indentation
 * - Traceability: Clear artifact hierarchy and relationships
 * - Simplicity: Clean, readable formatting
 * - Documentation: Self-documenting code structure
 *
 * Based on the SOL project: https://github.com/regd25/sol
 *
 * @author Randy Gala <randy@hexy.dev>
 * @license MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SolFormatter = void 0;
class SolFormatter {
    constructor() {
        this.defaultOptions = {
            insertSpaces: true,
            tabSize: 2,
            trimTrailingWhitespace: true,
            insertFinalNewline: true,
            trimFinalNewlines: true,
        };
        this.formattingRules = [
            // SOL header
            {
                pattern: /^#\s*SOL\s*-\s*Semantic\s*Operations\s*Language/,
                indentLevel: 0,
                formatFunction: (line) => line.trim(),
            },
            // Top-level artifact types
            {
                pattern: /^(Vision|Domain|Concept|Policy|Process|Actor|Indicator|Result|Signal|Observation|Authority|Protocol):\s*$/,
                indentLevel: 0,
            },
            // Artifact list items
            {
                pattern: /^-\s*id:\s*[A-Za-z0-9_]+/,
                indentLevel: 1,
                formatFunction: (line) => this.formatArtifactListItem(line),
            },
            // Single artifact ID
            {
                pattern: /^id:\s*[A-Za-z0-9_]+/,
                indentLevel: 1,
                formatFunction: (line) => this.formatField(line),
            },
            // Field definitions
            {
                pattern: /^(content|description|vision|premise|measurement|unit|goal|author|date|language|type|domain|version|reason|timestamp):\s*/,
                indentLevel: -1,
                formatFunction: (line) => this.formatField(line),
            },
            // Array field headers
            {
                pattern: /^(actors|steps|tags|capabilities|indicators|policies|processes):\s*$/,
                indentLevel: -1, // Dynamic based on context
            },
            // Array items
            {
                pattern: /^-\s+/,
                indentLevel: -1,
                formatFunction: (line) => this.formatArrayItem(line),
            },
        ];
    }
    formatDocument(text, options) {
        const opts = Object.assign(Object.assign({}, this.defaultOptions), options);
        const lines = text.split("\n");
        const formattedLines = [];
        let currentContext = this.createFormattingContext();
        for (let i = 0; i < lines.length; i++) {
            const line = lines[i];
            const trimmedLine = line.trim();
            // Handle empty lines
            if (trimmedLine === "") {
                formattedLines.push("");
                continue;
            }
            // Handle comments
            if (trimmedLine.startsWith("#")) {
                const indent = this.getIndent(currentContext.commentIndentLevel, opts);
                formattedLines.push(indent + trimmedLine);
                continue;
            }
            // Apply formatting rules
            const formattedLine = this.applyFormattingRules(trimmedLine, currentContext, opts);
            formattedLines.push(formattedLine);
            // Update context based on current line
            currentContext = this.updateContext(currentContext, trimmedLine);
        }
        let result = formattedLines.join("\n");
        // Apply final formatting options
        if (opts.trimTrailingWhitespace) {
            result = this.trimTrailingWhitespace(result);
        }
        if (opts.trimFinalNewlines) {
            result = result.replace(/\n+$/, "");
        }
        if (opts.insertFinalNewline && !result.endsWith("\n")) {
            result += "\n";
        }
        return result;
    }
    createFormattingContext() {
        return {
            currentIndentLevel: 0,
            insideArtifactList: false,
            insideFieldList: false,
            commentIndentLevel: 0,
            lastArtifactType: null,
        };
    }
    applyFormattingRules(line, context, options) {
        for (const rule of this.formattingRules) {
            if (rule.pattern.test(line)) {
                let indentLevel = rule.indentLevel;
                // Handle dynamic indent levels
                if (indentLevel === -1) {
                    indentLevel = this.calculateDynamicIndent(line, context);
                }
                const indent = this.getIndent(indentLevel, options);
                const formattedContent = rule.formatFunction
                    ? rule.formatFunction(line)
                    : line;
                return indent + formattedContent;
            }
        }
        // Default formatting
        const indent = this.getIndent(context.currentIndentLevel, options);
        return indent + line;
    }
    calculateDynamicIndent(line, context) {
        // Field definitions
        if (line.match(/^(content|description|vision|premise|measurement|unit|goal|author|date|language|type|domain|version|reason|timestamp):\s*/)) {
            return context.insideArtifactList ? 2 : 1;
        }
        // Array field headers
        if (line.match(/^(actors|steps|tags|capabilities|indicators|policies|processes):\s*$/)) {
            return context.insideArtifactList ? 2 : 1;
        }
        // Array items
        if (line.match(/^-\s+/) && context.insideFieldList) {
            return context.insideArtifactList ? 3 : 2;
        }
        return context.currentIndentLevel;
    }
    updateContext(context, line) {
        const newContext = Object.assign({}, context);
        // Top-level artifact types
        if (line.match(/^[A-Z][a-zA-Z]*:\s*$/)) {
            newContext.currentIndentLevel = 0;
            newContext.insideArtifactList = false;
            newContext.insideFieldList = false;
            newContext.commentIndentLevel = 0;
            newContext.lastArtifactType = line.replace(":", "").trim();
        }
        // Artifact list items
        else if (line.match(/^-\s*id:\s*[A-Za-z0-9_]+/)) {
            newContext.currentIndentLevel = 1;
            newContext.insideArtifactList = true;
            newContext.insideFieldList = false;
            newContext.commentIndentLevel = 1;
        }
        // Single artifact
        else if (line.match(/^id:\s*[A-Za-z0-9_]+/)) {
            newContext.currentIndentLevel = 1;
            newContext.insideArtifactList = false;
            newContext.insideFieldList = false;
            newContext.commentIndentLevel = 1;
        }
        // Array field headers
        else if (line.match(/^(actors|steps|tags|capabilities|indicators|policies|processes):\s*$/)) {
            newContext.insideFieldList = true;
            newContext.commentIndentLevel = newContext.insideArtifactList ? 2 : 1;
        }
        return newContext;
    }
    getIndent(level, options) {
        if (options.insertSpaces) {
            return " ".repeat(level * options.tabSize);
        }
        else {
            return "\t".repeat(level);
        }
    }
    formatField(line) {
        const match = line.match(/^([a-zA-Z_]+):\s*(.*)$/);
        if (match) {
            const [, field, value] = match;
            if (value.trim() === "") {
                return `${field}:`;
            }
            return `${field}: ${value.trim()}`;
        }
        return line;
    }
    formatArtifactListItem(line) {
        const match = line.match(/^-\s*id:\s*([A-Za-z0-9_]+)(.*)$/);
        if (match) {
            const [, id, rest] = match;
            return `- id: ${id}${rest}`;
        }
        return line;
    }
    formatArrayItem(line) {
        const match = line.match(/^-\s+(.+)$/);
        if (match) {
            const [, content] = match;
            return `- ${content.trim()}`;
        }
        return line;
    }
    trimTrailingWhitespace(text) {
        return text
            .split("\n")
            .map((line) => line.replace(/\s+$/, ""))
            .join("\n");
    }
    // Utility method for validating SOL document structure
    validateStructure(text) {
        const errors = [];
        const lines = text.split("\n");
        let hasSOLHeader = false;
        let hasArtifacts = false;
        for (let i = 0; i < lines.length; i++) {
            const line = lines[i].trim();
            if (line.match(/^#\s*SOL\s*-\s*Semantic\s*Operations\s*Language/)) {
                hasSOLHeader = true;
            }
            if (line.match(/^(Vision|Domain|Concept|Policy|Process|Actor|Indicator):\s*$/)) {
                hasArtifacts = true;
            }
        }
        if (!hasSOLHeader) {
            errors.push("Missing SOL header: # SOL - Semantic Operations Language");
        }
        if (!hasArtifacts) {
            errors.push("No SOL artifacts found in document");
        }
        return {
            isValid: errors.length === 0,
            errors,
        };
    }
}
exports.SolFormatter = SolFormatter;
//# sourceMappingURL=SolFormatter.js.map