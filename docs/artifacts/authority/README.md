# Authority - Artefacto SOL

## Definición

**Authority** es un rol de validación y gobierno que aprueba, rechaza o inmoviliza ciertas políticas dentro de un dominio o proceso.

## Taxonomía

| Campo | Tipo | Obligatorio | Descripción |
|-------|------|-------------|-------------|
| `id` | String | ✅ | Identificador único de la autoridad |
| `role` | String | ✅ | Tipo de rol de autoridad (approver, auditor, governor, etc.) |
| `approves` | Array | ✅ | Lista de políticas o procesos que puede aprobar |
| `scope` | String | ✅ | Alcance de la autoridad dentro del dominio |

## Extensiones

| Campo | Tipo | Descripción |
|-------|------|-------------|
| `delegates` | Array | Lista de autoridades subordinadas |
| `escalationMatrix` | Object | Matriz de escalación para decisiones complejas |

## Estructura Base

```yaml
Authority:
  id: [IdentificadorUnico]
  role: [TipoRolAutoridad]
  approves: [ListaPoliticasOProcesos]
  scope: [AlcanceAutoridad]
```

## Ejemplos por Contexto Empresarial

### 🏠 Empresa Tradicional - Servicio de Limpieza

```yaml
Authority:
  id: SupervisorCalidadOperativo
  role: approver
  approves: 
    - Policy:EvaluacionPostServicio
    - Policy:CriteriosCalidadMinima
    - Process:InspeccionCalidad
  scope: GestionCalidadServicio
  delegates: [SupervisorTurno, LiderEquipo]
  escalationMatrix:
    incidenciasCriticas: GerenciaOperativa
    reclamosClientes: AtencionCliente
```

```yaml
Authority:
  id: GerenciaOperativa
  role: governor
  approves:
    - Policy:OptimizacionRutaDiaria
    - Policy:AsignacionRecursos
    - Domain:OptimizacionLogistica
  scope: OperacionesGenerales
  delegates: [SupervisorCalidad, CoordinadorLogistica]
  escalationMatrix:
    decisionesEstrategicas: DireccionGeneral
    conflictosRecursos: ComiteOperativo
```

```yaml
Authority:
  id: AuditorISO
  role: auditor
  approves:
    - Policy:CumplimientoEstandares
    - Process:CertificacionCalidad
    - Indicator:MetricasCalidad
  scope: CertificacionISO
  escalationMatrix:
    noConformidades: OrganismoCertificador
    mejoraContinua: GerenciaCalidad
```

### 💻 Empresa Tech - Plataforma E-Learning

```yaml
Authority:
  id: ContentQualityBoard
  role: approver
  approves:
    - Policy:CriteriosCalidadPedagogica
    - Policy:AprobacionCursos
    - Process:RevisionContenido
  scope: MarketplaceCursos
  delegates: [ReviewerPedagogico, ReviewerTecnico]
  escalationMatrix:
    conflictosCalidad: AcademicCouncil
    apelaciones: ChiefAcademicOfficer
```

```yaml
Authority:
  id: AIEthicsBoard
  role: governor
  approves:
    - Policy:PersonalizacionIA
    - Policy:PrivacidadDatos
    - Process:AlgoritmoRecomendaciones
  scope: ExperienciaAprendizaje
  delegates: [DataProtectionOfficer, AIProductManager]
  escalationMatrix:
    violacionesEticas: LegalDepartment
    bias_discriminacion: EthicsCommittee
```

```yaml
Authority:
  id: StudentSuccessManager
  role: approver
  approves:
    - Policy:IntervencionRetencion
    - Process:SoporteEstudiante
    - Indicator:SatisfaccionEstudiante
  scope: ExperienciaAprendizaje
  delegates: [CounselorAcademico, TutorOnline]
  escalationMatrix:
    casosCriticos: AcademicAffairs
    abandonoMasivo: ProductTeam
```

### 🏪 Empresa Mediana - Sector Abarrotes

```yaml
Authority:
  id: ComiteCredito
  role: approver
  approves:
    - Policy:AprobacionCreditoCliente
    - Policy:LimitesCredito
    - Process:EvaluacionRiesgo
  scope: GestionCarteraCredito
  delegates: [AnalistaCredito, GestorComercial]
  escalationMatrix:
    creditosAltos: DirectorFinanciero
    riesgoConcentrado: ConsejoDireccion
```

```yaml
Authority:
  id: GerenciaInventario
  role: governor
  approves:
    - Policy:NivelesMinimoStock
    - Policy:RotacionFIFO
    - Process:ControlInventarioCiclico
  scope: ControlInventario
  delegates: [JefeAlmacen, SupervisorInventario]
  escalationMatrix:
    discrepanciasAltas: AuditoriaInterna
    perdidas_significativas: GerenciaFinanciera
```

```yaml
Authority:
  id: DirectorLogistica
  role: approver
  approves:
    - Policy:OptimizacionRutas
    - Policy:CapacidadMaximaCarga
    - Process:PlanificacionRepartos
  scope: GestionDistribucion
  delegates: [CoordinadorRutas, SupervisorFlota]
  escalationMatrix:
    fallosDistribucion: GerenciaOperativa
    costosExcesivos: GerenciaFinanciera
```

