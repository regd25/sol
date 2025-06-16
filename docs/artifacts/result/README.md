# Result - Artefacto SOL

## Definición

**Result** representa el estado final o la decisión emergente de un proceso ejecutado. Puede escalar nuevos contextos o cerrar una lógica de ejecución.

## Taxonomía

| Campo | Tipo | Obligatorio | Descripción |
|-------|------|-------------|-------------|
| `id` | String | ✅ | Identificador único del resultado |
| `outcome` | String | ✅ | Decisión o estado final del proceso |
| `issuedBy` | String | ✅ | Actor o proceso que genera el resultado |
| `reason` | String | ✅ | Justificación o causa del resultado |
| `timestamp` | DateTime | ✅ | Momento en que se genera el resultado |

## Extensiones

| Campo | Tipo | Descripción |
|-------|------|-------------|
| `severity` | String | Nivel de importancia del resultado (low, medium, high, critical) |
| `nextDomain` | String | Dominio al que escala el resultado si aplica |
| `tags` | Array | Etiquetas para clasificación y búsqueda |

## Estructura Base

```yaml
Result:
  id: [IdentificadorUnico]
  outcome: [DecisionOEstadoFinal]
  issuedBy: [ActorOProcesoEmisor]
  reason: [JustificacionDelResultado]
  timestamp: [FechaHoraGeneracion]
```

## Ejemplos por Contexto Empresarial

### 🏠 Empresa Tradicional - Servicio de Limpieza

```yaml
Result:
  id: ServicioCompletadoExitoso
  outcome: ServicioAprobado
  issuedBy: Process:EjecucionServicioCompleto
  reason: Todas las tareas completadas según estándares de calidad
  timestamp: 2025-01-15T16:45:00Z
  severity: medium
  tags: [servicio, completitud, calidad]
```

```yaml
Result:
  id: RequiereIntervencionSupervisor
  outcome: EscalarASupervision
  issuedBy: Actor:TecnicoLimpieza
  reason: Incidencia crítica detectada que afecta calidad del servicio
  timestamp: 2025-01-15T14:30:00Z
  severity: high
  nextDomain: GestionIncidencias
  tags: [escalacion, incidencia, supervision]
```

```yaml
Result:
  id: RutaOptimizadaGenerada
  outcome: NuevaRutaAsignada
  issuedBy: System:AlgoritmoOptimizacion
  reason: Ruta actual excede 15% del tiempo óptimo calculado
  timestamp: 2025-01-15T08:15:00Z
  severity: medium
  tags: [optimizacion, ruta, eficiencia]
```

```yaml
Result:
  id: ClienteInsatisfecho
  outcome: RequiereAccionCorrectiva
  issuedBy: System:EncuestaApp
  reason: Calificación del cliente inferior a 3.5 en escala de 5
  timestamp: 2025-01-15T17:30:00Z
  severity: high
  nextDomain: GestionRelacionesCliente
  tags: [satisfaccion, cliente, correccion]
```

### 💻 Empresa Tech - Plataforma E-Learning

```yaml
Result:
  id: CursoAprobadoPublicacion
  outcome: CursoPublicado
  issuedBy: Process:RevisionCalidadCurso
  reason: Curso cumple todos los criterios de calidad pedagógica y técnica
  timestamp: 2025-01-15T11:20:00Z
  severity: medium
  tags: [curso, aprobacion, publicacion]
```

```yaml
Result:
  id: EstudianteEnRiesgoAbandono
  outcome: ActivarIntervencionRetencion
  issuedBy: System:LearningAnalytics
  reason: Inactividad por 7 días y progreso menor a 50%
  timestamp: 2025-01-15T09:30:00Z
  severity: high
  nextDomain: StudentSuccessManagement
  tags: [retencion, riesgo, intervencion]
```

```yaml
Result:
  id: RecomendacionesGeneradas
  outcome: SugerenciasEnviadas
  issuedBy: System:AIRecomendaciones
  reason: Análisis de perfil de aprendizaje completado exitosamente
  timestamp: 2025-01-15T12:00:00Z
  severity: low
  tags: [recomendacion, personalizacion, ai]
```

```yaml
Result:
  id: InstructorBajoRendimiento
  outcome: RequiereApoyoPedagogico
  issuedBy: System:Analytics
  reason: Ingresos por debajo del promedio y ratings inferiores a 4.0
  timestamp: 2025-01-15T16:45:00Z
  severity: medium
  nextDomain: InstructorSupport
  tags: [instructor, rendimiento, apoyo]
```

### 🏪 Empresa Mediana - Sector Abarrotes

```yaml
Result:
  id: PedidoProcesadoExitoso
  outcome: PedidoListo
  issuedBy: Process:GestionCompletaPedido
  reason: Inventario confirmado, crédito aprobado y orden preparada
  timestamp: 2025-01-15T12:30:00Z
  severity: medium
  tags: [pedido, procesamiento, completitud]
```

```yaml
Result:
  id: CreditoRechazado
  outcome: SolicitarPagoContado
  issuedBy: Policy:EvaluacionCredito
  reason: Score crediticio inferior a 70 y facturas vencidas pendientes
  timestamp: 2025-01-15T10:15:00Z
  severity: high
  nextDomain: GestionVentasContado
  tags: [credito, rechazo, pago]
```

