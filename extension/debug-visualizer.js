/**
 * Debug script for SOL Visualizer
 * 
 * This script tests the visualizer directly to see what content is being generated.
 */

const fs = require('fs');
const path = require('path');

// Mock vscode module
const vscode = {
    Uri: {
        parse: (uri) => ({ toString: () => uri })
    },
    Range: class Range {
        constructor(start, end) {
            this.start = start;
            this.end = end;
        }
    },
    Position: class Position {
        constructor(line, character) {
            this.line = line;
            this.character = character;
        }
    },
    EndOfLine: {
        LF: 1
    }
};

// Make vscode available globally for the import
global.vscode = vscode;
require('module')._cache[require.resolve('vscode')] = { exports: vscode };

// Now require the compiled visualizer
const { SolVisualizer } = require('./out/visualizer/SolVisualizer.js');

function createMockDocument(content) {
    return {
        getText: () => content,
        uri: vscode.Uri.parse("test://test.sop"),
        fileName: "test.sop",
        languageId: "sol",
        version: 1,
        isDirty: false,
        isClosed: false,
        save: async () => true,
        eol: vscode.EndOfLine.LF,
        lineCount: content.split('\n').length,
        lineAt: (line) => ({
            lineNumber: line,
            text: content.split('\n')[line] || '',
            range: new vscode.Range(new vscode.Position(line, 0), new vscode.Position(line, content.split('\n')[line]?.length || 0)),
            rangeIncludingLineBreak: new vscode.Range(new vscode.Position(line, 0), new vscode.Position(line + 1, 0)),
            firstNonWhitespaceCharacterIndex: 0,
            isEmptyOrWhitespace: false
        }),
        offsetAt: (position) => 0,
        positionAt: (offset) => new vscode.Position(0, 0),
        getWordRangeAtPosition: () => undefined,
        validateRange: (range) => range,
        validatePosition: (position) => position
    };
}

async function testVisualizer() {
    console.log("🧪 Testing SOL Visualizer...\n");

    const visualizer = new SolVisualizer();

    const testContent = `# SOL - Semantic Operations Language

Vision:
  - id: DigitalTransformation
    content: "Transform our organization into a digital-first entity"

Area:
  - id: TechnologyDepartment
    description: "Department responsible for all technology initiatives"
    vision: Vision:DigitalTransformation

Actor:
  - id: DevTeamLead
    type: "Technical Leader"
    capabilities: ["Team Management", "Technical Architecture", "Code Review"]
    area: Area:TechnologyDepartment

  - id: Frontend
    type: "Development Role"
    capabilities: ["React", "TypeScript", "UI/UX"]
    area: Area:TechnologyDepartment

Process:
  - id: UserRegistration
    vision: Vision:DigitalTransformation
    description: "Complete user registration workflow"
    steps:
      - Actor:Frontend → "Render registration form with validation"
      - Actor:Backend → "Validate user input and check duplicates"
      - Actor:Backend → "Create user account in database"
      - Actor:Frontend → "Display success confirmation"
    endCondition: "User successfully registered and confirmed"
`;

    const mockDocument = createMockDocument(testContent);

    try {
        const visualization = await visualizer.generateVisualization(mockDocument);

        console.log("Generated Visualization:");
        console.log("=".repeat(80));
        console.log(visualization);
        console.log("=".repeat(80));

        // Write to file for inspection
        fs.writeFileSync('visualization-output.md', visualization);
        console.log("\n✅ Visualization saved to 'visualization-output.md'");

        // Basic validation
        console.log("\n📊 Validation Results:");
        console.log(`- Content length: ${visualization.length} characters`);
        console.log(`- Contains 'Area': ${visualization.includes('Area')}`);
        console.log(`- Contains 'TechnologyDepartment': ${visualization.includes('TechnologyDepartment')}`);
        console.log(`- Contains Mermaid diagrams: ${visualization.includes('```mermaid')}`);
        console.log(`- Contains report header: ${visualization.includes('📊 SOL Document Analysis Report')}`);

    } catch (error) {
        console.error("❌ Error generating visualization:", error);
        console.error("Stack trace:", error.stack);
    }
}

// Run the test
testVisualizer().catch(console.error); 