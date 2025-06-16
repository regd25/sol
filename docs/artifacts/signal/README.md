# Signal - Artefacto SOL

## Definición

**Signal** es un artefacto que transmite información entre actores o procesos como consecuencia de una observación o condición cumplida. Facilita reacciones asincrónicas.

## Taxonomía

| Campo | Tipo | Obligatorio | Descripción |
|-------|------|-------------|-------------|
| `id` | String | ✅ | Identificador único de la señal |
| `sentBy` | String | ✅ | Actor o sistema que envía la señal |
| `sentTo` | String | ✅ | Actor o sistema que recibe la señal |
| `basedOn` | String | ✅ | Observación o condición que origina la señal |
| `channel` | String | ✅ | Canal de comunicación utilizado |
| `type` | String | ✅ | Tipo de señal (alerta, notificación, comando, etc.) |
| `timestamp` | DateTime | ✅ | Momento en que se genera la señal |

## Extensiones

| Campo | Tipo | Descripción |
|-------|------|-------------|
| `priority` | String | Nivel de prioridad (low, medium, high, critical) |
| `ackRequired` | Boolean | Si requiere confirmación de recepción |
| `ttl` | Number | Tiempo de vida de la señal en segundos |

## Estructura Base

```yaml
Signal:
  id: [IdentificadorUnico]
  sentBy: [ActorEmisor]
  sentTo: [ActorReceptor]
  basedOn: [ObservacionOCondicion]
  channel: [CanalComunicacion]
  type: [TipoSenal]
  timestamp: [FechaHoraGeneracion]
```

## Ejemplos por Contexto Empresarial

### 🏠 Empresa Tradicional - Servicio de Limpieza

```yaml
Signal:
  id: AlertaIncidenciaCalidad
  sentBy: Actor:TecnicoLimpieza
  sentTo: Actor:SupervisorCalidad
  basedOn: Observation:DeficienciaDetectada
  channel: mobile_app
  type: AlertaCritica
  timestamp: 2025-01-15T14:30:00Z
  priority: high
  ackRequired: true
  ttl: 1800
```

```yaml
Signal:
  id: NotificacionServicioCompleto
  sentBy: Actor:TecnicoLimpieza
  sentTo: System:ERP
  basedOn: Process:ServicioFinalizado
  channel: api
  type: ProcessCompletion
  timestamp: 2025-01-15T16:45:00Z
  priority: medium
  ackRequired: false
  ttl: 300
```

```yaml
Signal:
  id: ReasignacionRutaUrgente
  sentBy: System:AlgoritmoOptimizacion
  sentTo: Actor:CoordinadorLogistica
  basedOn: Observation:TecnicoNoDisponible
  channel: dashboard
  type: ReassignmentAlert
  timestamp: 2025-01-15T08:15:00Z
  priority: high
  ackRequired: true
  ttl: 900
```

### 💻 Empresa Tech - Plataforma E-Learning

```yaml
Signal:
  id: CursoRequiereRevision
  sentBy: System:ContentValidator
  sentTo: Actor:ReviewerPedagogico
  basedOn: Policy:CriteriosCalidadPedagogica
  channel: email
  type: ReviewRequest
  timestamp: 2025-01-15T10:20:00Z
  priority: medium
  ackRequired: true
  ttl: 86400
```

```yaml
Signal:
  id: EstudianteEnRiesgoAbandonar
  sentBy: System:LearningAnalytics
  sentTo: Actor:StudentSuccessManager
  basedOn: Observation:InactividadProlongada
  channel: slack
  type: RiskAlert
  timestamp: 2025-01-15T09:30:00Z
  priority: high
  ackRequired: true
  ttl: 7200
```

```yaml
Signal:
  id: RecomendacionGenerada
  sentBy: System:AIRecomendaciones
  sentTo: Actor:Estudiante
  basedOn: Policy:PersonalizacionIA
  channel: platform_notification
  type: Recommendation
  timestamp: 2025-01-15T12:00:00Z
  priority: low
  ackRequired: false
  ttl: 259200
```

```yaml
Signal:
  id: UmbralIngresosInstructor
  sentBy: System:PaymentProcessor
  sentTo: Actor:CommerceManager
  basedOn: Indicator:IngresosBajos
  channel: dashboard
  type: MetricAlert
  timestamp: 2025-01-15T17:00:00Z
  priority: medium
  ackRequired: false
  ttl: 3600
```

### 🏪 Empresa Mediana - Sector Abarrotes

```yaml
Signal:
  id: ClienteFueraRuta
  sentBy: Actor:RepartidorAsignado
  sentTo: Actor:CoordinadorLogistica
  basedOn: Observation:UbicacionInesperada
  channel: mobile_app
  type: LocationAlert
  timestamp: 2025-01-15T11:45:00Z
  priority: high
  ackRequired: true
  ttl: 1800
```

