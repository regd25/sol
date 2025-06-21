# Semantic Operations Language (SOL)

![SOL Banner](https://img.shields.io/badge/SOL-Semantic%20Operations%20Language-blue)
![Version](https://img.shields.io/badge/version-2.0.0-green)
![License](https://img.shields.io/badge/license-MIT-orange)

## 🎯 Introducción

**Semantic Operations Language (SOL)** es un lenguaje semántico de propósito organizacional diseñado para modelar de manera explícita la intención, las condiciones de operación y los mecanismos de evaluación de sistemas vivos —ya sean humanos, automatizados o híbridos.

A diferencia de lenguajes formales orientados exclusivamente a la ejecución, SOL prioriza la representación del significado operativo y contextual de un sistema, actuando como una capa intermedia entre la estrategia organizacional y la automatización técnica.

## 🧩 Artefactos Semánticos Fundamentales

SOL se basa en **bloques semánticos composables** que pueden usarse en la definición de cualquier artefacto:

### Bloques Base

| Bloque       | Propósito                                    | Aplicación                                |
| ------------ | -------------------------------------------- | ----------------------------------------- |
| **Intent**   | Voluntad o propósito declarado               | `declare`, `require`, `propose`, `prohibit` |
| **Context**  | Ámbito, condiciones o grupo de aplicación   | Cuándo, cómo o para quién aplica          |
| **Evaluation** | Cómo se mide o valida el cumplimiento     | Cuantitativa, cualitativa, automática     |
| **Authority** | Fuente, actor o norma que respalda         | Legitimidad y vigencia contextual         |

## 📊 Clasificación de Artefactos

### Artefactos Narrativos
**Describen significado, gobernanza o condiciones. Son estructurales y no ejecutables.**

| Artefacto     | Propósito                                   | Bloques Requeridos           |
| ------------- | ------------------------------------------- | ---------------------------- |
| **Vision**    | Declaración estratégica de largo plazo      | Intent, Context, Authority   |
| **Policy**    | Condición obligatoria o prohibitiva         | Intent, Context, Evaluation, Authority |
| **Concept**   | Define nociones semánticas centrales        | Intent, Context, Authority   |
| **Domain**    | Agrupador semántico de artefactos           | Intent, Context, Authority   |
| **Indicator** | Métrica formalizada de desempeño            | Intent, Context, Evaluation, Authority |

### Artefactos Operativos
**Tienen flujo, activación, ejecución o resultado. Incluyen secciones `flow`, `lifecycle` y `events`.**

| Artefacto     | Propósito                                   | Bloques + Operación          |
| ------------- | ------------------------------------------- | ---------------------------- |
| **Process**   | Secuencia operacional estructurada          | Intent, Context, Evaluation, Authority + Flow |
| **Protocol**  | Coreografía de interacción entre actores    | Intent, Context, Authority + Flow |
| **Signal**    | Evento observable que inicia acciones       | Intent, Context, Authority + Events |
| **Result**    | Estado final o decisión emergente           | Intent, Context, Evaluation, Authority + Lifecycle |
| **Observation** | Captura de eventos perceptuales (híbrido) | Intent, Context, Evaluation + Events |

### Artefactos de Soporte

| Artefacto     | Propósito                                   | Documentación                |
| ------------- | ------------------------------------------- | ---------------------------- |
| **Actor**     | Sujetos que ejecutan acciones               | [📖 Docs](docs/artifacts/actor/README.md) |
| **Authority** | Rol de validación y gobierno                | [📖 Docs](docs/artifacts/authority/README.md) |

### Artefactos Emergentes

| Artefacto     | Composición                                 | Uso                          |
| ------------- | ------------------------------------------- | ---------------------------- |
| **Commitment** | Vision + Evaluation                        | Promesa organizacional sostenida |
| **Principle** | Intent + Authority (sin Evaluation)        | Norma guía                   |
| **Guideline** | Intent (tipo propose) + Authority          | Recomendación flexible       |
| **Assumption** | Intent + Context (validable)              | Premisa válida en contexto   |

## 🚀 Características Principales

- **Composición Semántica**: Todos los artefactos se construyen con bloques fundamentales
- **Flexibilidad de Formato**: Expresable en YAML, texto plano, JSON-LD, RDF/Turtle
- **Integridad Estructural**: Mantiene coherencia semántica independiente del formato
- **Trazabilidad Estratégica**: Vincula cada artefacto a una visión organizacional
- **Análisis Reflexivo**: Permite evaluación continua del sistema
- **Activación Computacional**: Facilita la automatización de procesos complejos

## 📋 Artefactos SOL

SOL define 12 tipos de artefactos fundamentales:

| Artefacto       | Propósito                                   | Documentación                                  |
| --------------- | ------------------------------------------- | ---------------------------------------------- |
| **Vision**      | Delimita el propósito último de un dominio  | [📖 Docs](docs/artifacts/vision/README.md)      |
| **Concept**     | Define nociones semánticas centrales        | [📖 Docs](docs/artifacts/concept/README.md)     |
| **Domain**      | Agrupador semántico de artefactos           | [📖 Docs](docs/artifacts/domain/README.md)      |
| **Policy**      | Condiciones estructuradas de comportamiento | [📖 Docs](docs/artifacts/policy/README.md)      |
| **Process**     | Secuencia operacional estructurada          | [📖 Docs](docs/artifacts/process/README.md)     |
| **Actor**       | Sujetos que ejecutan acciones               | [📖 Docs](docs/artifacts/actor/README.md)       |
| **Indicator**   | Métrica formalizada de desempeño            | [📖 Docs](docs/artifacts/indicator/README.md)   |
| **Signal**      | Transmisión de información entre actores    | [📖 Docs](docs/artifacts/signal/README.md)      |
| **Observation** | Captura de eventos perceptuales             | [📖 Docs](docs/artifacts/observation/README.md) |
| **Result**      | Estado final o decisión emergente           | [📖 Docs](docs/artifacts/result/README.md)      |
| **Authority**   | Rol de validación y gobierno                | [📖 Docs](docs/artifacts/authority/README.md)   |
| **Protocol**    | Coreografía de interacción entre actores    | [📖 Docs](docs/artifacts/protocol/README.md)    |

## 🏢 Ejemplos de Implementación

### Contextos Empresariales

SOL ha sido probado en diferentes contextos organizacionales:

#### 🏠 [Empresa Tradicional - Servicio de Limpieza](docs/examples/traditional-business/)
- Gestión de rutas de servicio
- Control de calidad
- Asignación de personal

#### 💻 [Empresa Tech - Plataforma E-Learning](docs/examples/tech-business/)
- Marketplace de cursos
- Sistema de recomendaciones
- Gestión de usuarios y contenido

#### 🏪 [Empresa Mediana - Sector Abarrotes](docs/examples/medium-business/)
- Gestión de clientes y rutas de reparto
- Control de inventario
- Administración de cobranza

## 🚀 Inicio Rápido

### 1. Definir una Visión con Composición Semántica

```yaml
Vision:
  id: cultura-transparencia
  intent:
    statement: Fomentar una cultura de transparencia radical
    mode: declare
  context:
    scope: Toda la organización
    conditions:
      - comunicación abierta habilitada
      - canales de feedback activos
  authority:
    actor: Dirección General
    basedOn: Manifiesto Ético 2025
```

### 2. Crear una Política Compositiva

```yaml
Policy:
  id: acceso-externo
  intent:
    statement: Solo los usuarios autenticados pueden acceder
    mode: require
  context:
    scope: Usuarios externos
    conditions:
      - autenticación de dos factores activa
  evaluation:
    expected: acceso autorizado
    method: validación automática
  authority:
    actor: Seguridad Informática
    basedOn: Política de Accesos 2025
```

### 3. Establecer un Proceso Operativo

```yaml
Process:
  id: registro-usuario-externo
  intent:
    statement: Permitir el registro seguro de usuarios invitados
    mode: require
  context:
    scope: Usuarios externos invitados
    conditions:
      - invitación válida en los últimos 7 días
  evaluation:
    expected: cuenta creada y validada
    method: verificación con sistema de identidad
  authority:
    actor: Tecnología
    basedOn: Manual de Onboarding
  flow:
    steps:
      - name: Enviar invitación
        trigger: solicitud interna
      - name: Validar identidad
        trigger: enlace único
      - name: Crear cuenta
        trigger: datos completos
    lifecycle:
      states: [pendiente, en-progreso, completado, fallido]
```

## 📚 Documentación Completa

- **[Fundamentos Semánticos](docs/semantic-foundations.md)**: Bloques compositivos fundamentales
- **[Documentación de Artefactos](docs/artifacts/)**: 13 artefactos organizados por categorías
- **[Ejemplos Prácticos](docs/examples/)**: Implementaciones en contextos reales
- **[Mejores Prácticas](docs/best-practices.md)**: Recomendaciones de uso

## 🤝 Contribución

SOL es un proyecto en constante evolución. Las contribuciones son bienvenidas siguiendo estos principios:

1. **Coherencia Semántica**: Mantener la integridad narrativa
2. **Trazabilidad**: Vincular artefactos a su visión estratégica
3. **Simplicidad**: Empezar simple y refactorizar cuando sea necesario
4. **Documentación**: Todo cambio debe incluir ejemplos claros

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver [LICENSE](LICENSE) para más detalles.

---

**Versión:** 2.0.0 - Artefactos Semánticos Compositivos  
**¿Tienes preguntas?** Revisa la [documentación completa](docs/) o abre un [issue](https://github.com/tu-usuario/sol/issues) para discutir casos de uso específicos. 