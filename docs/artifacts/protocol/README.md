# Protocol - Artefacto SOL

## Definición

**Protocol** define una coreografía de interacción entre actores en el tiempo. Formaliza turnos, respuestas esperadas y condiciones de corte o desvío.

## Taxonomía

| Campo | Tipo | Obligatorio | Descripción |
|-------|------|-------------|-------------|
| `id` | String | ✅ | Identificador único del protocolo |
| `description` | String | ✅ | Descripción del propósito del protocolo |
| `steps` | Array | ✅ | Secuencia ordenada de interacciones entre actores |

## Extensiones

| Campo | Tipo | Descripción |
|-------|------|-------------|
| `timeout` | Number | Tiempo límite para completar el protocolo |
| `fallback` | String | Protocolo alternativo si el principal falla |
| `version` | String | Versión del protocolo para control de cambios |

## Estructura Base

```yaml
Protocol:
  id: [IdentificadorUnico]
  description: [PropositoDelProtocolo]
  steps:
    - [Actor1]: [AccionEsperada]
    - [Actor2]: [RespuestaAAccion] si [Condicion]
    - [ActorN]: [AccionFinal]
```

## Ejemplos por Contexto Empresarial

### 🏠 Empresa Tradicional - Servicio de Limpieza

```yaml
Protocol:
  id: GestionIncidenciaCalidad
  description: >
    Secuencia de comunicación y resolución cuando se detecta 
    una incidencia que afecta la calidad del servicio
  steps:
    - TecnicoLimpieza: reportarIncidencia
    - SupervisorCalidad: evaluarSeveridad
    - SupervisorCalidad: decidirAccionCorrectiva si severidadAlta
    - TecnicoLimpieza: implementarCorreccion
    - SupervisorCalidad: verificarResolucion
    - Cliente: confirmarSatisfaccion
  timeout: 2_hours
  fallback: EscalacionGerenciaOperativa
  version: 1.2
```

```yaml
Protocol:
  id: CoordinacionRutasDiarias
  description: >
    Comunicación matutina para coordinar rutas y asignaciones 
    del día entre coordinador logístico y técnicos
  steps:
    - CoordinadorLogistica: enviarAsignacionesDiarias
    - TecnicoLimpieza: confirmarRecepcionAsignacion
    - TecnicoLimpieza: reportarDisponibilidad
    - CoordinadorLogistica: ajustarRutas si cambiosNecesarios
    - TecnicoLimpieza: confirmarRutaFinal
    - CoordinadorLogistica: activarMonitoreoGPS
  timeout: 30_minutes
  fallback: AsignacionAutomaticaPorDefecto
  version: 2.0
```

### 💻 Empresa Tech - Plataforma E-Learning

```yaml
Protocol:
  id: RevisionAprobacionCurso
  description: >
    Proceso estructurado de revisión y aprobación de cursos 
    sometidos al marketplace por instructores
  steps:
    - Instructor: submitirCursoRevision
    - ContentValidator: verificarFormatoTecnico
    - ReviewerPedagogico: evaluarCalidadEducativa
    - ReviewerTecnico: validarAspectosTecnicos si cursoTecnico
    - ContentQualityBoard: tomarDecisionFinal
    - Instructor: recibirNotificacionDecision
    - MarketplaceEngine: publicarCurso si aprobado
  timeout: 5_business_days
  fallback: RevisionExpedita
  version: 3.1
```

```yaml
Protocol:
  id: IntervencionEstudianteRiesgo
  description: >
    Secuencia de intervención personalizada para estudiantes 
    en riesgo de abandonar cursos en progreso
  steps:
    - LearningAnalytics: detectarRiesgoAbandono
    - StudentSuccessManager: evaluarCasoEspecifico
    - AIRecomendaciones: generarSugerenciasPersonalizadas
    - StudentSuccessManager: contactarEstudiante
    - Estudiante: responderContacto si disponible
    - CounselorAcademico: ofrecerSoportePersonalizado
    - Estudiante: aceptarRechazarSoporte
    - StudentSuccessManager: monitorearProgreso
  timeout: 7_days
  fallback: IntervencionAutomatizada
  version: 2.3
```

