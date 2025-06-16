# Observation - Artefacto SOL

## Definición

**Observation** captura un evento perceptual generado por un actor sensor (humano, lógico o físico). Puede ser utilizado como disparador de políticas o señales.

## Taxonomía

| Campo | Tipo | Obligatorio | Descripción |
|-------|------|-------------|-------------|
| `id` | String | ✅ | Identificador único de la observación |
| `observedBy` | String | ✅ | Actor que realiza la observación |
| `value` | Any | ✅ | Valor observado (puede ser numérico, booleano, texto, etc.) |
| `unit` | String | ❌ | Unidad de medida del valor observado |
| `timestamp` | DateTime | ✅ | Momento en que se realiza la observación |
| `domain` | String | ✅ | Dominio donde se realiza la observación |

## Extensiones

| Campo | Tipo | Descripción |
|-------|------|-------------|
| `confidence` | Number | Nivel de confianza de la observación (0-1) |
| `tags` | Array | Etiquetas para clasificación y búsqueda |

## Estructura Base

```yaml
Observation:
  id: [IdentificadorUnico]
  observedBy: [ActorObservador]
  value: [ValorObservado]
  unit: [UnidadMedida]
  timestamp: [FechaHoraObservacion]
  domain: [DominioObservacion]
```

## Ejemplos por Contexto Empresarial

### 🏠 Empresa Tradicional - Servicio de Limpieza

```yaml
Observation:
  id: CalidadServicioEvaluada
  observedBy: Actor:TecnicoLimpieza
  value: 4.2
  unit: "score"
  timestamp: 2025-01-15T16:30:00Z
  domain: GestionCalidadServicio
  confidence: 0.95
  tags: [calidad, evaluacion, completitud]
```

```yaml
Observation:
  id: TiempoTraslado
  observedBy: System:GPS
  value: 28.5
  unit: "minutes"
  timestamp: 2025-01-15T10:15:00Z
  domain: OptimizacionLogistica
  confidence: 1.0
  tags: [logistica, tiempo, ruta]
```

```yaml
Observation:
  id: IncidenciaEquipoDetectada
  observedBy: Actor:TecnicoLimpieza
  value: "Aspiradora requiere reparación motor"
  unit: "text"
  timestamp: 2025-01-15T11:20:00Z
  domain: GestionCalidadServicio
  confidence: 1.0
  tags: [incidencia, equipo, mantenimiento]
```

```yaml
Observation:
  id: ClienteSatisfecho
  observedBy: System:EncuestaApp
  value: true
  unit: "boolean"
  timestamp: 2025-01-15T17:00:00Z
  domain: GestionCalidadServicio
  confidence: 0.85
  tags: [satisfaccion, cliente, feedback]
```

### 💻 Empresa Tech - Plataforma E-Learning

```yaml
Observation:
  id: ProgresoEstudianteEstancado
  observedBy: System:LearningAnalytics
  value: 15.5
  unit: "percentage"
  timestamp: 2025-01-15T14:22:00Z
  domain: ExperienciaAprendizaje
  confidence: 0.92
  tags: [progreso, estancamiento, analytics]
```

```yaml
Observation:
  id: CalidadCursoEvaluada
  observedBy: Actor:ReviewerPedagogico
  value: 8.7
  unit: "score"
  timestamp: 2025-01-15T13:45:00Z
  domain: MarketplaceCursos
  confidence: 1.0
  tags: [calidad, revision, aprobacion]
```

```yaml
Observation:
  id: TasaAbandonoCurso
  observedBy: System:Analytics
  value: 35.2
  unit: "percentage"
  timestamp: 2025-01-15T12:00:00Z
  domain: ExperienciaAprendizaje
  confidence: 0.98
  tags: [abandono, retencion, metrics]
```

```yaml
Observation:
  id: InteraccionEstudianteRecomendacion
  observedBy: System:UITracker
  value: "clicked"
  unit: "action"
  timestamp: 2025-01-15T15:30:00Z
  domain: ExperienciaAprendizaje
  confidence: 1.0
  tags: [interaccion, recomendacion, engagement]
```

```yaml
Observation:
  id: RendimientoServidorCursos
  observedBy: System:MonitoringService
  value: 95.3
  unit: "percentage"
  timestamp: 2025-01-15T16:00:00Z
  domain: MarketplaceCursos
  confidence: 1.0
  tags: [rendimiento, servidor, uptime]
```

### 🏪 Empresa Mediana - Sector Abarrotes

```yaml
Observation:
  id: NivelInventarioProducto
  observedBy: Actor:AsistenteInventario
  value: 8
  unit: "units"
  timestamp: 2025-01-15T08:30:00Z
  domain: ControlInventario
  confidence: 1.0
  tags: [inventario, conteo, stock]
```

