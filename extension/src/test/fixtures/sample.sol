# SOL - Semantic Operations Language
# Version: v2025.07

Vision:
  meta:
    id: TestVision
    version: "1.0"
    created: "2024-01-01"
    status: "active"
    author: "Test Author"
  content: "Test vision for validation"

Area:
  meta:
    id: TestArea
    version: "1.0"
    created: "2024-01-01"
    status: "active"
    author: "Test Author"
  description: "Test area for validation"
  vision: Vision.TestVision

Actor:
  meta:
    id: TestActor
    version: "1.0"
    created: "2024-01-01"
    status: "active"
    author: "Test Author"
  type: "Human"
  area: Area.TestArea
  capabilities:
    - "Testing"
    - "Validation"

Process:
  meta:
    id: TestProcess
    version: "1.0"
    created: "2024-01-01"
    status: "active"
    author: "Test Author"
  vision: Vision.TestVision
  area: Area.TestArea
  steps:
    - "Initialize test"
    - Actor.TestActor → "Execute validation"
    - Actor.TestActor → "Verify results"
  endCondition: "All validation steps completed successfully"

Policy:
  meta:
    id: TestPolicy
    version: "1.0"
    created: "2024-01-01"
    status: "active"
    author: "Test Author"
  premise: "All tests must pass according to SOL principles"
  vision: Vision.TestVision
  area: Area.TestArea

Indicator:
  meta:
    id: TestIndicator
    version: "1.0"
    created: "2024-01-01"
    status: "active"
    author: "Test Author"
  description: "Test success rate following SOL validation"
  measurement: "Percentage of passed tests"
  unit: "percentage"
  goal: 100.0
  measuredBy: Actor.TestActor 