```yaml
Result:
  id: InventarioReabastecido
  outcome: StockActualizado
  issuedBy: Process:ReabastecimientoAutomatico
  reason: Nivel de stock alcanzó umbral mínimo configurado
  timestamp: 2025-01-15T07:45:00Z
  severity: medium
  tags: [inventario, reabastecimiento, stock]
```

```yaml
Result:
  id: CarteraRecuperada
  outcome: AcuerdoPagoEstablecido
  issuedBy: Actor:GestorCobranza
  reason: Cliente acepta plan de pagos negociado
  timestamp: 2025-01-15T15:20:00Z
  severity: medium
  tags: [cobranza, recuperacion, acuerdo]
```

```yaml
Result:
  id: ProductoProximoVencer
  outcome: DescuentoAutorizado
  issuedBy: Policy:AlertasCaducidad
  reason: Producto a 30 días de caducidad con inventario alto
  timestamp: 2025-01-15T06:30:00Z
  severity: high
  nextDomain: GestionPromociones
  tags: [caducidad, descuento, promocion]
```

```yaml
Result:
  id: EntregaFallida
  outcome: ReprogramarEntrega
  issuedBy: Actor:RepartidorAsignado
  reason: Cliente no disponible en dirección durante ventana programada
  timestamp: 2025-01-15T14:50:00Z
  severity: medium
  nextDomain: ReprogramacionEntregas
  tags: [entrega, fallo, reprogramacion]
```

```yaml
Result:
  id: DiscrepanciaInventarioSignificativa
  outcome: AuditoriaCompleta
  issuedBy: Process:ControlInventarioCiclico
  reason: Diferencia superior a 5% entre conteo físico y sistema
  timestamp: 2025-01-15T16:45:00Z
  severity: critical
  nextDomain: AuditoriaInventario
  tags: [inventario, discrepancia, auditoria]
```

## Mejores Prácticas

### ✅ Recomendaciones

1. **Outcomes Claros**: Definir resultados específicos y accionables
2. **Justificación Detallada**: Proporcionar razón completa del resultado
3. **Severity Apropiada**: Usar niveles de severidad consistentes
4. **Escalación Oportuna**: Definir cuándo un resultado debe escalar a otro dominio

### ❌ Anti-patrones

1. **Resultados Ambiguos**: Outcomes que no indican claramente qué hacer
2. **Sin Justificación**: Resultados sin explicación de por qué ocurrieron
3. **Severity Inconsistente**: Usar niveles de severidad de manera arbitraria
4. **No Escalación**: Resultados críticos que no escalan apropiadamente

## Vínculos con Otros Artefactos

- **Process**: Los procesos generan resultados al completarse
- **Policy**: Las políticas pueden generar resultados al evaluarse
- **Actor**: Los actores pueden emitir resultados de sus acciones
- **Domain**: Los resultados pueden escalar a otros dominios
- **Signal**: Los resultados pueden generar señales hacia otros actores
- **Authority**: Las autoridades pueden emitir resultados de decisiones

## Casos de Uso Comunes

1. **Finalización de Procesos**: Documentar el resultado de procesos completados
2. **Toma de Decisiones**: Registrar decisiones y sus justificaciones
3. **Escalación de Contextos**: Transferir responsabilidad a otros dominios
4. **Auditoría**: Mantener registro de outcomes para trazabilidad

## Tipos de Resultados

### Resultados de Éxito
Procesos o decisiones completadas exitosamente
```yaml
outcome: Completado
severity: medium
reason: Todos los criterios cumplidos satisfactoriamente
```

### Resultados de Fallo
Procesos o decisiones que no pudieron completarse
```yaml
outcome: Fallido
severity: high
reason: Condiciones requeridas no cumplidas
```

### Resultados de Escalación
Situaciones que requieren transferencia a otro contexto
```yaml
outcome: Escalado
severity: high
nextDomain: DominioEspecializado
```

### Resultados de Excepción
Situaciones excepcionales que requieren manejo especial
```yaml
outcome: RequiereIntervencionManual
severity: critical
nextDomain: ManualProcessing
```

## Patrones de Escalación

### Escalación por Severidad
```yaml
Result:
  severity: critical
  nextDomain: CrisisManagement
  escalationTrigger: automatic
```

### Escalación por Dominio
```yaml
Result:
  outcome: TransferirResponsabilidad
  nextDomain: SpecializedDomain
  transferReason: RequiereExpertiseEspecializada
```

### Escalación Temporal
```yaml
Result:
  outcome: EscalarSiNoResueltoEn
  timeLimit: 2_hours
  fallbackDomain: SupervisorLevel
```

## Niveles de Severidad

### Critical
Situaciones que requieren atención inmediata
- Fallas del sistema
- Riesgos de seguridad
- Impacto en clientes críticos

### High
Situaciones importantes que requieren acción pronta
- Problemas de calidad
- Retrasos significativos
- Escalaciones de clientes

### Medium
Situaciones normales del proceso
- Completitud exitosa
- Transferencias rutinarias
- Actualizaciones de estado

### Low
Situaciones informativas
- Notificaciones de rutina
- Confirmaciones automáticas
- Logs de actividad 