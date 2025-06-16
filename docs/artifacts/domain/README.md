# Domain - Artefacto SOL

## Definición

**Domain** es el agrupador semántico de artefactos orientados a una misma visión. Delimita el alcance contextual donde se definen y operan políticas, procesos e indicadores coherentes entre sí.

## Taxonomía

| Campo | Tipo | Obligatorio | Descripción |
|-------|------|-------------|-------------|
| `id` | String | ✅ | Identificador único del dominio |
| `description` | String | ✅ | Descripción del alcance y propósito del dominio |
| `vision` | String | ✅ | Referencia a la visión que justifica el dominio |
| `policies` | Array | ❌ | Lista de políticas que operan en el dominio |
| `processes` | Array | ❌ | Lista de procesos definidos en el dominio |
| `indicators` | Array | ❌ | Lista de indicadores que miden el dominio |

## Extensiones

| Campo | Tipo | Descripción |
|-------|------|-------------|
| `timeScope` | String | Alcance temporal del dominio (ej: anual, trimestral) |
| `audience` | Array | Stakeholders o equipos responsables del dominio |
| `governance` | String | Modelo de gobernanza aplicable al dominio |

## Estructura Base

```yaml
Domain:
  id: [IdentificadorUnico]
  description: [Descripción del alcance y propósito del dominio]
  vision: [ReferenciaAVision]
```

## Ejemplos por Contexto Empresarial

### 🏠 Empresa Tradicional - Servicio de Limpieza

```yaml
Domain:
  id: GestionCalidadServicio
  description: >
    Sistema integral de control y aseguramiento de calidad 
    en servicios de limpieza, desde la planificación hasta 
    la evaluación post-servicio.
  vision: ExcelenciaEnLimpieza
  policies: 
    - EvaluacionPostServicio
    - CriteriosCalidadMinima
    - EscalacionIncidencias
  processes:
    - InspeccionCalidad
    - CorreccionDeficiencias
    - SeguimientoSatisfaccion
  indicators:
    - IndiceCalidadPromedio
    - TasaReincidenciaProblemas
  audience: [SupervisorCalidad, GerenciaOperativa]
  governance: CertificacionISO
```

```yaml
Domain:
  id: OptimizacionLogistica
  description: >
    Gestión eficiente de rutas, recursos y tiempos para 
    maximizar la productividad operativa del equipo de limpieza.
  vision: OptimizacionRutas
  policies:
    - AsignacionOptima
    - LimiteTiempoTraslado
    - RedistribucionCargas
  processes:
    - PlanificacionRutas
    - MonitoreoTiempos
    - AjusteDinamico
  indicators:
    - TiempoPromedioTraslado
    - PorcentajeOcupacionTecnicos
  audience: [CoordinadorLogistica, SupervisorRutas]
  timeScope: semanal
```

### 💻 Empresa Tech - Plataforma E-Learning

```yaml
Domain:
  id: ExperienciaAprendizaje
  description: >
    Ecosistema completo de experiencia del estudiante desde 
    el descubrimiento de cursos hasta la certificación, 
    incluyendo personalización y soporte.
  vision: AprendizajeAccesible
  policies:
    - CriteriosRecomendacion
    - EvaluacionProgreso
    - CertificacionCompletitud
  processes:
    - OnboardingEstudiante
    - SeguimientoProgreso
    - EmisionCertificados
  indicators:
    - TasaCompletitudCursos
    - SatisfaccionEstudiante
    - TiempoRetencionPlataforma
  audience: [ProductManager, UXTeam, StudentSuccess]
  governance: DataPrivacyCompliance
```

```yaml
Domain:
  id: MarketplaceCursos
  description: >
    Plataforma comercial que conecta instructores con estudiantes, 
    gestionando la oferta, demanda, pagos y calidad de contenido educativo.
  vision: PersonalizacionInteligente
  policies:
    - AprobacionCursos
    - PoliticasPrecio
    - RevisionCalidad
  processes:
    - SubmisionCurso
    - RevisionContenido
    - PublicacionMarketplace
  indicators:
    - NumeroVentasCursos
    - RatingPromedioCursos
    - IngresosPorInstructor
  audience: [ContentTeam, CommerceTeam, QualityReview]
  timeScope: mensual
```

