# Actor - Artefacto SOL

## Definición

**Actor** identifica sujetos —humanos o artificiales— que ejecutan acciones dentro de un proceso. Permite declarar capacidades operativas, versiones y límites de contexto.

## Taxonomía

| Campo | Tipo | Obligatorio | Descripción |
|-------|------|-------------|-------------|
| `id` | String | ✅ | Identificador único del actor |
| `type` | String | ✅ | Tipo de actor (human, aiModel, system, sensor, etc.) |
| `capabilities` | Array | ✅ | Lista de capacidades o acciones que puede realizar |
| `domain` | String | ✅ | Dominio donde opera el actor |

## Extensiones

| Campo | Tipo | Descripción |
|-------|------|-------------|
| `skills` | Array | Habilidades específicas del actor |
| `version` | String | Versión del actor (especialmente útil para sistemas/AI) |
| `owner` | String | Responsable o equipo que gobierna el actor |

## Estructura Base

```yaml
Actor:
  id: [IdentificadorUnico]
  type: [TipoActor]
  capabilities: [ListaCapacidades]
  domain: [DominioOperacion]
```

## Ejemplos por Contexto Empresarial

### 🏠 Empresa Tradicional - Servicio de Limpieza

```yaml
Actor:
  id: TecnicoLimpiezaResidencial
  type: human
  capabilities: 
    - ejecutarProtocolosLimpieza
    - manejarEquipoEspecializado
    - interactuarConClientes
    - documentarIncidencias
    - realizarInspeccionCalidad
  domain: GestionCalidadServicio
  skills: [LimpiezaProfunda, ManejoQuimicos, AtencionCliente]
  owner: SupervisorOperaciones
```

```yaml
Actor:
  id: CoordinadorLogistica
  type: human
  capabilities:
    - planificarRutas
    - asignarRecursos
    - optimizarTiempos
    - coordinarEquipos
    - gestionarEmergencias
  domain: OptimizacionLogistica
  skills: [AnalisisGeoespacial, GestionEquipos, ResolucionProblemas]
  owner: GerenciaOperativa
```

```yaml
Actor:
  id: AppMovilTecnicos
  type: system
  capabilities:
    - capturarUbicacionGPS
    - registrarTiempos
    - tomarFotografias
    - completarChecklists
    - sincronizarDatos
  domain: GestionCalidadServicio
  version: 2.1.3
  owner: EquipoTecnologia
```

```yaml
Actor:
  id: AlgoritmoOptimizacionRutas
  type: aiModel
  capabilities:
    - calcularRutasOptimas
    - considerarRestricciones
    - adaptarseATrafico
    - predecirTiempos
    - optimizarCostos
  domain: OptimizacionLogistica
  version: 1.5.2
  owner: EquipoDataScience
```

### 💻 Empresa Tech - Plataforma E-Learning

```yaml
Actor:
  id: InstructorVerificado
  type: human
  capabilities:
    - crearContenidoEducativo
    - disenarEvaluaciones
    - facilitarAprendizaje
    - interactuarEstudiantes
    - actualizarCursos
  domain: MarketplaceCursos
  skills: [DisenoInstruccional, ExperticiaTecnica, ComunicacionEfectiva]
  owner: ContentTeam
```

```yaml
Actor:
  id: EstudianteActivo
  type: human
  capabilities:
    - consumirContenido
    - realizarEvaluaciones
    - interactuarPlataforma
    - proporcionarFeedback
    - completarCertificaciones
  domain: ExperienciaAprendizaje
  skills: [AprendizajeAutonomo, PensamientoCritico]
  owner: StudentSuccessTeam
```

```yaml
Actor:
  id: AIRecomendaciones
  type: aiModel
  capabilities:
    - analizarPatronesAprendizaje
    - generarRecomendaciones
    - personalizarExperiencia
    - predecirPreferencias
    - optimizarConversion
  domain: ExperienciaAprendizaje
  version: 4.2.1
  owner: AITeam
```

```yaml
Actor:
  id: ReviewerPedagogico
  type: human
  capabilities:
    - evaluarCalidadPedagogica
    - validarEstructuraCurso
    - revisarContenido
    - aprobarPublicacion
    - proporcionarFeedback
  domain: MarketplaceCursos
  skills: [DisenoInstruccional, EvaluacionEducativa, PedagogiaDigital]
  owner: QualityAssuranceTeam
```

```yaml
Actor:
  id: PlataformaLMS
  type: system
  capabilities:
    - gestionarUsuarios
    - entregarContenido
    - trackearProgreso
    - gestionarCertificados
    - procesosPagos
  domain: ExperienciaAprendizaje
  version: 3.8.5
  owner: PlatformTeam
```

### 🏪 Empresa Mediana - Sector Abarrotes

