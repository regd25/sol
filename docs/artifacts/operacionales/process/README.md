# Process - Definición Esquemática

## Descripción
**¿Qué es?** Secuencia de actividades coordinadas para lograr un objetivo específico.  
**Ejemplo:** "Proceso de onboarding de empleados", "Proceso de gestión de pedidos"

## Categoría
**Operacional** - Define actividades, flujos y operaciones del día a día.

## Estructura Esquemática

```yaml
Process:
  id: [string, required] # Identificador único del artefacto
  
  # Bloques fundacionales (obligatorios)
  intent:
    statement: [string, required] # Objetivo del proceso
    mode: [enum, required] # declare (típico para procesos)
    priority: [enum, required] # low|medium|high|critical
  
  context:
    scope: [string, required] # Ámbito donde opera el proceso
    timeframe: [string, required] # Marco temporal o duración típica
    stakeholders: [array, required] # Actores involucrados en el proceso
    conditions: [array, optional] # Condiciones para ejecutar el proceso
  
  authority:
    actor: [string, required] # Quien define/autoriza el proceso
    basedOn: [string, required] # Documento que lo respalda
    validFrom: [date, required] # Fecha de vigencia inicial
    validUntil: [date, optional] # Fecha de vigencia final
    level: [enum, required] # operational|tactical|strategic
  
  evaluation:
    expected: [string, required] # Resultado esperado del proceso
    method: [string, required] # Método de evaluación
    criteria: [array, required] # Criterios de éxito
    frequency: [string, required] # Frecuencia de evaluación
    thresholds: [object, optional] # Umbrales de desempeño
      acceptable: [number, optional] # Nivel aceptable
      target: [number, optional] # Nivel objetivo
  
  # Campos específicos del proceso (opcionales)
  flow: [object, optional] # Flujo del proceso
    trigger: [string, optional] # Qué inicia el proceso
    steps: [array, optional] # Pasos del proceso
    decisions: [array, optional] # Puntos de decisión
    outputs: [array, optional] # Salidas del proceso
  
  # Campos de soporte (opcionales)
  area: [string, optional] # Área responsable del proceso
  tags: [array, optional] # Etiquetas para categorización
  relatedProcesses: [array, optional] # Procesos relacionados
  requiredActors: [array, optional] # Actores necesarios para el proceso
  supportingPolicies: [array, optional] # Políticas que respaldan el proceso
  generatedEvents: [array, optional] # Eventos que produce el proceso
  expectedResults: [array, optional] # Resultados esperados
  measuredBy: [array, optional] # Indicadores del proceso
```

## Campos Requeridos Mínimos
- `id`: Identificador único
- `intent.statement`: Objetivo del proceso
- `intent.mode`: Típicamente "declare"
- `intent.priority`: Nivel de prioridad
- `context.scope`: Ámbito de operación
- `context.timeframe`: Marco temporal
- `context.stakeholders`: Actores involucrados
- `authority.actor`: Quien define el proceso
- `authority.basedOn`: Documento que lo respalda
- `authority.level`: Nivel de autoridad
- `evaluation.expected`: Resultado esperado
- `evaluation.method`: Método de evaluación
- `evaluation.criteria`: Criterios de éxito
- `evaluation.frequency`: Frecuencia de evaluación

## Diferencias con Procedure
- **Process**: Flujo completo de actividades, más amplio, estratégico
- **Procedure**: Pasos específicos y detallados, más operativo, táctico

## Mejores Prácticas
1. **Claridad**: Definir claramente el objetivo y alcance del proceso
2. **Flujo**: Documentar los pasos principales y puntos de decisión
3. **Actores**: Identificar todos los roles involucrados
4. **Medición**: Establecer indicadores clave de desempeño
5. **Mejora**: Revisar regularmente para optimización continua

## Ejemplo de Uso
Ver: `onboarding-empleados.sol` en esta carpeta. 