### 🏪 Empresa Mediana - Sector Abarrotes

```yaml
Domain:
  id: GestionDistribucion
  description: >
    Sistema completo de distribución que abarca desde la 
    planificación de rutas hasta la entrega efectiva, 
    incluyendo seguimiento y optimización continua.
  vision: DistribucionEficiente
  policies:
    - OptimizacionRutas
    - CapacidadMaximaCarga
    - VentanasTiempoEntrega
  processes:
    - PlanificacionRepartos
    - EjecucionEntregas
    - ConfirmacionRecepciones
  indicators:
    - PorcentajeEntregasAProgramadas
    - CostoPromedioPorEntrega
    - SatisfaccionClientes
  audience: [GerenteLogistica, CoordinadorRutas, Repartidores]
  timeScope: diario
```

```yaml
Domain:
  id: GestionCarteraCredito
  description: >
    Administración integral del crédito comercial, desde la 
    evaluación crediticia hasta la recuperación de cartera, 
    manteniendo relaciones comerciales saludables.
  vision: RelacionesComerciales
  policies:
    - EvaluacionRiesgoCredito
    - LimitesCredito
    - EscalacionCobranza
  processes:
    - AprobacionCredito
    - SeguimientoVencimientos
    - RecuperacionCartera
  indicators:
    - CarteraVencida
    - TasaRecuperacion
    - DiasPorCobrar
  audience: [GerenteCredito, GestoresCobranza, GerenciaComercial]
  governance: RegulacionesFinancieras
```

```yaml
Domain:
  id: ControlInventario
  description: >
    Sistema de gestión de inventarios que garantiza disponibilidad 
    de productos, optimiza niveles de stock y minimiza pérdidas 
    por caducidad o deterioro.
  vision: DistribucionEficiente
  policies:
    - NivelesMinimoStock
    - RotacionFIFO
    - AlertasCaducidad
  processes:
    - RecepcionMercancia
    - ActualizacionInventario
    - ConteosCiclicos
  indicators:
    - RotacionInventario
    - PorcentajeMermaProductos
    - DisponibilidadStock
  audience: [JefeAlmacen, AsistentesInventario, Compradores]
  timeScope: semanal
```

## Mejores Prácticas

### ✅ Recomendaciones

1. **Cohesión Semántica**: Agrupar artefactos relacionados conceptualmente
2. **Tamaño Apropiado**: Ni muy granular ni excesivamente amplio
3. **Clara Delimitación**: Definir límites precisos entre dominios
4. **Trazabilidad a Visión**: Cada dominio debe justificarse en una visión específica

### ❌ Anti-patrones

1. **Dominios Monolíticos**: Agrupaciones demasiado amplias sin cohesión
2. **Overlapping**: Dominios con límites difusos que se superponen
3. **Visión Huérfana**: Dominios sin conexión clara a una visión estratégica
4. **Dominios Vacíos**: Definidos pero sin políticas, procesos o indicadores

## Vínculos con Otros Artefactos

- **Vision**: Cada dominio debe fundamentarse en una visión específica
- **Concept**: Los dominios definen y agrupan conceptos relacionados
- **Policy**: Las políticas operan dentro del contexto de un dominio
- **Process**: Los procesos ejecutan las operaciones del dominio
- **Actor**: Los actores operan dentro del alcance de dominios específicos
- **Indicator**: Los indicadores miden el desempeño del dominio
- **Authority**: Las autoridades gobiernan dominios específicos

## Casos de Uso Comunes

1. **Organización de Responsabilidades**: Definir áreas de gestión específicas
2. **Separación de Contextos**: Delimitar alcances operativos independientes
3. **Escalabilidad Organizacional**: Permitir crecimiento ordenado de procesos
4. **Governance**: Establecer marcos de gobernanza específicos por área

## Patrones de Diseño

### Patrón de Dominio por Función
```yaml
Domain:
  id: [FuncionEspecifica]
  description: Dominio centrado en una capacidad organizacional específica
```

### Patrón de Dominio por Cliente
```yaml
Domain:
  id: [SegmentoCliente]
  description: Dominio orientado a un tipo específico de cliente o usuario
```

### Patrón de Dominio por Proceso
```yaml
Domain:
  id: [ProcesoNegocio]
  description: Dominio que encapsula un proceso de negocio completo
``` 