```yaml
Signal:
  id: InventarioBajo
  sentBy: System:WMS
  sentTo: Actor:CompradorAsignado
  basedOn: Policy:NivelesMinimoStock
  channel: email
  type: StockAlert
  timestamp: 2025-01-15T07:00:00Z
  priority: medium
  ackRequired: false
  ttl: 3600
```

```yaml
Signal:
  id: CuentaVencidaCritica
  sentBy: System:Cobranza
  sentTo: Actor:GestorCobranza
  basedOn: Policy:EscalacionCobranza
  channel: system_queue
  type: CollectionAlert
  timestamp: 2025-01-15T13:20:00Z
  priority: critical
  ackRequired: true
  ttl: 7200
```

```yaml
Signal:
  id: EntregaConfirmada
  sentBy: Actor:ClienteComercial
  sentTo: System:ERP
  basedOn: Process:ConfirmacionRecepcion
  channel: api
  type: DeliveryConfirmation
  timestamp: 2025-01-15T15:30:00Z
  priority: medium
  ackRequired: false
  ttl: 300
```

```yaml
Signal:
  id: DiscrepanciaInventario
  sentBy: Actor:AsistenteInventario
  sentTo: Actor:JefeAlmacen
  basedOn: Observation:DiferenciaConteo
  channel: system_notification
  type: DiscrepancyAlert
  timestamp: 2025-01-15T16:10:00Z
  priority: medium
  ackRequired: true
  ttl: 1800
```

```yaml
Signal:
  id: ProductoCaducidadInminente
  sentBy: System:WMS
  sentTo: Actor:EquipoComercial
  basedOn: Policy:AlertasCaducidad
  channel: dashboard
  type: ExpirationAlert
  timestamp: 2025-01-15T06:00:00Z
  priority: high
  ackRequired: false
  ttl: 86400
```

## Mejores Prácticas

### ✅ Recomendaciones

1. **Canal Apropiado**: Seleccionar el canal de comunicación más efectivo
2. **Priorización Clara**: Usar niveles de prioridad consistentes
3. **TTL Realista**: Definir tiempos de vida apropiados para cada tipo de señal
4. **Información Contextual**: Incluir suficiente contexto para la acción

### ❌ Anti-patrones

1. **Spam de Señales**: Generar demasiadas señales que saturan a los receptores
2. **Canales Inapropiados**: Usar canales incorrectos para el tipo de mensaje
3. **Sin Priorización**: Todas las señales con la misma prioridad
4. **Información Insuficiente**: Señales sin contexto suficiente para actuar

## Vínculos con Otros Artefactos

- **Actor**: Los actores envían y reciben señales
- **Observation**: Las observaciones pueden generar señales
- **Policy**: Las políticas pueden disparar señales cuando se cumplen condiciones
- **Process**: Los procesos pueden generar señales al completarse o fallar
- **Indicator**: Los indicadores pueden generar señales al superar umbrales
- **Authority**: Las autoridades pueden recibir señales para toma de decisiones

## Casos de Uso Comunes

1. **Alertas de Sistema**: Notificaciones automáticas de eventos críticos
2. **Coordinación de Procesos**: Sincronización entre actores y sistemas
3. **Escalación de Problemas**: Comunicación de situaciones que requieren atención
4. **Notificaciones de Estado**: Informar sobre cambios de estado o completitud

## Tipos de Señales

### Alertas
Señales que requieren atención inmediata
```yaml
type: AlertaCritica
priority: critical
ackRequired: true
```

### Notificaciones
Señales informativas que no requieren acción inmediata
```yaml
type: Notification
priority: low
ackRequired: false
```

### Comandos
Señales que instruyen realizar una acción específica
```yaml
type: Command
priority: high
ackRequired: true
```

### Confirmaciones
Señales que confirman la completitud de una operación
```yaml
type: Confirmation
priority: medium
ackRequired: false
```

## Canales de Comunicación

### Síncronos
- `api`: Llamadas directas entre sistemas
- `webhook`: Notificaciones HTTP en tiempo real
- `message_queue`: Colas de mensajes para procesamiento inmediato

### Asíncronos
- `email`: Correo electrónico para notificaciones no urgentes
- `sms`: Mensajes de texto para alertas críticas
- `push_notification`: Notificaciones móviles
- `slack`: Mensajería empresarial
- `dashboard`: Interfaces de usuario para monitoreo

## Patrones de Señalización

### Patrón de Escalación
```yaml
Signal:
  priority: medium
  ttl: 3600
  escalationRule: IfNotAcknowledged_EscalateToSupervisor
```

### Patrón de Broadcast
```yaml
Signal:
  sentTo: [Actor1, Actor2, Actor3]
  type: Broadcast
  channel: multiple
```

### Patrón de Retry
```yaml
Signal:
  retryCount: 3
  retryInterval: 300
  fallbackChannel: email
``` 