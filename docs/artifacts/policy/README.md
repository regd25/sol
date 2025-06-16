# Policy - Artefacto SOL

## Definición

**Policy** representa condiciones estructuradas en lenguaje natural que rigen el comportamiento del sistema. Su función es activar procesos, emitir alertas o validar estados, manteniendo una narrativa asociada.

## Taxonomía

| Campo | Tipo | Obligatorio | Descripción |
|-------|------|-------------|-------------|
| `id` | String | ✅ | Identificador único de la política |
| `premise` | String | ✅ | Descripción de la condición y acción en lenguaje natural |
| `vision` | String | ✅ | Referencia a la visión que justifica la política |
| `version` | String | ✅ | Versión de la política para control de cambios |
| `governance` | String | ✅ | Marco de gobernanza que valida la política |

## Extensiones

| Campo | Tipo | Descripción |
|-------|------|-------------|
| `weight` | Number | Peso o prioridad de la política en caso de conflictos |
| `category` | String | Clasificación de la política (operativa, estratégica, etc.) |
| `exceptions` | Array | Lista de excepciones o casos especiales |

## Estructura Base

```yaml
Policy:
  id: [IdentificadorUnico]
  premise: >
    Si [condición específica],
    entonces [acción o consecuencia].
  vision: [ReferenciaAVision]
  version: [X.Y]
  governance: [MarcoGobernanza]
```

## Ejemplos por Contexto Empresarial

### 🏠 Empresa Tradicional - Servicio de Limpieza

```yaml
Policy:
  id: EvaluacionPostServicio
  premise: >
    Si un servicio de limpieza se completa sin incidencias reportadas,
    entonces enviar encuesta de satisfacción al cliente dentro de 2 horas
    y programar seguimiento telefónico en 24 horas.
  vision: ExcelenciaEnLimpieza
  version: 1.2
  governance: ISO9001
  category: calidad
  weight: 8
```

```yaml
Policy:
  id: EscalacionIncidencias
  premise: >
    Si durante un servicio se detecta una incidencia que afecta la calidad,
    entonces suspender el servicio, notificar al supervisor inmediatamente
    y no facturar hasta resolver satisfactoriamente.
  vision: ExcelenciaEnLimpieza
  version: 1.0
  governance: PoliticaCalidad
  category: operativa
  weight: 10
```

```yaml
Policy:
  id: OptimizacionRutaDiaria
  premise: >
    Si la diferencia entre ruta planificada y ruta óptima supera 15% en tiempo,
    entonces recalcular automáticamente y notificar cambios a técnicos
    con al menos 30 minutos de anticipación.
  vision: OptimizacionRutas
  version: 2.0
  governance: SistemaLogistico
  category: operativa
  weight: 7
```

### 💻 Empresa Tech - Plataforma E-Learning

```yaml
Policy:
  id: RecomendacionPersonalizada
  premise: >
    Si un estudiante completa un curso con calificación superior a 85%,
    entonces generar recomendaciones de cursos relacionados basadas en
    su perfil de aprendizaje y tendencias de la industria.
  vision: PersonalizacionInteligente
  version: 3.1
  governance: AIEthicsBoard
  category: personalizacion
  weight: 6
```

```yaml
Policy:
  id: AprobacionCursoMarketplace
  premise: >
    Si un instructor submite un curso para el marketplace,
    entonces debe pasar revisión de calidad técnica y pedagógica
    antes de 5 días hábiles para ser publicado.
  vision: AprendizajeAccesible
  version: 1.4
  governance: ContentQualityBoard
  category: calidad
  weight: 9
```

```yaml
Policy:
  id: IntervencionRetencion
  premise: >
    Si un estudiante no accede a la plataforma por más de 7 días
    y tiene cursos en progreso menor al 50%,
    entonces activar secuencia automatizada de re-engagement
    con contenido personalizado.
  vision: AprendizajeAccesible
  version: 2.0
  governance: StudentSuccessTeam
  category: retencion
  weight: 5
```

### 🏪 Empresa Mediana - Sector Abarrotes

