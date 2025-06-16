Introducción

El Semantic Operations Language (SOL) es un lenguaje semántico de propósito organizacional, concebido para modelar de manera explícita la intención, las condiciones de operación, y los mecanismos de evaluación de sistemas vivos —ya sean humanos, automatizados o híbridos. A diferencia de lenguajes formales orientados exclusivamente a la ejecución, SOL prioriza la representación del significado operativo y contextual de un sistema, actuando como una capa intermedia entre la estrategia organizacional y la automatización técnica.

SOL puede expresarse en múltiples formatos —YAML, texto plano, JSON-LD, RDF/Turtle, entre otros— sin perder su integridad estructural, ya que su esencia radica en la articulación semántica de sus artefactos. Cada artefacto constituye una unidad de modelado vinculada a una visión estratégica compartida, y permite tanto el análisis reflexivo como la activación computacional de procesos complejos.

## Metodología de Definición Contextual

### 1\. Vision

Delimita el propósito último de un dominio. Representa la justificación estratégica que da origen a los artefactos definidos en un sistema. Sirve como ancla semántica para la trazabilidad de reglas, indicadores y decisiones.

**Taxonomía:** `id`, `content`, `author`, `date` **Extensiones:** `language`, `tags`

Vision:

  id: DetectarRiesgoEmocional

  content: \>

    Detectar a tiempo a los usuarios en situación de crisis para activar intervención humana especializada.

  author: EquipoClinico

  date: 2025-05-15

---

### 2\. Concept

Define nociones semánticas centrales, como entidades, roles, eventos o artefactos operacionales. Permite reutilización transversal y reduce la ambigüedad léxica en la escritura de reglas, procesos e indicadores.

**Taxonomía:** `id`, `description` **Extensiones:** `usedIn`, `tags`, `vision`, `linkedPolicies`, `linkedProcesses`, `relatedIndicators`

Concept:

  id: Producto

  description: Entidad comercializable con atributos como nombre, categoría, inventario y precio unitario.

---

### 3\. Domain

Agrupador semántico de artefactos orientados a una misma visión. Delimita el alcance contextual donde se definen y operan políticas, procesos e indicadores coherentes entre sí.

**Taxonomía:** `id`, `description`, `vision`, `policies`, `processes`, `indicators` **Extensiones:** `timeScope`, `audience`, `governance`

Domain:

  id: IngresoApoyoEmocional

  description: Evaluación automatizada del estado emocional de usuarios nuevos para determinar rutas de atención.

  vision: DetectarRiesgoEmocional

---

### 4\. Policy

Representa condiciones estructuradas en lenguaje natural que rigen el comportamiento del sistema. Su función es activar procesos, emitir alertas o validar estados, manteniendo una narrativa asociada.

**Taxonomía:** `id`, `premise`, `vision`, `version`, `governance` **Extensiones:** `weight`, `category`, `exceptions`

Policy:

  id: StockBajo

  premise: \>

    Si un Producto tiene menos de 5 unidades en inventario,

    entonces emitir señal de reabastecimiento urgente.

  vision: GestionarStockEficiente

  version: 1.0

---

### 5\. Process

Secuencia operacional estructurada para ejecutar una lógica bajo ciertas condiciones. Define pasos, actores y vínculos con reglas relevantes.

**Taxonomía:** `id`, `steps`, `vision`, `actors` **Extensiones:** `errorPaths`, `alternatePaths`, `timeLimits`

Process:

  id: IngresoDeMercancia

  steps:

    \- Actor:Almacenista → RegistrarRecepcion

    \- System:ERP → ActualizarInventario

    \- Policy:StockBajo → EvaluarReposicion

---

### 6\. Actor

Identifica sujetos —humanos o artificiales— que ejecutan acciones dentro de un proceso. Permite declarar capacidades operativas, versiones y límites de contexto.

**Taxonomía:** `id`, `type`, `capabilities`, `domain` **Extensiones:** `skills`, `version`, `owner`

Actor:

  id: IAChatbot

  type: aiModel

  capabilities: \[evaluarPolicies, emitirObservaciones, escalarCasos\]

  domain: IngresoApoyoEmocional

---

### 7\. Indicator

Métrica formalizada que evalúa el desempeño del sistema o la efectividad de un dominio. Permite el aprendizaje reflexivo y la evolución del modelo.

**Taxonomía:** `id`, `description`, `measurement`, `unit`, `goal`, `domain` **Extensiones:** `warning`, `critical`, `frequency`

Indicator:

  id: RotacionInventario

  description: Porcentaje de productos vendidos antes de requerir reabastecimiento.

  measurement: (productosVendidos / productosTotales) \* 100

  unit: "%"

  goal: 85

  domain: GestionInventario

---

### 8\. Signal

Artefacto que transmite información entre actores o procesos como consecuencia de una observación o condición cumplida. Facilita reacciones asincrónicas.

**Taxonomía:** `id`, `sentBy`, `sentTo`, `basedOn`, `channel`, `type`, `timestamp` **Extensiones:** `priority`, `ackRequired`, `ttl`

Signal:

  id: AlertaEmocionalAlta

  sentBy: Actor:IAChatbot

  sentTo: Authority:PsicologoTurno

  basedOn: Observation:NivelEmocionalAlto

  channel: sms

  type: AlertaCritica

  timestamp: 2025-05-28T02:31:00Z

---

### 9\. Observation

Captura un evento perceptual generado por un actor sensor (humano, lógico o físico). Puede ser utilizado como disparador de políticas o señales.

**Taxonomía:** `id`, `observedBy`, `value`, `unit`, `timestamp`, `domain` **Extensiones:** `confidence`, `tags`

Observation:

  id: TemperaturaAlta

  observedBy: Sensor:TempSensor01

  value: 260

  unit: "°C"

  timestamp: 2025-05-28T14:10:45Z

  domain: ControlTemperatura

---

### 10\. Result

Representa el estado final o la decisión emergente de un proceso ejecutado. Puede escalar nuevos contextos o cerrar una lógica de ejecución.

**Taxonomía:** `id`, `outcome`, `issuedBy`, `reason`, `timestamp` **Extensiones:** `severity`, `nextDomain`, `tags`

Result:

  id: RequiereIntervencionHumana

  outcome: EscalarAPsicologo

  issuedBy: Actor:IAChatbot

  reason: Observation:NivelEmocionalAlto

  timestamp: 2025-05-28T08:47:00Z

---

### 11\. Authority

Rol de validación y gobierno que aprueba, rechaza o inmoviliza ciertas políticas dentro de un dominio o proceso.

**Taxonomía:** `id`, `role`, `approves`, `scope` **Extensiones:** `delegates`, `escalationMatrix`

Authority:

  id: JefeCalidad

  role: auditor

  approves: \[Policy:CriteriosMinimosEntrega\]

  scope: ValidacionEntregaFinal

---

### 12\. Protocol

Define una coreografía de interacción entre actores en el tiempo. Formaliza turnos, respuestas esperadas y condiciones de corte o desvío.

**Taxonomía:** `id`, `description`, `steps` **Extensiones:** `timeout`, `fallback`, `version`

Protocol:

  id: IntervencionEmocional

  description: Secuencia de atención progresiva entre IA y psicólogo humano.

  steps:

    \- IAChatbot: saludoEmpatico

    \- IAChatbot: evaluacionInicial

    \- PsicologoHumano: intervencionManual si RiesgoAlto

---

