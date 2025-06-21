# SOL - Semantic Operations Language

Vision:
  - id: TestVision
    content: "Test vision for validation"
    author: "Test Author"
    date: "2024-01-01"

Domain:
  id: TestDomain
  description: "Test domain for validation"
  vision: TestVision
  indicators:
    - TestIndicator
  processes:
    - TestProcess

Actor:
  - id: TestActor
    type: Human
    domain: TestDomain
    capabilities:
      - "Testing"
      - "Validation"

Process:
  id: TestProcess
  vision: TestVision
  actors:
    - TestActor
  steps:
    - "Initialize test"
    - "TestActor -> Execute validation"
    - "Verify results (Policy: TestPolicy)"

Policy:
  id: TestPolicy
  premise: "All tests must pass"
  vision: TestVision
  version: "1.0"

Indicator:
  id: TestIndicator
  description: "Test success rate"
  measurement: "Percentage of passed tests"
  unit: "percentage"
  goal: 100.0 