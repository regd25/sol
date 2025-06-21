# Indicator - Definición Esquemática

## Descripción
**¿Qué es?** Métrica calculada para medir el desempeño, progreso o estado de objetivos específicos.  
**Ejemplo:** "Tasa de conversión mensual", "Tiempo promedio de resolución", "Satisfacción del cliente"

## Categoría
**Medición** - Métricas y mediciones para evaluar desempeño y progreso.

## Estructura Esquemática

```yaml
Indicator:
  id: [string, required] # Identificador único del artefacto
  
  # Bloques fundacionales (obligatorios)
  intent:
    statement: [string, required] # Qué mide el indicador
    mode: [enum, required] # declare (típico para indicadores)
    priority: [enum, required] # low|medium|high|critical
  
  context:
    scope: [string, required] # Ámbito de medición del indicador
    timeframe: [string, required] # Período de medición
    stakeholders: [array, required] # Actores interesados en el indicador
    conditions: [array, optional] # Condiciones para la medición
  
  authority:
    actor: [string, required] # Quien define/autoriza el indicador
    basedOn: [string, required] # Documento que lo respalda
    validFrom: [date, required] # Fecha de vigencia inicial
    validUntil: [date, optional] # Fecha de vigencia final
    level: [enum, required] # strategic|tactical|operational
  
  evaluation:
    expected: [string, required] # Valor esperado del indicador
    method: [string, required] # Método de cálculo
    criteria: [array, required] # Criterios de interpretación
    frequency: [string, required] # Frecuencia de cálculo
    thresholds: [object, required] # Umbrales de desempeño
      excellent: [number, optional] # Nivel excelente
      good: [number, required] # Nivel bueno/objetivo
      acceptable: [number, required] # Nivel aceptable
      poor: [number, optional] # Nivel deficiente
  
  # Campos específicos del indicador (obligatorios)
  calculation: [object, required] # Cálculo del indicador
    formula: [string, required] # Fórmula de cálculo
    variables: [array, required] # Variables necesarias
    dataSources: [array, required] # Fuentes de datos
    aggregation: [string, required] # Método de agregación
    
  # Campos de soporte (opcionales)
  area: [string, optional] # Área responsable del indicador
  tags: [array, optional] # Etiquetas para categorización
  category: [string, optional] # Categoría del indicador (KPI, métrica, etc.)
  relatedIndicators: [array, optional] # Indicadores relacionados
  measures: [array, optional] # Qué procesos/resultados mide
  influences: [array, optional] # Qué factores influyen en el indicador
  dashboard: [string, optional] # Dashboard donde se visualiza
  reporting: [object, optional] # Configuración de reportes
    format: [string, optional] # Formato de reporte
    recipients: [array, optional] # Destinatarios del reporte
    schedule: [string, optional] # Programación de reportes
  alerts: [array, optional] # Alertas configuradas
  historicalData: [object, optional] # Configuración de datos históricos
    baseline: [number, optional] # Línea base del indicador
    trend: [string, optional] # Tendencia esperada
    benchmarks: [array, optional] # Benchmarks externos
```

## Campos Requeridos Mínimos
- `id`: Identificador único
- `intent.statement`: Qué mide
- `intent.mode`: Típicamente "declare"
- `intent.priority`: Nivel de prioridad
- `context.scope`: Ámbito de medición
- `context.timeframe`: Período de medición
- `context.stakeholders`: Actores interesados
- `authority.actor`: Quien define el indicador
- `authority.basedOn`: Documento que lo respalda
- `authority.level`: Nivel de autoridad
- `evaluation.expected`: Valor esperado
- `evaluation.method`: Método de cálculo
- `evaluation.criteria`: Criterios de interpretación
- `evaluation.frequency`: Frecuencia de cálculo
- `evaluation.thresholds.good`: Nivel objetivo
- `evaluation.thresholds.acceptable`: Nivel aceptable
- `calculation.formula`: Fórmula de cálculo
- `calculation.variables`: Variables necesarias
- `calculation.dataSources`: Fuentes de datos
- `calculation.aggregation`: Método de agregación

## Tipos de Indicadores Comunes
- **KPIs Estratégicos**: ROI, crecimiento, cuota de mercado
- **Operacionales**: Eficiencia, calidad, tiempo de ciclo
- **Financieros**: Ingresos, costos, márgenes
- **Cliente**: Satisfacción, retención, NPS
- **Proceso**: Throughput, error rate, disponibilidad

## Diferencias con Observation
- **Indicator**: Métrica calculada, agregada, con umbrales de desempeño
- **Observation**: Medición directa, continua, de una condición específica

## Mejores Prácticas
1. **SMART**: Específico, Medible, Alcanzable, Relevante, Temporal
2. **Umbrales**: Definir claramente niveles de desempeño
3. **Frecuencia**: Balancear utilidad con costo de cálculo
4. **Contexto**: Incluir información suficiente para interpretación
5. **Acción**: Vincular con acciones específicas según resultados

## Ejemplo de Uso
Ver: `tasa-conversion-mensual.sol` en esta carpeta. 