```yaml
Authority:
  id: GerenciaFinanciera
  role: governor
  approves:
    - Policy:EscalacionCobranza
    - Policy:AprovacionDescuentos
    - Domain:GestionCarteraCredito
  scope: AspectosFinancieros
  delegates: [ContadorGeneral, GestorTesoreria]
  escalationMatrix:
    perdidas_extraordinarias: ConsejoDireccion
    cambios_politicas: ComiteEjecutivo
```

```yaml
Authority:
  id: AuditorInventario
  role: auditor
  approves:
    - Process:AuditoriaInventario
    - Policy:ToleranciaVariacion
    - Indicator:PrecisionInventario
  scope: ControlInventario
  escalationMatrix:
    irregularidades: GerenciaGeneral
    fraude_detectado: LegalCompliance
```

## Mejores Prácticas

### ✅ Recomendaciones

1. **Scope Claro**: Definir claramente el alcance de autoridad
2. **Delegación Apropiada**: Establecer cadenas de delegación coherentes
3. **Escalación Definida**: Crear matrices de escalación para situaciones complejas
4. **Separation of Duties**: Evitar concentración excesiva de poder

### ❌ Anti-patrones

1. **Autoridad Omnipotente**: Una sola autoridad que aprueba todo
2. **Scope Difuso**: Alcances de autoridad que se superponen confusamente
3. **Sin Escalación**: Falta de mecanismos para situaciones excepcionales
4. **Delegación Circular**: Cadenas de delegación que crean bucles

## Vínculos con Otros Artefactos

- **Policy**: Las autoridades aprueban y gobiernan políticas
- **Domain**: Las autoridades operan dentro de dominios específicos
- **Process**: Las autoridades pueden aprobar o auditar procesos
- **Actor**: Las autoridades son tipos especializados de actores
- **Result**: Las autoridades pueden emitir resultados de decisiones
- **Signal**: Las autoridades pueden recibir señales para tomar decisiones

## Casos de Uso Comunes

1. **Aprobación de Políticas**: Validar reglas de negocio antes de implementación
2. **Governance**: Establecer marcos de gobierno para dominios específicos
3. **Auditoría**: Verificar cumplimiento de procesos y políticas
4. **Escalación**: Resolver conflictos o situaciones excepcionales

## Tipos de Autoridades

### Approver
Autoridades que aprueban políticas o procesos
```yaml
role: approver
capabilities: [evaluar, aprobar, rechazar]
decision_scope: specific_policies
```

### Governor
Autoridades que establecen marcos de gobierno
```yaml
role: governor
capabilities: [establecer_reglas, supervisar_cumplimiento, modificar_scope]
decision_scope: domain_wide
```

### Auditor
Autoridades que verifican cumplimiento
```yaml
role: auditor
capabilities: [inspeccionar, verificar, reportar_incumplimientos]
decision_scope: compliance_verification
```

### Arbitrator
Autoridades que resuelven conflictos
```yaml
role: arbitrator
capabilities: [mediar, resolver_conflictos, emitir_decisiones_finales]
decision_scope: conflict_resolution
```

## Patrones de Autoridad

### Patrón Jerárquico
```yaml
Authority:
  hierarchy_level: 3
  reports_to: SuperiorAuthority
  delegates_to: [SubordinateAuthority1, SubordinateAuthority2]
```

### Patrón de Comité
```yaml
Authority:
  type: committee
  members: [Authority1, Authority2, Authority3]
  decision_method: majority_vote
  quorum: 2
```

### Patrón de Especialización
```yaml
Authority:
  specialization: TechnicalExpertise
  approves: [technical_policies_only]
  collaborates_with: [BusinessAuthority, LegalAuthority]
```

## Matrices de Escalación

### Escalación por Severidad
```yaml
escalationMatrix:
  low_impact: TeamLead
  medium_impact: Manager
  high_impact: Director
  critical_impact: ExecutiveCommittee
```

### Escalación por Dominio
```yaml
escalationMatrix:
  technical_issues: CTO
  business_issues: COO
  legal_issues: LegalCounsel
  financial_issues: CFO
```

### Escalación Temporal
```yaml
escalationMatrix:
  immediate: OnCallAuthority
  same_day: DailyManager
  weekly: WeeklyCommittee
  monthly: BoardReview
```

## Niveles de Autoridad

### Operativo
Decisiones del día a día dentro de procesos establecidos
```yaml
scope: operational_decisions
time_sensitivity: immediate
approval_threshold: low
```

### Táctico
Decisiones que afectan procesos y políticas departamentales
```yaml
scope: departmental_policies
time_sensitivity: days_weeks
approval_threshold: medium
```

### Estratégico
Decisiones que afectan dominios completos o la organización
```yaml
scope: strategic_decisions
time_sensitivity: weeks_months
approval_threshold: high
``` 