### 🏪 Empresa Mediana - Sector Abarrotes

```yaml
Protocol:
  id: ProcesoPedidoCompleto
  description: >
    Flujo completo de comunicación desde la generación de pedido 
    hasta la confirmación de entrega y facturación
  steps:
    - ClienteComercial: generarPedido
    - VendedorAsignado: validarDisponibilidadInventario
    - ComiteCredito: evaluarAprobacionCredito si ventaCredito
    - VendedorAsignado: confirmarPedidoConCliente
    - AlmacenistaPickup: prepararOrden
    - SupervisorCalidad: validarOrdenCompleta
    - RepartidorAsignado: recogerOrdenConfirmada
    - RepartidorAsignado: ejecutarEntrega
    - ClienteComercial: confirmarRecepcionConformidad
    - SistemaERP: generarFacturaAutomatica
  timeout: 24_hours
  fallback: ProcesoPedidoManual
  version: 1.5
```

```yaml
Protocol:
  id: RecuperacionCarteraVencida
  description: >
    Protocolo escalonado de comunicación para recuperación 
    de cuentas por cobrar vencidas
  steps:
    - SistemaCobranza: identificarCuentasVencidas
    - GestorCobranza: contactoTelefonicoPrimario
    - ClienteComercial: responderLlamada si disponible
    - GestorCobranza: enviarNotificacionFormalPorEscrito
    - ClienteComercial: responderNotificacion si recibida
    - GestorCobranza: negociarPlanPagos
    - ComiteCredito: aprobarPlanNegociado si aplicable
    - GestorCobranza: documentarAcuerdoFinal
    - SistemaCobranza: programarSeguimientoCumplimiento
  timeout: 15_days
  fallback: EscalacionJuridica
  version: 2.1
```

```yaml
Protocol:
  id: ControlInventarioCiclico
  description: >
    Comunicación diaria para ejecución de conteos cíclicos 
    y resolución de discrepancias detectadas
  steps:
    - SistemaWMS: generarListaConteosDiarios
    - AsistenteInventario: ejecutarConteosAsignados
    - SistemaWMS: compararConteoFisicoVsSistema
    - AsistenteInventario: reportarDiscrepancias si existen
    - JefeAlmacen: investigarCausasDiscrepancia
    - AsistenteInventario: realizarAjustesInventario
    - JefeAlmacen: validarAjustesRealizados
    - SistemaWMS: actualizarNivelesStockSistema
  timeout: 4_hours
  fallback: AuditoriaInventarioCompleta
  version: 1.8
```

```yaml
Protocol:
  id: GestionProductosCaducidad
  description: >
    Comunicación preventiva para gestión de productos 
    próximos a vencer y activación de descuentos
  steps:
    - SistemaWMS: detectarProductosProximosVencer
    - JefeAlmacen: evaluarInventarioAfectado
    - EquipoComercial: recibirAlertaCaducidad
    - EquipoComercial: disenarEstrategiaDescuento
    - GerenciaComercial: aprobarDescuentosEspeciales
    - EquipoVentas: comunicarPromoccionClientes
    - ClientesComerciales: responderOfertasEspeciales
    - SistemaERP: aplicarDescuentosAprobados
  timeout: 72_hours
  fallback: DescuentoAutomaticoEstandar
  version: 1.3
```

## Mejores Prácticas

### ✅ Recomendaciones

1. **Secuencia Lógica**: Organizar pasos en orden temporal coherente
2. **Roles Claros**: Especificar qué actor realiza cada acción
3. **Condiciones Explícitas**: Definir cuándo se ejecutan pasos condicionales
4. **Timeouts Realistas**: Establecer límites de tiempo apropiados

### ❌ Anti-patrones