```yaml
Policy:
  id: AprobacionCreditoCliente
  premise: >
    Si un cliente solicita crédito y su score crediticio es mayor a 70
    y no tiene facturas vencidas por más de 30 días,
    entonces aprobar automáticamente línea de crédito hasta $50,000.
  vision: RelacionesComerciales
  version: 1.0
  governance: ComiteCredito
  category: credito
  weight: 8
  exceptions: [ClientesNuevos, ClientesEspeciales]
```

```yaml
Policy:
  id: ReabastecimientoAutomatico
  premise: >
    Si un producto tiene menos de 10 unidades en inventario
    y su rotación promedio es mayor a 5 unidades por semana,
    entonces generar orden de compra automática por cantidad
    equivalente a 4 semanas de inventario.
  vision: DistribucionEficiente
  version: 2.1
  governance: GerenciaInventario
  category: inventario
  weight: 7
```

```yaml
Policy:
  id: EscalacionCobranza
  premise: >
    Si una cuenta por cobrar supera 60 días de vencimiento
    y el monto es mayor a $10,000,
    entonces asignar a gestor de cobranza especializado
    e iniciar proceso de recuperación jurídica preventiva.
  vision: RelacionesComerciales
  version: 1.3
  governance: GerenciaFinanciera
  category: cobranza
  weight: 9
```

```yaml
Policy:
  id: OptimizacionEntregas
  premise: >
    Si una ruta de reparto supera 8 horas planificadas
    o incluye más de 15 paradas,
    entonces dividir automáticamente en dos rutas
    y reasignar segundo repartidor si está disponible.
  vision: DistribucionEficiente
  version: 1.5
  governance: GerenciaLogistica
  category: logistica
  weight: 6
```

```yaml
Policy:
  id: AlertaCaducidadProductos
  premise: >
    Si un producto está a 30 días de su fecha de caducidad
    y el inventario es mayor a 20% de la rotación mensual,
    entonces aplicar descuento progresivo del 15% y notificar
    a equipo comercial para promoción especial.
  vision: DistribucionEficiente
  version: 1.0
  governance: GerenciaComercial
  category: inventario
  weight: 8
```

## Mejores Prácticas

### ✅ Recomendaciones

1. **Estructura Clara**: Usar formato "Si... entonces..." para claridad
2. **Condiciones Específicas**: Evitar ambigüedades en las condiciones
3. **Acciones Concretas**: Definir acciones específicas y medibles
4. **Versionado**: Mantener control de cambios con versionado semántico

### ❌ Anti-patrones

1. **Políticas Vagas**: Condiciones o acciones ambiguas
2. **Conflictos No Resueltos**: Políticas que se contradicen entre sí
3. **Sobre-especificación**: Políticas demasiado detalladas que limitan flexibilidad
4. **Políticas Huérfanas**: Sin conexión clara a una visión estratégica

## Vínculos con Otros Artefactos

- **Vision**: Las políticas deben alinearse con la visión estratégica
- **Domain**: Las políticas operan dentro del contexto de dominios específicos
- **Process**: Los procesos pueden ser activados por políticas
- **Actor**: Los actores ejecutan las acciones definidas en las políticas
- **Observation**: Las observaciones pueden disparar evaluación de políticas
- **Signal**: Las políticas pueden generar señales como resultado
- **Authority**: Las autoridades validan y aprueban políticas

## Casos de Uso Comunes

1. **Automatización de Decisiones**: Codificar reglas de negocio para automatización
2. **Control de Calidad**: Establecer criterios y acciones de calidad
3. **Gestión de Excepciones**: Definir comportamientos ante situaciones especiales
4. **Cumplimiento Regulatorio**: Implementar requerimientos legales o normativos

## Patrones de Diseño

### Patrón Condicional Simple
```yaml
Policy:
  premise: >
    Si [condición única],
    entonces [acción única].
```

### Patrón Condicional Compuesto
```yaml
Policy:
  premise: >
    Si [condición A] y [condición B],
    entonces [acción principal] y [acción secundaria].
```

### Patrón de Escalación
```yaml
Policy:
  premise: >
    Si [condición] supera [umbral crítico],
    entonces [acción inmediata] y escalar a [autoridad superior].
```

### Patrón Temporal
```yaml
Policy:
  premise: >
    Si [condición] persiste por más de [tiempo específico],
    entonces [acción correctiva] dentro de [plazo determinado].
``` 