# Procedure - Definición Esquemática

## Descripción
**¿Qué es?** Secuencia específica y detallada de pasos para realizar una tarea concreta.  
**Ejemplo:** "Procedimiento de recuperación de contraseña", "Procedimiento de backup diario"

## Categoría
**Operacional** - Define actividades, flujos y operaciones del día a día.

## Estructura Esquemática

```yaml
Procedure:
  id: [string, required] # Identificador único del artefacto
  
  # Bloques fundacionales (obligatorios)
  intent:
    statement: [string, required] # Objetivo específico del procedimiento
    mode: [enum, required] # require (típico para procedimientos)
    priority: [enum, required] # low|medium|high|critical
  
  context:
    scope: [string, required] # Ámbito específico del procedimiento
    timeframe: [string, required] # Duración típica del procedimiento
    stakeholders: [array, required] # Actores que ejecutan el procedimiento
    conditions: [array, optional] # Condiciones previas necesarias
  
  authority:
    actor: [string, required] # Quien define/autoriza el procedimiento
    basedOn: [string, required] # Documento que lo respalda
    validFrom: [date, required] # Fecha de vigencia inicial
    validUntil: [date, optional] # Fecha de vigencia final
    level: [enum, required] # operational|tactical
  
  evaluation:
    expected: [string, required] # Resultado esperado del procedimiento
    method: [string, required] # Método de verificación
    criteria: [array, required] # Criterios de éxito específicos
    frequency: [string, required] # Frecuencia de evaluación
    thresholds: [object, optional] # Umbrales de desempeño
      acceptable: [number, optional] # Nivel aceptable
      target: [number, optional] # Nivel objetivo
  
  # Campos específicos del procedimiento (obligatorios)
  flow:
    trigger: [string, required] # Qué inicia el procedimiento
    steps: [array, required] # Pasos detallados del procedimiento
    decisions: [array, optional] # Puntos de decisión específicos
    outputs: [array, required] # Salidas específicas del procedimiento
    
  # Campos de soporte (opcionales)
  area: [string, optional] # Área responsable del procedimiento
  tags: [array, optional] # Etiquetas para categorización
  partOfProcess: [string, optional] # Proceso padre al que pertenece
  requiredActors: [array, optional] # Actores específicos necesarios
  supportingPolicies: [array, optional] # Políticas que respaldan el procedimiento
  tools: [array, optional] # Herramientas necesarias
  prerequisites: [array, optional] # Requisitos previos
  exceptions: [array, optional] # Excepciones al procedimiento
  measuredBy: [array, optional] # Indicadores específicos
```

## Campos Requeridos Mínimos
- `id`: Identificador único
- `intent.statement`: Objetivo específico
- `intent.mode`: Típicamente "require"
- `intent.priority`: Nivel de prioridad
- `context.scope`: Ámbito específico
- `context.timeframe`: Duración típica
- `context.stakeholders`: Actores que lo ejecutan
- `authority.actor`: Quien define el procedimiento
- `authority.basedOn`: Documento que lo respalda
- `authority.level`: Nivel de autoridad
- `evaluation.expected`: Resultado esperado
- `evaluation.method`: Método de verificación
- `evaluation.criteria`: Criterios de éxito
- `evaluation.frequency`: Frecuencia de evaluación
- `flow.trigger`: Qué lo inicia
- `flow.steps`: Pasos detallados
- `flow.outputs`: Salidas específicas

## Diferencias con Process
- **Procedure**: Pasos específicos y detallados, más operativo, táctico
- **Process**: Flujo completo de actividades, más amplio, estratégico

## Mejores Prácticas
1. **Detalle**: Documentar cada paso de manera específica y clara
2. **Secuencia**: Mantener orden lógico y cronológico de pasos
3. **Excepciones**: Documentar qué hacer en casos especiales
4. **Herramientas**: Especificar herramientas y recursos necesarios
5. **Verificación**: Incluir puntos de control y validación

## Ejemplo de Uso
Ver: `recuperacion-contraseña.sol` en esta carpeta. 