```yaml
Observation:
  id: EntregaRealizada
  observedBy: Actor:RepartidorAsignado
  value: true
  unit: "boolean"
  timestamp: 2025-01-15T14:45:00Z
  domain: GestionDistribucion
  confidence: 1.0
  tags: [entrega, completitud, confirmacion]
```

```yaml
Observation:
  id: PagoClienteRecibido
  observedBy: System:Cobranza
  value: 15750.00
  unit: "$"
  timestamp: 2025-01-15T11:20:00Z
  domain: GestionCarteraCredito
  confidence: 1.0
  tags: [pago, cobranza, finanzas]
```

```yaml
Observation:
  id: ProductoProximoCaducar
  observedBy: System:WMS
  value: "2025-02-15"
  unit: "date"
  timestamp: 2025-01-15T06:00:00Z
  domain: ControlInventario
  confidence: 1.0
  tags: [caducidad, producto, alerta]
```

```yaml
Observation:
  id: ClienteImpago
  observedBy: Actor:GestorCobranza
  value: 75
  unit: "days"
  timestamp: 2025-01-15T09:15:00Z
  domain: GestionCarteraCredito
  confidence: 1.0
  tags: [impago, vencimiento, cobranza]
```

```yaml
Observation:
  id: DiscrepanciaConteoInventario
  observedBy: Actor:AsistenteInventario
  value: -3
  unit: "units"
  timestamp: 2025-01-15T16:45:00Z
  domain: ControlInventario
  confidence: 0.95
  tags: [discrepancia, conteo, auditoria]
```

```yaml
Observation:
  id: TiempoEntrega
  observedBy: System:GPS
  value: 25.8
  unit: "minutes"
  timestamp: 2025-01-15T15:10:00Z
  domain: GestionDistribucion
  confidence: 1.0
  tags: [tiempo, entrega, logistica]
```

## Mejores Prácticas

### ✅ Recomendaciones

1. **Precisión Temporal**: Registrar timestamps exactos de las observaciones
2. **Contexto Claro**: Incluir suficiente información para interpretar el valor
3. **Unidades Consistentes**: Usar unidades estándar y consistentes
4. **Confianza Apropiada**: Indicar el nivel de certeza de la observación

### ❌ Anti-patrones

1. **Observaciones Imprecisas**: Valores aproximados sin indicar nivel de confianza
2. **Timestamps Incorrectos**: Registrar tiempos incorrectos o inconsistentes
3. **Falta de Contexto**: Observaciones sin suficiente información para su interpretación
4. **Saturación de Datos**: Registrar demasiadas observaciones sin valor

## Vínculos con Otros Artefactos

- **Actor**: Los actores realizan observaciones
- **Domain**: Las observaciones pertenecen a dominios específicos
- **Policy**: Las políticas pueden ser disparadas por observaciones
- **Signal**: Las observaciones pueden generar señales
- **Indicator**: Las observaciones alimentan el cálculo de indicadores
- **Process**: Los procesos pueden generar observaciones

## Casos de Uso Comunes

1. **Monitoreo Continuo**: Seguimiento de métricas y estados del sistema
2. **Trigger de Políticas**: Disparar reglas de negocio basadas en observaciones
3. **Analytics**: Alimentar sistemas de análisis y reporting
4. **Auditoría**: Registro de eventos para cumplimiento y trazabilidad

## Tipos de Observaciones

### Observaciones Cuantitativas
Valores numéricos medibles
```yaml
value: 42.7
unit: "temperature_celsius"
confidence: 0.98
```

### Observaciones Cualitativas
Valores categóricos o descriptivos
```yaml
value: "excellent"
unit: "quality_rating"
confidence: 0.85
```

### Observaciones Booleanas
Estados binarios verdadero/falso
```yaml
value: true
unit: "boolean"
confidence: 1.0
```

### Observaciones Temporales
Información relacionada con tiempo
```yaml
value: "2025-01-15T14:30:00Z"
unit: "datetime"
confidence: 1.0
```

## Patrones de Observación

### Patrón de Monitoreo Continuo
```yaml
Observation:
  observedBy: Sensor:ContinuousMonitor
  frequency: every_5_minutes
  retention: 30_days
```

### Patrón de Evento Discreto
```yaml
Observation:
  observedBy: Actor:Human
  triggered_by: specific_event
  required_action: immediate_processing
```

### Patrón de Agregación
```yaml
Observation:
  value: calculated_from_multiple_sources
  aggregation_method: weighted_average
  source_count: 15
```

## Niveles de Confianza

### Alta Confianza (0.9-1.0)
- Sensores calibrados
- Observaciones directas
- Sistemas automatizados

### Confianza Media (0.7-0.9)
- Observaciones humanas
- Cálculos derivados
- Estimaciones basadas en datos

### Confianza Baja (0.5-0.7)
- Observaciones indirectas
- Predicciones
- Datos incompletos 