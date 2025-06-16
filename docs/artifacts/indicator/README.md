# Indicator - Artefacto SOL

## Definición

**Indicator** es una métrica formalizada que evalúa el desempeño del sistema o la efectividad de un dominio. Permite el aprendizaje reflexivo y la evolución del modelo.

## Taxonomía

| Campo | Tipo | Obligatorio | Descripción |
|-------|------|-------------|-------------|
| `id` | String | ✅ | Identificador único del indicador |
| `description` | String | ✅ | Descripción clara de qué mide el indicador |
| `measurement` | String | ✅ | Fórmula o método de cálculo del indicador |
| `unit` | String | ✅ | Unidad de medida del indicador |
| `goal` | Number | ✅ | Valor objetivo o meta del indicador |
| `domain` | String | ✅ | Dominio al que pertenece el indicador |

## Extensiones

| Campo | Tipo | Descripción |
|-------|------|-------------|
| `warning` | Number | Umbral de advertencia antes de alcanzar nivel crítico |
| `critical` | Number | Umbral crítico que requiere acción inmediata |
| `frequency` | String | Frecuencia de medición del indicador |

## Estructura Base

```yaml
Indicator:
  id: [IdentificadorUnico]
  description: [DescripcionQueSeEvalua]
  measurement: [FormulaOMetodoCalculo]
  unit: [UnidadMedida]
  goal: [ValorObjetivo]
  domain: [DominioPertenencia]
```

## Ejemplos por Contexto Empresarial

### 🏠 Empresa Tradicional - Servicio de Limpieza

```yaml
Indicator:
  id: IndiceCalidadServicio
  description: >
    Porcentaje de servicios completados que superan los 
    estándares mínimos de calidad establecidos
  measurement: (serviciosAprobados / serviciosTotales) * 100
  unit: "%"
  goal: 95
  domain: GestionCalidadServicio
  warning: 90
  critical: 85
  frequency: daily
```

```yaml
Indicator:
  id: TiempoPromedioTraslado
  description: >
    Tiempo promedio de traslado entre ubicaciones de servicio
    en rutas programadas
  measurement: sumaTimeposTraslado / numeroTraslados
  unit: "minutes"
  goal: 25
  domain: OptimizacionLogistica
  warning: 30
  critical: 35
  frequency: daily
```

```yaml
Indicator:
  id: SatisfaccionClientePromedio
  description: >
    Puntuación promedio de satisfacción del cliente 
    basada en encuestas post-servicio
  measurement: sumaCalificaciones / numeroEncuestas
  unit: "score"
  goal: 4.5
  domain: GestionCalidadServicio
  warning: 4.0
  critical: 3.5
  frequency: weekly
```

### 💻 Empresa Tech - Plataforma E-Learning

```yaml
Indicator:
  id: TasaCompletitudCursos
  description: >
    Porcentaje de estudiantes que completan exitosamente 
    los cursos en los que se inscriben
  measurement: (cursosCompletados / cursosIniciados) * 100
  unit: "%"
  goal: 75
  domain: ExperienciaAprendizaje
  warning: 65
  critical: 50
  frequency: weekly
```

```yaml
Indicator:
  id: PrecisionRecomendacionesIA
  description: >
    Porcentaje de recomendaciones de cursos que resultan 
    en inscripciones efectivas por parte de estudiantes
  measurement: (recomendacionesAceptadas / recomendacionesTotales) * 100
  unit: "%"
  goal: 35
  domain: ExperienciaAprendizaje
  warning: 25
  critical: 15
  frequency: daily
```

```yaml
Indicator:
  id: TiempoPromedioRevisionCursos
  description: >
    Tiempo promedio que toma la revisión y aprobación 
    de cursos sometidos al marketplace
  measurement: sumaTiemposRevision / numeroCursosRevisados
  unit: "hours"
  goal: 72
  domain: MarketplaceCursos
  warning: 96
  critical: 120
  frequency: weekly
```

```yaml
Indicator:
  id: IngresoPromedioInstructor
  description: >
    Ingreso mensual promedio generado por instructores 
    activos en la plataforma
  measurement: ingresosTotalesMes / instructoresActivos
  unit: "$"
  goal: 2500
  domain: MarketplaceCursos
  warning: 2000
  critical: 1500
  frequency: monthly
```

### 🏪 Empresa Mediana - Sector Abarrotes

```yaml
Indicator:
  id: PorcentajeEntregasAProgramadas
  description: >
    Porcentaje de entregas realizadas dentro de la 
    ventana de tiempo programada con el cliente
  measurement: (entregasPuntuales / entregasTotales) * 100
  unit: "%"
  goal: 92
  domain: GestionDistribucion
  warning: 85
  critical: 80
  frequency: daily
```

