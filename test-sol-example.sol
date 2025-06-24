# SOL - Semantic Operations Language
# Test File for Extension Features
# Version: v2025.07

Vision:
  - id: DigitalTransformation
    content: "Transform our organization into a digital-first entity"
    description: "Strategic vision for complete digital transformation"

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

  - id: Backend
    type: "Development Role"
    capabilities: ["Node.js", "Databases", "APIs"]
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

Policy:
  - id: DataProtection
    premise: "All user data must be protected according to GDPR standards"
    vision: Vision:DigitalTransformation
    applies_to: [Process:UserRegistration]

Indicator:
  - id: RegistrationSuccess
    description: "Percentage of successful user registrations"
    measurement: "Successful registrations / Total registration attempts * 100"
    goal: "> 95%"
    process: Process:UserRegistration 