# Observation - Definición Esquemática

## Descripción
**¿Qué es?** Medición, monitoreo o seguimiento de una condición específica del sistema.  
**Ejemplo:** "Tiempo de respuesta fuera de rango", "CPU sobre 80%", "Usuarios concurrentes"

## Categoría
**Operacional** - Define actividades, flujos y operaciones del día a día.

## Estructura Esquemática

```yaml
Observation:
  id: [string, required] # Identificador único del artefacto
  
  # Bloques fundacionales (obligatorios)
  intent:
    statement: [string, required] # Qué se está observando
    mode: [enum, required] # declare (típico para observaciones)
    priority: [enum, required] # low|medium|high|critical
  
  context:
    scope: [string, required] # Ámbito de la observación
    timeframe: [string, required] # Cuándo se realiza la observación
    stakeholders: [array, required] # Actores interesados en la observación
    conditions: [array, optional] # Condiciones para realizar la observación
  
  authority:
    actor: [string, required] # Quien define/autoriza la observación
    basedOn: [string, required] # Documento que la respalda
    validFrom: [date, required] # Fecha de vigencia inicial
    validUntil: [date, optional] # Fecha de vigencia final
    level: [enum, required] # operational|monitoring|analytical
  
  evaluation:
    expected: [string, required] # Estado esperado de la observación
    method: [string, required] # Método de medición/observación
    criteria: [array, required] # Criterios de evaluación
    frequency: [string, required] # Frecuencia de observación
    thresholds: [object, optional] # Umbrales de alerta
      warning: [number, optional] # Umbral de advertencia
      critical: [number, optional] # Umbral crítico
  
  # Campos específicos de la observación (obligatorios)
  measurement: [object, required] # Características de la medición
    metric: [string, required] # Métrica específica a observar
    unit: [string, required] # Unidad de medida
    source: [string, required] # Fuente de datos
    collection: [string, required] # Método de recolección
    
  # Campos de soporte (opcionales)
  area: [string, optional] # Área responsable de la observación
  tags: [array, optional] # Etiquetas para categorización
  relatedObservations: [array, optional] # Observaciones relacionadas
  triggers: [array, optional] # Eventos que puede desencadenar
  alerts: [array, optional] # Alertas configuradas
  dashboard: [string, optional] # Dashboard donde se visualiza
  historicalData: [object, optional] # Configuración de datos históricos
    retention: [string, optional] # Tiempo de retención
    aggregation: [string, optional] # Método de agregación
  automation: [array, optional] # Acciones automáticas basadas en la observación
  measuredBy: [array, optional] # Indicadores derivados de esta observación
```

## Campos Requeridos Mínimos
- `id`: Identificador único
- `intent.statement`: Qué se observa
- `intent.mode`: Típicamente "declare"
- `intent.priority`: Nivel de prioridad
- `context.scope`: Ámbito de observación
- `context.timeframe`: Cuándo se observa
- `context.stakeholders`: Actores interesados
- `authority.actor`: Quien define la observación
- `authority.basedOn`: Documento que la respalda
- `authority.level`: Nivel de autoridad
- `evaluation.expected`: Estado esperado
- `evaluation.method`: Método de medición
- `evaluation.criteria`: Criterios de evaluación
- `evaluation.frequency`: Frecuencia de observación
- `measurement.metric`: Métrica específica
- `measurement.unit`: Unidad de medida
- `measurement.source`: Fuente de datos
- `measurement.collection`: Método de recolección

## Tipos de Observaciones Comunes
- **Performance**: Tiempo de respuesta, throughput, latencia
- **Recursos**: CPU, memoria, disco, red
- **Negocio**: Transacciones, usuarios activos, conversiones
- **Calidad**: Errores, disponibilidad, precisión

## Diferencias con Event e Indicator
- **Observation**: Medición continua o periódica de una condición
- **Event**: Suceso específico que ocurre en un momento
- **Indicator**: Métrica calculada para evaluar desempeño

## Mejores Prácticas
1. **Precisión**: Definir claramente qué se mide y cómo
2. **Umbrales**: Establecer límites claros para alertas
3. **Frecuencia**: Balancear granularidad con costo de monitoreo
4. **Automatización**: Configurar respuestas automáticas cuando sea apropiado
5. **Histórico**: Mantener datos históricos para análisis de tendencias

## Ejemplo de Uso
Ver: `tiempo-respuesta-fuera-rango.sol` en esta carpeta. 