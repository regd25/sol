# Process - Artefacto SOL

## Definición

**Process** define una secuencia operacional estructurada para ejecutar una lógica bajo ciertas condiciones. Define pasos, actores y vínculos con reglas relevantes.

## Taxonomía

| Campo | Tipo | Obligatorio | Descripción |
|-------|------|-------------|-------------|
| `id` | String | ✅ | Identificador único del proceso |
| `steps` | Array | ✅ | Lista ordenada de pasos que componen el proceso |
| `vision` | String | ✅ | Referencia a la visión que justifica el proceso |
| `actors` | Array | ✅ | Lista de actores que participan en el proceso |

## Extensiones

| Campo | Tipo | Descripción |
|-------|------|-------------|
| `errorPaths` | Array | Rutas alternativas para manejo de errores |
| `alternatePaths` | Array | Rutas alternativas para diferentes escenarios |
| `timeLimits` | Object | Límites de tiempo por paso o proceso completo |

## Estructura Base

```yaml
Process:
  id: [IdentificadorUnico]
  steps:
    - [Actor]:[TipoActor] → [Accion]
    - [Sistema]:[ComponenteEspecifico] → [Operacion]
    - [Policy]:[ReglaNegocio] → [Evaluacion]
  vision: [ReferenciaAVision]
  actors: [ListaActoresInvolucrados]
```

## Ejemplos por Contexto Empresarial

### 🏠 Empresa Tradicional - Servicio de Limpieza

```yaml
Process:
  id: EjecucionServicioCompleto
  steps:
    - Actor:TecnicoLimpieza → LlegarUbicacion
    - Actor:TecnicoLimpieza → RegistrarInicioServicio
    - Actor:TecnicoLimpieza → EjecutarProtocoloLimpieza
    - System:AppMovil → CapturarFotosAntesDespues
    - Policy:EvaluacionCalidad → ValidarEstandaresCalidad
    - Actor:TecnicoLimpieza → CompletarChecklistServicio
    - Actor:Cliente → ConfirmarSatisfaccion
    - System:ERP → GenerarFacturacion
  vision: ExcelenciaEnLimpieza
  actors: [TecnicoLimpieza, Cliente, SupervisorCalidad]
  timeLimits:
    totalProcess: 4 hours
    stepTimeout: 30 minutes
  errorPaths:
    - IncidenciaCalidad → EscalarSupervisor
    - ClienteAusente → ReprogramarServicio
```

```yaml
Process:
  id: PlanificacionRutasSemanales
  steps:
    - Actor:CoordinadorLogistica → RecopilarSolicitudesServicio
    - System:AlgoritmoOptimizacion → CalcularRutasOptimas
    - Policy:CapacidadMaximaTecnicos → ValidarDisponibilidad
    - Actor:CoordinadorLogistica → AsignarTecnicosRutas
    - System:AppMovil → NotificarAsignaciones
    - Actor:TecnicoLimpieza → ConfirmarDisponibilidad
    - Actor:CoordinadorLogistica → PublicarRutasFinales
  vision: OptimizacionRutas
  actors: [CoordinadorLogistica, TecnicoLimpieza]
  timeLimits:
    totalProcess: 2 hours
  alternatePaths:
    - TecnicoNoDisponible → ReasignarAutomatico
```

### 💻 Empresa Tech - Plataforma E-Learning

```yaml
Process:
  id: CreacionPublicacionCurso
  steps:
    - Actor:Instructor → SubmitirPropuestaCurso
    - System:ContentManagement → ValidarFormatoContenido
    - Policy:CriteriosCalidadPedagogica → EvaluarContenido
    - Actor:ReviewerPedagogico → RealizarRevisionCalidad
    - Actor:ReviewerTecnico → ValidarAspectosTecnicos
    - Policy:AprobacionCurso → DeterminarAprobacion
    - System:MarketplaceEngine → PublicarCurso
    - System:RecommendationAI → ActualizarAlgoritmos
  vision: AprendizajeAccesible
  actors: [Instructor, ReviewerPedagogico, ReviewerTecnico]
  timeLimits:
    totalProcess: 5 business days
    reviewPhase: 3 business days
  errorPaths:
    - CursoRechazado → NotificarCorrecciones
    - ContenidoIncompleto → SolicitarComplementos
```

```yaml
Process:
  id: PersonalizacionExperienciaEstudiante
  steps:
    - System:UserAnalytics → Analizar

        ComportamientoEstudiante
    - System:LearningAI → GenerarPerfilAprendizaje
    - Policy:RecomendacionPersonalizada → EvaluarCriterios
    - System:RecommendationEngine → GenerarSugerencias
    - Actor:Estudiante → InteractuarRecomendaciones
    - System:FeedbackLoop → CapturarPreferencias
    - System:LearningAI → OptimizarModelo
  vision: PersonalizacionInteligente
  actors: [Estudiante]
  timeLimits:
    analysisPhase: 15 minutes
    recommendationGeneration: 5 minutes
  alternatePaths:
    - DatosInsuficientes → UsarRecomendacionesGenericas
```

### 🏪 Empresa Mediana - Sector Abarrotes