```yaml
Indicator:
  id: RotacionInventarioPromedio
  description: >
    Número de veces que el inventario completo se 
    vende y se repone en un período específico
  measurement: costoVentasPeriodo / inventarioPromedio
  unit: "rotations"
  goal: 12
  domain: ControlInventario
  warning: 10
  critical: 8
  frequency: monthly
```

```yaml
Indicator:
  id: CarteraVencidaPorcentaje
  description: >
    Porcentaje de cuentas por cobrar que superan 
    60 días de vencimiento
  measurement: (carteraVencida60Dias / carteraTotalActiva) * 100
  unit: "%"
  goal: 5
  domain: GestionCarteraCredito
  warning: 8
  critical: 12
  frequency: weekly
```

```yaml
Indicator:
  id: CostoPromedioPorEntrega
  description: >
    Costo operativo promedio para realizar una entrega 
    incluyendo combustible, personal y mantenimiento
  measurement: costoOperativoTotal / numeroEntregas
  unit: "$"
  goal: 25
  domain: GestionDistribucion
  warning: 30
  critical: 35
  frequency: weekly
```

```yaml
Indicator:
  id: TasaRecuperacionCartera
  description: >
    Porcentaje de cartera vencida que se recupera 
    exitosamente mediante gestión de cobranza
  measurement: (montoRecuperado / carteraVencidaInicial) * 100
  unit: "%"
  goal: 85
  domain: GestionCarteraCredito
  warning: 75
  critical: 65
  frequency: monthly
```

```yaml
Indicator:
  id: PorcentajeMermaProductos
  description: >
    Porcentaje de productos que se pierden por 
    caducidad, daños o deterioro
  measurement: (valorMermaTotal / valorInventarioTotal) * 100
  unit: "%"
  goal: 2
  domain: ControlInventario
  warning: 3
  critical: 5
  frequency: monthly
```

## Mejores Prácticas

### ✅ Recomendaciones

1. **Medición Clara**: Definir fórmulas específicas y reproducibles
2. **Objetivos Realistas**: Establecer metas alcanzables pero desafiantes
3. **Frecuencia Apropiada**: Medir con la frecuencia correcta para la toma de decisiones
4. **Umbrales de Alerta**: Definir niveles de warning y crítico para acción proactiva

### ❌ Anti-patrones

1. **Métricas de Vanidad**: Indicadores que no aportan insights accionables
2. **Sobremedicón**: Demasiados indicadores que causan parálisis por análisis
3. **Objetivos Imposibles**: Metas inalcanzables que desmotivan al equipo
4. **Indicadores Huérfanos**: Sin conexión clara con objetivos de negocio

## Vínculos con Otros Artefactos

- **Vision**: Los indicadores miden el progreso hacia las visiones estratégicas
- **Domain**: Los indicadores evalúan el desempeño de dominios específicos
- **Policy**: Las políticas pueden usar indicadores como triggers
- **Process**: Los indicadores miden la efectividad de los procesos
- **Concept**: Los indicadores pueden medir aspectos de conceptos clave
- **Observation**: Las observaciones alimentan el cálculo de indicadores

## Casos de Uso Comunes

1. **Performance Monitoring**: Seguimiento continuo del desempeño organizacional
2. **Decision Making**: Información cuantitativa para toma de decisiones
3. **Continuous Improvement**: Identificación de oportunidades de mejora
4. **Goal Tracking**: Monitoreo del progreso hacia objetivos estratégicos

## Tipos de Indicadores

### Indicadores de Eficiencia
Miden qué tan bien se utilizan los recursos
```yaml
measurement: output / input
unit: "ratio"
```

### Indicadores de Efectividad
Miden qué tan bien se logran los objetivos
```yaml
measurement: (resultadosLogrados / objetivosPlaneados) * 100
unit: "%"
```

### Indicadores de Calidad
Miden el nivel de excelencia del servicio/producto
```yaml
measurement: (elementosConformes / elementosEvaluados) * 100
unit: "%"
```

### Indicadores Financieros
Miden aspectos económicos y financieros
```yaml
measurement: ingresos - costos
unit: "$"
```

## Patrones de Umbrales

### Patrón Semáforo
```yaml
goal: 95        # Verde
warning: 85     # Amarillo
critical: 75    # Rojo
```

### Patrón de Tendencia
```yaml
measurement: (valorActual - valorAnterior) / valorAnterior * 100
unit: "% change"
```

### Patrón de Benchmark
```yaml
measurement: valorPropio / valorReferenciaMercado * 100
unit: "% vs benchmark"
``` 