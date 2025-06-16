# Concept - Artefacto SOL

## Definición

**Concept** define nociones semánticas centrales, como entidades, roles, eventos o artefactos operacionales. Permite reutilización transversal y reduce la ambigüedad léxica en la escritura de reglas, procesos e indicadores.

## Taxonomía

| Campo | Tipo | Obligatorio | Descripción |
|-------|------|-------------|-------------|
| `id` | String | ✅ | Identificador único del concepto |
| `description` | String | ✅ | Definición clara y precisa del concepto |

## Extensiones

| Campo | Tipo | Descripción |
|-------|------|-------------|
| `usedIn` | Array | Lista de artefactos que utilizan este concepto |
| `tags` | Array | Etiquetas para clasificación y búsqueda |
| `vision` | String | Referencia a la visión que justifica el concepto |
| `linkedPolicies` | Array | Políticas relacionadas con el concepto |
| `linkedProcesses` | Array | Procesos que involucran el concepto |
| `relatedIndicators` | Array | Indicadores que miden aspectos del concepto |

## Estructura Base

```yaml
Concept:
  id: [IdentificadorUnico]
  description: [Definición clara y precisa del concepto semántico]
```

## Ejemplos por Contexto Empresarial

### 🏠 Empresa Tradicional - Servicio de Limpieza

```yaml
Concept:
  id: ServicioLimpieza
  description: >
    Actividad profesional que comprende la limpieza, organización 
    y mantenimiento de espacios residenciales o comerciales, 
    incluyendo el uso de equipos especializados y productos 
    de limpieza apropiados.
  tags: [servicio, limpieza, mantenimiento]
  usedIn: [Policy:EvaluacionCalidad, Process:EjecucionServicio]
```

```yaml
Concept:
  id: RutaOptima
  description: >
    Secuencia de ubicaciones geográficas ordenada para minimizar 
    tiempo de traslado y maximizar eficiencia operativa, 
    considerando factores como tráfico, distancia y 
    disponibilidad de personal.
  tags: [logistica, optimizacion, eficiencia]
  usedIn: [Process:PlanificacionRutas, Indicator:TiempoTraslado]
```

```yaml
Concept:
  id: TecnicoLimpieza
  description: >
    Profesional capacitado en técnicas de limpieza especializada, 
    manejo de equipos y productos químicos, con certificaciones 
    en seguridad laboral y atención al cliente.
  tags: [personal, tecnico, capacitacion]
  usedIn: [Actor:TecnicoAsignado, Policy:RequisitosCertificacion]
```

### 💻 Empresa Tech - Plataforma E-Learning

```yaml
Concept:
  id: Curso
  description: >
    Programa educativo estructurado compuesto por módulos, 
    lecciones, evaluaciones y recursos multimedia, diseñado 
    para transmitir conocimientos específicos en un área temática.
  tags: [educacion, contenido, programa]
  usedIn: [Process:CreacionCurso, Policy:CriteriosCalidad]
```

```yaml
Concept:
  id: Instructor
  description: >
    Experto en materia específica con habilidades pedagógicas 
    y técnicas, responsable de crear, mantener y facilitar 
    cursos en la plataforma, con perfil verificado y reputación.
  tags: [educador, experto, facilitador]
  usedIn: [Actor:InstructorVerificado, Indicator:SatisfaccionInstructor]
```

```yaml
Concept:
  id: Estudiante
  description: >
    Usuario de la plataforma que participa activamente en 
    cursos, realiza evaluaciones, interactúa con instructores 
    y otros estudiantes, con progreso trackeable y certificable.
  tags: [usuario, aprendiz, participante]
  usedIn: [Actor:EstudianteActivo, Process:SeguimientoProgreso]
```

```yaml
Concept:
  id: RecomendacionIA
  description: >
    Sugerencia personalizada generada por algoritmos de 
    inteligencia artificial basada en perfil de aprendizaje, 
    historial de cursos, preferencias y objetivos del estudiante.
  tags: [ai, personalizacion, recomendacion]
  usedIn: [Process:GenerarRecomendaciones, Indicator:TasaAceptacion]
```

### 🏪 Empresa Mediana - Sector Abarrotes

```yaml
Concept:
  id: Cliente
  description: >
    Establecimiento comercial que adquiere productos abarrotes 
    para reventa, con historial crediticio, ubicación geográfica 
    específica y patrón de compra establecido.
  tags: [comercio, cliente, credito]
  usedIn: [Actor:ClienteActivo, Policy:AprobacionCredito]
```

```yaml
Concept:
  id: ProductoAbarrote
  description: >
    Mercancía de consumo básico con características específicas 
    como código, categoría, precio, fechas de caducidad, 
    proveedor y nivel de inventario mínimo requerido.
  tags: [producto, inventario, consumo]
  usedIn: [Process:ControlInventario, Indicator:RotacionProducto]
```

```yaml
Concept:
  id: RutaReparto
  description: >
    Circuito geográfico asignado a un repartidor que incluye 
    secuencia de clientes, horarios de entrega, capacidad 
    de carga y restricciones de acceso vehicular.
  tags: [logistica, reparto, geografia]
  usedIn: [Process:PlanificacionRutas, Actor:RepartidorAsignado]
```

```yaml
Concept:
  id: GestorCobranza
  description: >
    Profesional especializado en recuperación de cartera, 
    con habilidades de negociación, conocimiento legal 
    y herramientas de seguimiento de cobranza.
  tags: [cobranza, negociacion, cartera]
  usedIn: [Actor:GestorAsignado, Process:RecuperacionCartera]
```

```yaml
Concept:
  id: CuentaPorCobrar
  description: >
    Obligación financiera pendiente de un cliente derivada 
    de ventas a crédito, con fecha de vencimiento, monto, 
    historial de pagos y estatus de cobranza.
  tags: [credito, cobranza, finanzas]
  usedIn: [Indicator:CarteraVencida, Policy:EscalacionCobranza]
```

## Mejores Prácticas

### ✅ Recomendaciones

1. **Precisión Semántica**: Definir conceptos de manera inequívoca y clara
2. **Reutilización**: Crear conceptos que puedan usarse en múltiples artefactos
3. **Consistencia**: Mantener coherencia terminológica en todo el dominio
4. **Granularidad Apropiada**: Ni muy genérico ni demasiado específico

### ❌ Anti-patrones

1. **Conceptos Ambiguos**: Definiciones que pueden interpretarse múltiplemente
2. **Redundancia**: Crear conceptos similares con nombres diferentes
3. **Complejidad Innecesaria**: Definiciones excesivamente técnicas o complejas
4. **Desuso**: Conceptos definidos pero nunca utilizados en otros artefactos

## Vínculos con Otros Artefactos

- **Vision**: Los conceptos deben alinearse con el propósito estratégico
- **Domain**: Los conceptos pertenecen y dan coherencia a dominios específicos
- **Policy**: Las políticas utilizan conceptos para expresar condiciones
- **Process**: Los procesos operan sobre los conceptos definidos
- **Actor**: Los actores interactúan con o representan conceptos
- **Indicator**: Los indicadores miden aspectos de los conceptos

## Casos de Uso Comunes

1. **Estandarización de Terminología**: Unificar vocabulario organizacional
2. **Definición de Entidades de Negocio**: Modelar elementos centrales del dominio
3. **Reducción de Ambigüedad**: Clarificar significados en comunicaciones
4. **Base para Automatización**: Proveer definiciones para sistemas técnicos 