```yaml
Process:
  id: GestionCompletaPedido
  steps:
    - Actor:ClienteComercial → GenerarPedido
    - System:ERP → ValidarInventarioDisponible
    - Policy:AprobacionCredito → EvaluarLineaCredito
    - Actor:VendedorAsignado → ConfirmarPedido
    - System:WMS → GenerarOrdenPreparacion
    - Actor:AlmacenistaPickup → PrepararMercancia
    - Actor:SupervisorCalidad → ValidarOrden
    - System:LogisticaEngine → AsignarRutaEntrega
    - Actor:RepartidorAsignado → EjecutarEntrega
    - Actor:ClienteComercial → ConfirmarRecepcion
    - System:ERP → GenerarFactura
    - System:Cobranza → RegistrarCuentaPorCobrar
  vision: DistribucionEficiente
  actors: [ClienteComercial, VendedorAsignado, AlmacenistaPickup, 
           SupervisorCalidad, RepartidorAsignado]
  timeLimits:
    totalProcess: 24 hours
    preparationPhase: 4 hours
    deliveryPhase: 8 hours
  errorPaths:
    - InventarioInsuficiente → GenerarOrdenCompra
    - CreditoRechazado → SolicitarPagoContado
    - ClienteAusente → ReprogramarEntrega
```

```yaml
Process:
  id: RecuperacionCarteraVencida
  steps:
    - System:Cobranza → IdentificarCuentasVencidas
    - Policy:EscalacionCobranza → CategoruzarRiesgo
    - Actor:GestorCobranza → ContactarClienteInicial
    - Actor:GestorCobranza → NegociarPlanPagos
    - Actor:ClienteComercial → EvaluarPropuesta
    - Policy:AprobacionPlanPagos → ValidarTerminos
    - Actor:GestorCobranza → DocumentarAcuerdo
    - System:Cobranza → ProgramarSeguimiento
    - Actor:GestorCobranza → MonitorearCumplimiento
  vision: RelacionesComerciales
  actors: [GestorCobranza, ClienteComercial, SupervisorCredito]
  timeLimits:
    initialContact: 48 hours
    negotiationPhase: 1 week
  alternatePaths:
    - AcuerdoIncumplido → EscalarProcesoJuridico
    - ClienteInlocalizale → ActivarCobranzaExterna
```

```yaml
Process:
  id: ControlInventarioCiclico
  steps:
    - System:WMS → GenerarListaConteosDiarios
    - Actor:AsistenteInventario → EjecutarConteoCiclico
    - System:WMS → CompararConteoFisicoVsSistema
    - Policy:ToleranciaVariacionInventario → EvaluarDiferencias
    - Actor:JefeAlmacen → InvestigarDiscrepancias
    - Actor:AsistenteInventario → AjustarInventarioSistema
    - System:WMS → ActualizarNivelesStock
    - Actor:JefeAlmacen → GenerarReporteVariaciones
  vision: DistribucionEficiente
  actors: [AsistenteInventario, JefeAlmacen]
  timeLimits:
    dailyCount: 2 hours
    adjustmentPhase: 30 minutes
  errorPaths:
    - DiscrepanciaSignificativa → AuditoriaCompleta
```

## Mejores Prácticas

### ✅ Recomendaciones

1. **Secuencia Lógica**: Ordenar pasos de manera coherente y ejecutable
2. **Actores Específicos**: Asignar responsabilidades claras a cada actor
3. **Puntos de Control**: Incluir validaciones y políticas en momentos clave
4. **Manejo de Excepciones**: Definir rutas alternativas para escenarios atípicos

### ❌ Anti-patrones

1. **Procesos Monolíticos**: Procesos excesivamente largos sin descomposición
2. **Actores Ambiguos**: Pasos sin responsable claramente definido
3. **Sin Validaciones**: Procesos sin puntos de control de calidad
4. **Límites Temporales Irreales**: Tiempos no factibles para la ejecución

## Vínculos con Otros Artefactos

- **Vision**: Los procesos deben contribuir al logro de la visión estratégica
- **Domain**: Los procesos operan dentro del contexto de dominios específicos
- **Policy**: Las políticas pueden disparar o validar procesos
- **Actor**: Los actores ejecutan los pasos definidos en los procesos
- **Concept**: Los procesos operan sobre los conceptos definidos
- **Indicator**: Los indicadores pueden medir la efectividad de los procesos
- **Signal**: Los procesos pueden generar señales al completarse o fallar

## Casos de Uso Comunes

1. **Automatización Workflow**: Definir flujos de trabajo automatizables
2. **Estandarización Operativa**: Unificar la ejecución de actividades
3. **Onboarding**: Procesos de incorporación de usuarios o empleados
4. **Quality Assurance**: Procesos de control y aseguramiento de calidad

## Patrones de Diseño

### Patrón Secuencial Lineal
```yaml
Process:
  steps:
    - Step1 → Action1
    - Step2 → Action2
    - Step3 → Action3
```

### Patrón con Bifurcación
```yaml
Process:
  steps:
    - CommonStep → InitialAction
    - Policy:Condition → EvaluateScenario
  alternatePaths:
    - ScenarioA → PathA_Steps
    - ScenarioB → PathB_Steps
```

### Patrón de Validación
```yaml
Process:
  steps:
    - Actor:User → PerformAction
    - Policy:ValidationRule → ValidateAction
    - System:Processor → ProcessIfValid
  errorPaths:
    - ValidationFailed → NotifyAndRetry
``` 