"use strict";
/**
 * SOL Semantic Validator v2025.07
 *
 * Implements comprehensive semantic validation rules for SOL artifacts
 * following the refactoring plan Phase 4 requirements:
 * - References must use Actor:Id notation
 * - Hierarchical scope validation
 * - DRY compliance checking
 * - Flow notation validation
 *
 * Based on the SOL project: https://github.com/regd25/sol
 *
 * @author Randy Gala <randy@hexy.dev>
 * @license MIT
 */
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
exports.SemanticValidator = void 0;
class SemanticValidator {
    constructor() {
        this.SEMANTIC_RULES = [
            // ✅ Actor Reference Validation (Actor:Id notation - SOL v2025.07)
            {
                id: "ACTOR_REFERENCE_NOTATION",
                pattern: /actor:\s*["']?([^"'\n]+)["']?/gi,
                validator: (match, context) => {
                    const actorRef = match[1].trim();
                    if (!actorRef.match(/^Actor:[A-Z][a-zA-Z0-9]*$/)) {
                        return [
                            {
                                type: "reference",
                                message: `Actor reference must use Actor:Id notation, found: "${actorRef}"`,
                                line: context.currentLine,
                                column: match.index || 0,
                                severity: "error",
                                suggestion: `Use Actor:${this.toCamelCase(actorRef.replace(/^Actor[:.]/, ""))} instead`,
                                ruleId: "ACTOR_REFERENCE_NOTATION",
                            },
                        ];
                    }
                    return [];
                },
                category: "reference",
            },
            // ✅ Area Reference Validation (Area:Id notation - SOL v2025.07)
            {
                id: "AREA_REFERENCE_NOTATION",
                pattern: /area:\s*["']?([^"'\n]+)["']?/gi,
                validator: (match, context) => {
                    const areaRef = match[1].trim();
                    if (!areaRef.match(/^Area:[A-Z][a-zA-Z0-9]*(\.[A-Z][a-zA-Z0-9]*)*$/)) {
                        return [
                            {
                                type: "reference",
                                message: `Area reference must use Area:Id notation, found: "${areaRef}"`,
                                line: context.currentLine,
                                column: match.index || 0,
                                severity: "error",
                                suggestion: `Use Area:${this.toCamelCase(areaRef.replace(/^Area[:.]/, ""))} instead`,
                                ruleId: "AREA_REFERENCE_NOTATION",
                            },
                        ];
                    }
                    return [];
                },
                category: "reference",
            },
            // ✅ Flow Step Notation Validation (- Actor:Id → "action" - SOL v2025.07)
            {
                id: "FLOW_STEP_NOTATION",
                pattern: /-\s*Actor:([A-Z][a-zA-Z0-9]*)\s*→\s*"(.+)"/gi,
                validator: (match, context) => {
                    const actorId = match[1].trim();
                    const action = match[2].trim();
                    // Check if this is within a flow/steps section
                    const isInFlow = this.isInFlowSection(context.lines, context.currentLine);
                    if (isInFlow) {
                        // Validate actor reference exists
                        const actorRef = `Actor:${actorId}`;
                        if (!context.artifacts.has(actorRef)) {
                            return [
                                {
                                    type: "reference",
                                    message: `Referenced actor "${actorRef}" not found in context`,
                                    line: context.currentLine,
                                    column: match.index || 0,
                                    severity: "warning",
                                    suggestion: `Ensure Actor:${actorId} is defined`,
                                    ruleId: "FLOW_ACTOR_REFERENCE",
                                },
                            ];
                        }
                    }
                    return [];
                },
                category: "flow",
            },
            // ✅ Uses Block Validation (Foundational Composition - SOL v2025.07)
            {
                id: "USES_BLOCK_VALIDATION",
                pattern: /uses:\s*\n(\s+)(intent|context|authority|evaluation):\s*([A-Z][a-zA-Z0-9]*):([A-Z][a-zA-Z0-9]*)/gi,
                validator: (match, context) => {
                    const foundationalType = match[2].toLowerCase();
                    const artifactType = match[3];
                    const artifactId = match[4];
                    const fullReference = `${artifactType}:${artifactId}`;
                    // Validate foundational type matches artifact type
                    const expectedType = foundationalType.charAt(0).toUpperCase() + foundationalType.slice(1);
                    if (artifactType !== expectedType) {
                        return [
                            {
                                type: "reference",
                                message: `Foundational reference type mismatch: "${foundationalType}" should reference ${expectedType}:Id, found ${artifactType}:${artifactId}`,
                                line: context.currentLine,
                                column: match.index || 0,
                                severity: "error",
                                suggestion: `Use ${expectedType}:${artifactId} instead`,
                                ruleId: "USES_BLOCK_VALIDATION",
                            },
                        ];
                    }
                    return [];
                },
                category: "reference",
            },
            // ✅ DRY Compliance - Inline Foundational Block Detection
            {
                id: "DRY_FOUNDATIONAL_BLOCKS",
                pattern: /^(\s*)(intent|context|authority|evaluation):\s*$/gim,
                validator: (match, context) => {
                    const blockType = match[2].toLowerCase();
                    const isWithinUsesBlock = context.lines
                        .slice(Math.max(0, context.currentLine - 5), context.currentLine)
                        .some((line) => line.trim() === "uses:");
                    // Only flag as DRY violation if it's an inline block, not within uses composition
                    if (!isWithinUsesBlock) {
                        return [
                            {
                                type: "dry",
                                message: `Inline foundational block "${blockType}" violates DRY principle. Should be defined as separate artifact and referenced via uses: ${blockType.charAt(0).toUpperCase() + blockType.slice(1)}:Id`,
                                line: context.currentLine,
                                column: match.index || 0,
                                severity: "warning",
                                suggestion: `Create ${blockType.charAt(0).toUpperCase() + blockType.slice(1)}:MyId artifact and use "uses: { ${blockType}: ${blockType.charAt(0).toUpperCase() + blockType.slice(1)}:MyId }"`,
                                ruleId: "DRY_FOUNDATIONAL_BLOCKS",
                            },
                        ];
                    }
                    return [];
                },
                category: "dry",
            },
            // ✅ Meta Block Validation (Template compliance)
            {
                id: "META_BLOCK_VALIDATION",
                pattern: /^([A-Z][a-zA-Z0-9]*):\s*$/gm,
                validator: (match, context) => {
                    const artifactType = match[1];
                    const errors = [];
                    // Check if meta block follows after artifact definition within reasonable distance
                    const nextLines = context.lines.slice(context.currentLine + 1, context.currentLine + 10);
                    const hasMetaBlock = nextLines.some((line) => line.trim().startsWith("meta:"));
                    if (!hasMetaBlock) {
                        errors.push({
                            type: "semantic",
                            message: `Artifact ${artifactType} is missing required meta block with id, version, status, etc.`,
                            line: context.currentLine,
                            column: match.index || 0,
                            severity: "warning",
                            suggestion: "Add meta block with required fields: id, version, created, status, author",
                            ruleId: "META_BLOCK_VALIDATION",
                        });
                    }
                    return errors;
                },
                category: "semantic",
            },
            // ✅ Hierarchical Scope Validation
            {
                id: "HIERARCHICAL_SCOPE",
                pattern: /^([A-Z][a-zA-Z0-9]*):$/gm,
                validator: (match, context) => {
                    const artifactType = match[1];
                    const errors = [];
                    // Check if artifact type is valid
                    const validArtifacts = [
                        "Vision",
                        "Principle",
                        "Policy",
                        "Guideline",
                        "Area",
                        "Actor",
                        "Process",
                        "Procedure",
                        "Event",
                        "Result",
                        "Observation",
                        "Intent",
                        "Context",
                        "Authority",
                        "Evaluation",
                        "Indicator",
                    ];
                    if (!validArtifacts.includes(artifactType)) {
                        errors.push({
                            type: "hierarchy",
                            message: `Unknown artifact type: "${artifactType}". Valid types: ${validArtifacts.join(", ")}`,
                            line: context.currentLine,
                            column: match.index || 0,
                            severity: "error",
                            suggestion: `Use one of the valid artifact types`,
                            ruleId: "HIERARCHICAL_SCOPE",
                        });
                    }
                    return errors;
                },
                category: "hierarchy",
            },
            // ✅ Cross-Reference Validation
            {
                id: "CROSS_REFERENCE_VALIDATION",
                pattern: /([A-Z][a-zA-Z0-9]*):([A-Z][a-zA-Z0-9]*)/g,
                validator: (match, context) => {
                    const artifactType = match[1];
                    const artifactId = match[2];
                    const fullReference = `${artifactType}:${artifactId}`;
                    // Skip if this is a definition line (artifact header)
                    if (context.lines[context.currentLine].trim().endsWith(":")) {
                        return [];
                    }
                    // Check if referenced artifact exists in context
                    const referencedArtifact = context.artifacts.get(fullReference);
                    if (!referencedArtifact) {
                        return [
                            {
                                type: "reference",
                                message: `Referenced artifact "${fullReference}" not found in current context`,
                                line: context.currentLine,
                                column: match.index || 0,
                                severity: "warning",
                                suggestion: `Ensure "${fullReference}" is defined in the same document or properly imported`,
                                ruleId: "CROSS_REFERENCE_VALIDATION",
                            },
                        ];
                    }
                    return [];
                },
                category: "reference",
            },
        ];
    }
    /**
     * Validates a SOL document against semantic rules
     */
    validateDocument(text) {
        return __awaiter(this, void 0, void 0, function* () {
            const startTime = Date.now();
            const errors = [];
            const warnings = [];
            const artifacts = new Map();
            const lines = text.split("\n");
            const context = {
                text,
                lines,
                currentLine: 0,
                artifacts,
                foundationalArtifacts: this.extractFoundationalArtifacts(text),
            };
            // First pass: Extract all artifacts
            this.extractArtifacts(text, artifacts);
            // Second pass: Validate against semantic rules
            for (let i = 0; i < lines.length; i++) {
                context.currentLine = i;
                const line = lines[i];
                for (const rule of this.SEMANTIC_RULES) {
                    const matches = Array.from(line.matchAll(rule.pattern));
                    for (const match of matches) {
                        const ruleErrors = rule.validator(match, context);
                        errors.push(...ruleErrors);
                    }
                }
            }
            // Third pass: Generate improvement warnings
            const improvementWarnings = this.generateImprovementWarnings(text, artifacts);
            warnings.push(...improvementWarnings);
            const processingTime = Date.now() - startTime;
            return {
                isValid: errors.filter((e) => e.severity === "error").length === 0,
                errors,
                warnings,
                artifacts: Array.from(artifacts.values()),
                processingTime,
            };
        });
    }
    /**
     * Validates hierarchical scope rules
     */
    validateHierarchy(artifact) {
        var _a;
        const errors = [];
        const warnings = [];
        // Validate organizational level constraints
        if (artifact.organizational) {
            const level = artifact.organizational.level;
            const area = artifact.organizational.area;
            const canReference = artifact.organizational.canReference || [];
            // Check if references respect hierarchical boundaries
            if ((_a = artifact.relationships) === null || _a === void 0 ? void 0 : _a.dependsOn) {
                for (const dependency of artifact.relationships.dependsOn) {
                    if (!this.canReference(level, area, dependency, canReference)) {
                        errors.push({
                            type: "hierarchy",
                            message: `Artifact at ${level} level cannot reference ${dependency} due to hierarchical constraints`,
                            line: 0,
                            column: 0,
                            severity: "error",
                            suggestion: "Use appropriate hierarchical communication pattern (Events for cross-area, delegation for lower levels)",
                            ruleId: "HIERARCHY_CONSTRAINT",
                        });
                    }
                }
            }
        }
        return {
            isValid: errors.length === 0,
            errors,
            warnings,
            artifacts: [],
            processingTime: 0,
        };
    }
    /**
     * Validates DRY compliance
     */
    validateDRYCompliance(text) {
        const errors = [];
        const warnings = [];
        // Detect duplicate foundational blocks
        const duplicateBlocks = this.findDuplicateFoundationalBlocks(text);
        for (const duplicate of duplicateBlocks) {
            warnings.push({
                type: "best-practice",
                message: `Duplicate foundational block "${duplicate.type}" found. Consider extracting to separate ${duplicate.type.charAt(0).toUpperCase() + duplicate.type.slice(1)} artifact`,
                line: duplicate.line,
                column: 0,
                suggestion: `Create ${duplicate.type.charAt(0).toUpperCase() + duplicate.type.slice(1)}:${duplicate.suggestedId} and reference via uses`,
                ruleId: "DRY_COMPLIANCE",
            });
        }
        return {
            isValid: true,
            errors,
            warnings,
            artifacts: [],
            processingTime: 0,
        };
    }
    // ====== PRIVATE HELPER METHODS ======
    extractArtifacts(text, artifacts) {
        const artifactPattern = /^([A-Z][a-zA-Z0-9]*):(?:\s*\n\s*(?:-\s*)?id:\s*([A-Z][a-zA-Z0-9]*)|(?:\s*\n\s*id:\s*([A-Z][a-zA-Z0-9]*)))/gm;
        let match;
        while ((match = artifactPattern.exec(text)) !== null) {
            const artifactType = match[1];
            const artifactId = match[2] || match[3];
            const line = text.substring(0, match.index).split("\n").length - 1;
            if (artifactId) {
                // Use colon notation for SOL (correct format)
                const fullId = `${artifactType}:${artifactId}`;
                artifacts.set(fullId, {
                    type: artifactType,
                    id: artifactId,
                    line,
                    references: [],
                    referencedBy: [],
                });
            }
        }
    }
    extractFoundationalArtifacts(text) {
        const foundational = new Set();
        const foundationalTypes = ["intent", "context", "authority", "evaluation"];
        for (const type of foundationalTypes) {
            if (text.includes(`${type.charAt(0).toUpperCase() + type.slice(1)}:`)) {
                foundational.add(type);
            }
        }
        return foundational;
    }
    isInFlowSection(lines, currentLine) {
        // Look backwards to find if we're in a flow/steps section
        for (let i = currentLine - 1; i >= 0; i--) {
            const line = lines[i].trim();
            if (line === "steps:" || line === "flow:") {
                return true;
            }
            if (line.endsWith(":") &&
                !line.includes("steps") &&
                !line.includes("flow")) {
                return false;
            }
        }
        return false;
    }
    canReference(level, area, dependency, allowedRefs) {
        // Implementation of hierarchical reference rules
        return allowedRefs.some((ref) => {
            if (ref === "same-area/*") {
                return dependency.includes(area);
            }
            if (ref === "strategic/*") {
                return dependency.includes("Vision") || dependency.includes("Principle");
            }
            return dependency.match(new RegExp(ref.replace("*", ".*")));
        });
    }
    findDuplicateFoundationalBlocks(text) {
        const blocks = [];
        const foundationalTypes = ["intent", "context", "authority", "evaluation"];
        for (const type of foundationalTypes) {
            const pattern = new RegExp(`^\\s*${type}:\\s*$`, "gmi");
            let match;
            let count = 0;
            while ((match = pattern.exec(text)) !== null) {
                count++;
                if (count > 1) {
                    const line = text.substring(0, match.index).split("\n").length - 1;
                    blocks.push({
                        type,
                        line,
                        suggestedId: `${type.charAt(0).toUpperCase() + type.slice(1)}${count}`,
                    });
                }
            }
        }
        return blocks;
    }
    generateImprovementWarnings(text, artifacts) {
        const warnings = [];
        // Check for missing foundational artifacts
        const missingFoundational = [
            "Intent",
            "Context",
            "Authority",
            "Evaluation",
        ].filter((type) => !Array.from(artifacts.keys()).some((key) => key.startsWith(type + ":")));
        if (missingFoundational.length > 0) {
            warnings.push({
                type: "recommendation",
                message: `Consider adding foundational artifacts: ${missingFoundational.join(", ")}`,
                line: 0,
                column: 0,
                suggestion: "Foundational artifacts improve semantic coherence and reduce duplication",
                ruleId: "MISSING_FOUNDATIONAL",
            });
        }
        return warnings;
    }
    toCamelCase(str) {
        return str
            .replace(/[^a-zA-Z0-9]/g, " ")
            .split(" ")
            .map((word, index) => index === 0
            ? word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
            : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
            .join("");
    }
}
exports.SemanticValidator = SemanticValidator;
//# sourceMappingURL=SemanticValidator.js.map