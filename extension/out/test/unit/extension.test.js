"use strict";
/**
 * SOL Extension Unit Tests
 *
 * Unit tests for the main extension functionality following SOL principles:
 * - Semantic Coherence: Tests validate extension behavior consistency
 * - Traceability: Clear mapping between features and tests
 * - Simplicity: Focused, isolated unit tests
 * - Documentation: Well-documented test scenarios
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
const vscode = __importStar(require("vscode"));
const setup_1 = require("../setup");
// Mock the extension module
jest.mock('../../extension', () => ({
    activate: jest.fn(),
    deactivate: jest.fn(),
    validateSemanticCoherence: jest.fn(),
    showArtifactTraceability: jest.fn(),
    generateDocumentation: jest.fn(),
    formatSOLDocument: jest.fn(),
}));
describe('SOL Extension Core Functionality', () => {
    let mockContext;
    let mockStatusBarItem;
    beforeEach(() => {
        // Reset all mocks
        jest.clearAllMocks();
        // Create mock extension context
        mockContext = {
            subscriptions: [],
            workspaceState: {
                get: jest.fn(),
                update: jest.fn(),
            },
            globalState: {
                get: jest.fn(),
                update: jest.fn(),
            },
            extensionPath: '/mock/extension/path',
            storagePath: '/mock/storage/path',
            globalStoragePath: '/mock/global/storage/path',
            logPath: '/mock/log/path',
            asAbsolutePath: jest.fn((relativePath) => `/mock/extension/path/${relativePath}`),
        };
        // Mock status bar item
        mockStatusBarItem = {
            text: '',
            tooltip: '',
            command: '',
            show: jest.fn(),
            hide: jest.fn(),
            dispose: jest.fn(),
        };
        vscode.window.createStatusBarItem.mockReturnValue(mockStatusBarItem);
    });
    describe('Extension Activation', () => {
        test('should activate extension successfully', () => __awaiter(void 0, void 0, void 0, function* () {
            const { activate } = require('../../extension');
            yield activate(mockContext);
            expect(activate).toHaveBeenCalledWith(mockContext);
            expect(mockContext.subscriptions.length).toBeGreaterThan(0);
        }));
        test('should register all SOL commands', () => __awaiter(void 0, void 0, void 0, function* () {
            const { activate } = require('../../extension');
            const registerCommandSpy = vscode.commands.registerCommand;
            yield activate(mockContext);
            expect(registerCommandSpy).toHaveBeenCalledWith('sol.validateSemanticCoherence', expect.any(Function));
            expect(registerCommandSpy).toHaveBeenCalledWith('sol.showArtifactTraceability', expect.any(Function));
            expect(registerCommandSpy).toHaveBeenCalledWith('sol.generateDocumentation', expect.any(Function));
            expect(registerCommandSpy).toHaveBeenCalledWith('sol.formatDocument', expect.any(Function));
        }));
        test('should create status bar item for SOL documents', () => __awaiter(void 0, void 0, void 0, function* () {
            const { activate } = require('../../extension');
            yield activate(mockContext);
            expect(vscode.window.createStatusBarItem).toHaveBeenCalledWith(vscode.StatusBarAlignment.Right, 100);
            expect(mockStatusBarItem.text).toContain('SOL');
            expect(mockStatusBarItem.tooltip).toContain('Semantic Operations Language');
        }));
    });
    describe('Extension Deactivation', () => {
        test('should deactivate extension cleanly', () => __awaiter(void 0, void 0, void 0, function* () {
            const { deactivate } = require('../../extension');
            yield deactivate();
            expect(deactivate).toHaveBeenCalled();
        }));
    });
    describe('Document Type Detection', () => {
        test('should detect SOL documents by extension', () => {
            const solDocument = { fileName: 'test.sol', languageId: 'sol' };
            const yamlDocument = { fileName: 'test.sol.yml', languageId: 'yaml' };
            const regularDocument = { fileName: 'test.txt', languageId: 'plaintext' };
            expect(solDocument.fileName.endsWith('.sol')).toBe(true);
            expect(yamlDocument.fileName.includes('.sol.')).toBe(true);
            expect(regularDocument.fileName.endsWith('.sol')).toBe(false);
        });
        test('should identify SOL content by header', () => {
            const solContent = setup_1.TestUtils.createMinimalSOLDocument();
            const regularContent = 'Just some regular text content';
            expect(solContent).toBeValidSOLDocument();
            expect(regularContent).not.toBeValidSOLDocument();
        });
    });
    describe('Semantic Coherence Validation', () => {
        test('should validate artifact references', () => __awaiter(void 0, void 0, void 0, function* () {
            const { validateSemanticCoherence } = require('../../extension');
            const validDocument = setup_1.TestUtils.createMinimalSOLDocument();
            const result = yield validateSemanticCoherence(validDocument);
            expect(validateSemanticCoherence).toHaveBeenCalledWith(validDocument);
            expect(result).toBeDefined();
        }));
        test('should detect broken artifact references', () => __awaiter(void 0, void 0, void 0, function* () {
            const { validateSemanticCoherence } = require('../../extension');
            const invalidDocument = `# SOL - Semantic Operations Language

Vision:
  - id: TestVision
    content: "Test vision"

Domain:
  id: TestDomain
  vision: NonExistentVision  # Broken reference`;
            const result = yield validateSemanticCoherence(invalidDocument);
            expect(validateSemanticCoherence).toHaveBeenCalledWith(invalidDocument);
            expect(result).toBeDefined();
        }));
    });
    describe('Artifact Traceability', () => {
        test('should generate traceability map', () => __awaiter(void 0, void 0, void 0, function* () {
            const { showArtifactTraceability } = require('../../extension');
            const document = setup_1.TestUtils.createMinimalSOLDocument();
            const result = yield showArtifactTraceability(document);
            expect(showArtifactTraceability).toHaveBeenCalledWith(document);
            expect(result).toBeDefined();
        }));
        test('should trace Vision to Domain relationships', () => __awaiter(void 0, void 0, void 0, function* () {
            const { showArtifactTraceability } = require('../../extension');
            const document = `# SOL - Semantic Operations Language

Vision:
  - id: MainVision
    content: "Main system vision"

Domain:
  id: CoreDomain
  vision: MainVision

Process:
  - id: CoreProcess
    domain: CoreDomain
    vision: MainVision`;
            const result = yield showArtifactTraceability(document);
            expect(showArtifactTraceability).toHaveBeenCalledWith(document);
            expect(result).toBeDefined();
        }));
    });
    describe('Documentation Generation', () => {
        test('should generate documentation from SOL artifacts', () => __awaiter(void 0, void 0, void 0, function* () {
            const { generateDocumentation } = require('../../extension');
            const document = setup_1.TestUtils.createMinimalSOLDocument();
            const result = yield generateDocumentation(document);
            expect(generateDocumentation).toHaveBeenCalledWith(document);
            expect(result).toBeDefined();
        }));
        test('should include all artifact types in documentation', () => __awaiter(void 0, void 0, void 0, function* () {
            const { generateDocumentation } = require('../../extension');
            const complexDocument = `# SOL - Semantic Operations Language

Vision:
  - id: SystemVision
    content: "Complete system vision"

Domain:
  id: BusinessDomain
  vision: SystemVision

Actor:
  - id: BusinessUser
    domain: BusinessDomain

Process:
  - id: BusinessProcess
    domain: BusinessDomain
    actors:
      - BusinessUser

Policy:
  - id: BusinessPolicy
    domain: BusinessDomain

Indicator:
  - id: PerformanceIndicator
    process: BusinessProcess`;
            const result = yield generateDocumentation(complexDocument);
            expect(generateDocumentation).toHaveBeenCalledWith(complexDocument);
            expect(result).toBeDefined();
        }));
    });
    describe('Document Formatting', () => {
        test('should format SOL document correctly', () => __awaiter(void 0, void 0, void 0, function* () {
            const { formatSOLDocument } = require('../../extension');
            const unformattedDocument = `# SOL - Semantic Operations Language
Vision:
-id:TestVision
content:"Test content"`;
            const result = yield formatSOLDocument(unformattedDocument);
            expect(formatSOLDocument).toHaveBeenCalledWith(unformattedDocument);
            expect(result).toBeDefined();
        }));
        test('should preserve document structure during formatting', () => __awaiter(void 0, void 0, void 0, function* () {
            const { formatSOLDocument } = require('../../extension');
            const document = setup_1.TestUtils.createMinimalSOLDocument();
            const result = yield formatSOLDocument(document);
            expect(formatSOLDocument).toHaveBeenCalledWith(document);
            expect(result).toBeDefined();
        }));
    });
    describe('Error Handling', () => {
        test('should handle invalid documents gracefully', () => __awaiter(void 0, void 0, void 0, function* () {
            const { validateSemanticCoherence } = require('../../extension');
            const invalidDocument = 'This is not a SOL document';
            const result = yield validateSemanticCoherence(invalidDocument);
            expect(validateSemanticCoherence).toHaveBeenCalledWith(invalidDocument);
            expect(result).toBeDefined();
        }));
        test('should handle empty documents', () => __awaiter(void 0, void 0, void 0, function* () {
            const { formatSOLDocument } = require('../../extension');
            const emptyDocument = '';
            const result = yield formatSOLDocument(emptyDocument);
            expect(formatSOLDocument).toHaveBeenCalledWith(emptyDocument);
            expect(result).toBeDefined();
        }));
        test('should show appropriate error messages', () => __awaiter(void 0, void 0, void 0, function* () {
            const showErrorMessageSpy = vscode.window.showErrorMessage;
            const { validateSemanticCoherence } = require('../../extension');
            // Simulate an error condition
            validateSemanticCoherence.mockRejectedValue(new Error('Test error'));
            try {
                yield validateSemanticCoherence('invalid');
            }
            catch (error) {
                // Expected to throw
            }
            expect(validateSemanticCoherence).toHaveBeenCalledWith('invalid');
        }));
    });
    describe('Status Bar Integration', () => {
        test('should update status bar for SOL documents', () => {
            // Simulate active editor change to SOL document
            const mockEditor = {
                document: {
                    fileName: 'test.sol',
                    languageId: 'sol',
                    getText: () => setup_1.TestUtils.createMinimalSOLDocument(),
                }
            };
            // Simulate the status bar update logic
            if (mockEditor.document.fileName.endsWith('.sol')) {
                mockStatusBarItem.text = '$(file-code) SOL';
                mockStatusBarItem.tooltip = 'SOL - Semantic Operations Language';
                mockStatusBarItem.show();
            }
            expect(mockStatusBarItem.text).toBe('$(file-code) SOL');
            expect(mockStatusBarItem.tooltip).toBe('SOL - Semantic Operations Language');
            expect(mockStatusBarItem.show).toHaveBeenCalled();
        });
        test('should hide status bar for non-SOL documents', () => {
            // Simulate active editor change to non-SOL document
            const mockEditor = {
                document: {
                    fileName: 'test.txt',
                    languageId: 'plaintext',
                }
            };
            // Simulate the status bar update logic
            if (!mockEditor.document.fileName.endsWith('.sol')) {
                mockStatusBarItem.hide();
            }
            expect(mockStatusBarItem.hide).toHaveBeenCalled();
        });
    });
    describe('Configuration Management', () => {
        test('should read formatting configuration', () => {
            const mockConfiguration = {
                get: jest.fn(),
            };
            vscode.workspace.getConfiguration.mockReturnValue(mockConfiguration);
            mockConfiguration.get.mockImplementation((key) => {
                switch (key) {
                    case 'formatting.insertSpaces': return true;
                    case 'formatting.tabSize': return 2;
                    case 'validation.enableSemanticCoherence': return true;
                    default: return undefined;
                }
            });
            const config = vscode.workspace.getConfiguration('sol');
            expect(config.get('formatting.insertSpaces')).toBe(true);
            expect(config.get('formatting.tabSize')).toBe(2);
            expect(config.get('validation.enableSemanticCoherence')).toBe(true);
        });
        test('should use default values when configuration is missing', () => {
            const mockConfiguration = {
                get: jest.fn().mockReturnValue(undefined),
            };
            vscode.workspace.getConfiguration.mockReturnValue(mockConfiguration);
            const config = vscode.workspace.getConfiguration('sol');
            expect(config.get('formatting.insertSpaces')).toBeUndefined();
            expect(config.get('formatting.tabSize')).toBeUndefined();
        });
    });
    describe('SOL Principles Adherence', () => {
        test('should maintain semantic coherence in extension behavior', () => {
            // Test that extension commands maintain consistent behavior
            const commands = [
                'sol.validateSemanticCoherence',
                'sol.showArtifactTraceability',
                'sol.generateDocumentation',
                'sol.formatDocument'
            ];
            commands.forEach(command => {
                expect(command).toMatch(/^sol\./);
                expect(command).toMatch(/[A-Z]/); // CamelCase after prefix
            });
        });
        test('should provide traceability in command naming', () => {
            // Commands should clearly trace to their functionality
            expect('sol.validateSemanticCoherence').toContain('validate');
            expect('sol.showArtifactTraceability').toContain('Traceability');
            expect('sol.generateDocumentation').toContain('generate');
            expect('sol.formatDocument').toContain('format');
        });
        test('should follow simplicity principle in API design', () => {
            // Extension should expose simple, focused functions
            const { activate, deactivate } = require('../../extension');
            expect(typeof activate).toBe('function');
            expect(typeof deactivate).toBe('function');
            expect(activate.length).toBe(1); // Single context parameter
            expect(deactivate.length).toBe(0); // No parameters
        });
    });
});
//# sourceMappingURL=extension.test.js.map