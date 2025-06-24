# SOL - Semantic Operations Language
# Test File with Intentional Errors

Vision:
  - id: TestVision
    content: "Test vision"

Process:
  - id: TestProcess
    vision: Vision:NonExistentVision  # ← Error: referencia inexistente
    steps:
      - actor: actor_without_colon → "Bad syntax"  # ← Error: sintaxis incorrecta
      - actor: Actor:NonExistentActor → "Good syntax but missing actor"  # ← Error: actor no existe

Actor:
  - id: TestActor
    type: "Test"
    
# Artefacto órfano sin referencias
Indicator:
  - id: OrphanIndicator
    description: "This indicator is not referenced anywhere" 