1. **Protocolos Monolíticos**: Secuencias excesivamente largas sin descomposición
2. **Actores Ambiguos**: Pasos sin responsable claramente definido
3. **Sin Fallbacks**: Protocolos sin alternativas para situaciones de fallo
4. **Timeouts Irreales**: Límites de tiempo imposibles de cumplir

## Vínculos con Otros Artefactos

- **Actor**: Los protocolos coordinan interacciones entre actores
- **Process**: Los protocolos pueden formar parte de procesos más amplios
- **Policy**: Las políticas pueden disparar la ejecución de protocolos
- **Signal**: Los protocolos pueden generar señales durante su ejecución
- **Authority**: Las autoridades pueden aprobar o modificar protocolos
- **Domain**: Los protocolos operan dentro del contexto de dominios específicos

## Casos de Uso Comunes

1. **Coordinación Multi-Actor**: Sincronizar acciones entre múltiples participantes
2. **Manejo de Excepciones**: Definir secuencias para situaciones atípicas
3. **Escalación Estructurada**: Formalizar procesos de escalación
4. **Comunicación Asincrónica**: Coordinar interacciones no simultáneas

## Tipos de Protocolos

### Protocolos Síncronos
Requieren participación simultánea de los actores
```yaml
steps:
  - Actor1: accionInicial
  - Actor2: respuestaInmediata
  - Actor1: confirmacionSincrónica
```

### Protocolos Asíncronos
Permiten delays entre interacciones
```yaml
steps:
  - Actor1: enviarSolicitud
  - Actor2: procesarEnTiempoPropio
  - Actor2: notificarCompletitud
```

### Protocolos Condicionales
Incluyen ramificaciones basadas en condiciones
```yaml
steps:
  - Actor1: evaluarCondicion
  - Actor2: accionA si condicionVerdadera
  - Actor3: accionB si condicionFalsa
```

### Protocolos de Escalación
Definen niveles progresivos de intervención
```yaml
steps:
  - NivelPrimario: intentoResolucion
  - NivelSecundario: intervencion si falloNivel1
  - NivelTerciario: escalacionFinal si persisteFallo
```

## Patrones de Coreografía

### Patrón Request-Response
```yaml
Protocol:
  steps:
    - Solicitante: enviarRequest
    - Proveedor: procesarRequest
    - Proveedor: enviarResponse
    - Solicitante: confirmarRecepcion
```

### Patrón Publish-Subscribe
```yaml
Protocol:
  steps:
    - Publisher: emitirEvento
    - Subscriber1: procesarEvento
    - Subscriber2: procesarEvento
    - SubscriberN: procesarEvento
```

### Patrón State Machine
```yaml
Protocol:
  steps:
    - Actor: transicionarEstadoA
    - Sistema: validarTransicion
    - Actor: ejecutarAccionEstadoA
    - Trigger: activarTransicionSiguiente
```

## Manejo de Timeouts

### Timeout Global
Límite para todo el protocolo
```yaml
timeout: 24_hours
action_on_timeout: escalate_to_supervisor
```

### Timeout por Paso
Límites específicos por interacción
```yaml
steps:
  - Actor1: accion (timeout: 2_hours)
  - Actor2: respuesta (timeout: 30_minutes)
```

### Timeout Adaptativo
Límites que se ajustan dinámicamente
```yaml
timeout: calculated_based_on_complexity
factors: [number_of_actors, historical_data, priority_level]
```

## Fallback Strategies

### Fallback Manual
Transferir a proceso manual
```yaml
fallback: ManualProcessing
trigger: automatic_failure_detection
notification: send_to_human_operator
```

### Fallback Simplificado
Usar protocolo más simple
```yaml
fallback: SimplifiedProtocol
removes: [optional_steps, validation_layers]
maintains: [core_functionality]
```

### Fallback de Escalación
Involucrar autoridades superiores
```yaml
fallback: EscalationProtocol
escalate_to: higher_authority
include_context: failure_details
``` 