# Result - Definición Esquemática

## Descripción
**¿Qué es?** Resultado específico o salida de un proceso o procedimiento.  
**Ejemplo:** "Cuenta creada", "Pedido procesado", "Usuario autenticado"

## Categoría
**Operacional** - Define actividades, flujos y operaciones del día a día.

## Estructura Esquemática

```yaml
Result:
  id: [string, required] # Identificador único del artefacto
  
  # Bloques fundacionales (obligatorios)
  intent:
    statement: [string, required] # Descripción del resultado
    mode: [enum, required] # declare (típico para resultados)
    priority: [enum, required] # low|medium|high|critical
  
  context:
    scope: [string, required] # Ámbito donde se produce el resultado
    timeframe: [string, required] # Cuándo se produce el resultado
    stakeholders: [array, required] # Actores afectados por el resultado
    conditions: [array, optional] # Condiciones para obtener el resultado
  
  authority:
    actor: [string, required] # Quien define/autoriza el resultado
    basedOn: [string, required] # Documento que lo respalda
    validFrom: [date, required] # Fecha de vigencia inicial
    validUntil: [date, optional] # Fecha de vigencia final
    level: [enum, required] # operational|business|system
  
  evaluation:
    expected: [string, required] # Estado esperado del resultado
    method: [string, required] # Método de verificación del resultado
    criteria: [array, required] # Criterios de validación
    frequency: [string, optional] # Frecuencia de verificación
  
  # Campos específicos del resultado (obligatorios)
  output: [object, required] # Características del resultado
    type: [string, required] # Tipo de resultado (data, state, artifact, etc.)
    format: [string, optional] # Formato del resultado
    content: [string, optional] # Contenido o estructura del resultado
    
  # Campos de soporte (opcionales)
  area: [string, optional] # Área responsable del resultado
  tags: [array, optional] # Etiquetas para categorización
  producedBy: [array, optional] # Procesos que producen este resultado
  consumedBy: [array, optional] # Procesos que consumen este resultado
  relatedResults: [array, optional] # Resultados relacionados
  dependencies: [array, optional] # Dependencias para obtener el resultado
  lifecycle: [object, optional] # Ciclo de vida del resultado
    states: [array, optional] # Estados posibles del resultado
    transitions: [array, optional] # Transiciones entre estados
  storage: [array, optional] # Dónde se almacena el resultado
  measuredBy: [array, optional] # Indicadores relacionados al resultado
```

## Campos Requeridos Mínimos
- `id`: Identificador único
- `intent.statement`: Descripción del resultado
- `intent.mode`: Típicamente "declare"
- `intent.priority`: Nivel de prioridad
- `context.scope`: Ámbito donde se produce
- `context.timeframe`: Cuándo se produce
- `context.stakeholders`: Actores afectados
- `authority.actor`: Quien define el resultado
- `authority.basedOn`: Documento que lo respalda
- `authority.level`: Nivel de autoridad
- `evaluation.expected`: Estado esperado
- `evaluation.method`: Método de verificación
- `evaluation.criteria`: Criterios de validación
- `output.type`: Tipo de resultado

## Tipos de Resultados Comunes
- **Datos**: Registros, archivos, reportes
- **Estados**: Cambios de estado en el sistema
- **Artefactos**: Documentos, productos, entregables
- **Notificaciones**: Alertas, confirmaciones, comunicaciones

## Diferencias con Event
- **Result**: Salida específica de un proceso, producto final
- **Event**: Suceso que ocurre y puede desencadenar acciones

## Mejores Prácticas
1. **Especificidad**: Definir claramente qué constituye el resultado
2. **Verificación**: Establecer criterios claros de validación
3. **Formato**: Especificar estructura y formato del resultado
4. **Trazabilidad**: Vincular con procesos que lo producen/consumen
5. **Ciclo de vida**: Documentar estados y transiciones del resultado

## Ejemplo de Uso
Ver: `cuenta-creada.sol` en esta carpeta. 