```yaml
Actor:
  id: ClienteComercial
  type: human
  capabilities:
    - generarPedidos
    - negociarTerminos
    - confirmarRecepciones
    - gestionarPagos
    - evaluarServicios
  domain: GestionDistribucion
  skills: [GestionComercial, NegociacionTerminos]
  owner: GerenciaComercial
```

```yaml
Actor:
  id: RepartidorAsignado
  type: human
  capabilities:
    - ejecutarEntregas
    - manejarVehiculo
    - interactuarClientes
    - gestionarDocumentacion
    - reportarIncidencias
  domain: GestionDistribucion
  skills: [ConduccionProfesional, AtencionCliente, OrganizacionCarga]
  owner: CoordinadorLogistica
```

```yaml
Actor:
  id: GestorCobranza
  type: human
  capabilities:
    - contactarClientes
    - negociarPagos
    - documentarAcuerdos
    - seguirProcedimientos
    - escalarCasosComplejos
  domain: GestionCarteraCredito
  skills: [NegociacionCobranza, ComunicacionEfectiva, ConocimientoLegal]
  owner: GerenciaFinanciera
```

```yaml
Actor:
  id: AsistenteInventario
  type: human
  capabilities:
    - ejecutarConteosCiclicos
    - actualizarRegistros
    - identificarDiscrepancias
    - manejarSistemaWMS
    - reportarVariaciones
  domain: ControlInventario
  skills: [ManejoInventarios, PrecisionNumerica, UsoTecnologia]
  owner: JefeAlmacen
```

```yaml
Actor:
  id: SistemaERP
  type: system
  capabilities:
    - gestionarInventarios
    - procesarFacturacion
    - controlerCreditos
    - generarReportes
    - integrarProcesos
  domain: GestionDistribucion
  version: 12.4.7
  owner: EquipoTI
```

```yaml
Actor:
  id: AlgoritmoOptimizacionInventario
  type: aiModel
  capabilities:
    - predecirDemanda
    - calcularNivelesOptimos
    - identificarPatrones
    - sugerirReposicion
    - optimizarRotacion
  domain: ControlInventario
  version: 2.3.1
  owner: EquipoAnalytics
```

## Mejores Prácticas

### ✅ Recomendaciones

1. **Capacidades Específicas**: Definir capacidades concretas y medibles
2. **Tipo Apropiado**: Usar el tipo correcto (human, system, aiModel, etc.)
3. **Dominio Coherente**: Asegurar que el actor opere en su dominio natural
4. **Versionado para Sistemas**: Mantener control de versiones para actores técnicos

### ❌ Anti-patrones

1. **Capacidades Vagas**: Definiciones ambiguas de lo que puede hacer el actor
2. **Actor Omnipotente**: Actores con demasiadas capacidades dispersas
3. **Tipo Incorrecto**: Clasificar mal el tipo de actor
4. **Sin Ownership**: Actores sin responsable claro de su gestión

## Vínculos con Otros Artefactos

- **Process**: Los actores ejecutan pasos específicos en los procesos
- **Domain**: Los actores operan dentro de dominios específicos
- **Policy**: Las políticas pueden requerir actores para ejecutar acciones
- **Concept**: Los actores pueden representar o interactuar con conceptos
- **Authority**: Las autoridades son tipos especiales de actores con poder de decisión
- **Signal**: Los actores pueden enviar y recibir señales
- **Observation**: Los actores tipo sensor generan observaciones

## Casos de Uso Comunes

1. **Definición de Roles**: Establecer quién puede hacer qué en el sistema
2. **Automatización**: Identificar qué puede automatizarse vs. requiere humanos
3. **Asignación de Responsabilidades**: Clarificar ownership de procesos
4. **Integración de Sistemas**: Modelar sistemas como actores con capacidades específicas

## Tipos de Actores

### Human
Personas con roles específicos en la organización
```yaml
Actor:
  type: human
  capabilities: [AccionesHumanas]
  skills: [HabilidadesEspecificas]
```

### System
Sistemas de software con funcionalidades definidas
```yaml
Actor:
  type: system
  capabilities: [FuncionalidadesSistema]
  version: X.Y.Z
```

### AI Model
Modelos de inteligencia artificial con capacidades específicas
```yaml
Actor:
  type: aiModel
  capabilities: [CapacidadesIA]
  version: X.Y.Z
```

### Sensor
Dispositivos que capturan información del entorno
```yaml
Actor:
  type: sensor
  capabilities: [TiposDeMedicion]
  version: X.Y.Z
```

## Patrones de Capacidades

### Patrón CRUD
```yaml
capabilities: [crear, leer, actualizar, eliminar]
```

### Patrón de Workflow
```yaml
capabilities: [iniciar, procesar, validar, completar, escalar]
```

### Patrón de Comunicación
```yaml
capabilities: [enviar, recibir, notificar, confirmar]
``` 