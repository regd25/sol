# 📋 Artefactos SOL - Templates Implementados v0.0.3-dev

Esta documentación refleja los **20 artefactos SOL** que tienen templates completamente implementados en la carpeta `/docs/templates/`.

## 🧠 Arquitectura Semántica SOL

SOL está organizado en **bloques fundacionales reutilizables** y **artefactos especializados** que implementan el principio DRY (Don't Repeat Yourself) mediante composición explícita.

### 🧱 Bloques Fundacionales (4 Templates)

Estos son los bloques semánticos reutilizables que eliminan duplicación:

| Bloque | Template | Propósito | Reutilizado Por |
|--------|----------|-----------|-----------------|
| **Intent** | [📄 intent-template.sop](../templates/intent-template.sop) | Propósito y motivación | Vision, Policy, Process, Principle |
| **Context** | [📄 context-template.sop](../templates/context-template.sop) | Contexto operacional | Vision, Policy, Process, Procedure |
| **Authority** | [📄 authority-template.sop](../templates/authority-template.sop) | Autoridad y legitimidad | Vision, Policy, Process, Actor |
| **Evaluation** | [📄 evaluation-template.sop](../templates/evaluation-template.sop) | Criterios de éxito | Vision, Policy, Indicator, Process |

### 🏗️ Artefactos Estratégicos y Normativos (6 Templates)

**Definen significado, gobernanza y condiciones estructurales.**

| Artefacto | Template | Composición | Propósito |
|-----------|----------|-------------|-----------|
| **Vision** | [📄 vision-template.sop](../templates/vision-template.sop) | Intent + Context + Authority + Evaluation | Declaración estratégica de largo plazo |
| **Policy** | [📄 policy-template.sop](../templates/policy-template.sop) | Intent + Context + Authority + Evaluation | Reglas obligatorias o prohibitivas |
| **Concept** | [📄 concept-template.sop](../templates/concept-template.sop) | Intent + Context + Authority | Definiciones semánticas fundamentales |
| **Principle** | [📄 principle-template.sop](../templates/principle-template.sop) | Intent + Authority | Normas guía sin evaluación cuantitativa |
| **Guideline** | [📄 guideline-template.sop](../templates/guideline-template.sop) | Intent + Authority | Recomendaciones flexibles |
| **Indicator** | [📄 indicator-template.sop](../templates/indicator-template.sop) | Intent + Context + Authority + Evaluation | Métricas y KPIs de desempeño |

### ⚡ Artefactos Operativos (5 Templates)

**Incluyen flujo, activación, ejecución y manejo de eventos.**

| Artefacto | Template | Características | Propósito |
|-----------|----------|-----------------|-----------|
| **Process** | [📄 process-template.sop](../templates/process-template.sop) | Composición + Flow + Actor→acción | Secuencia operacional estructurada |
| **Procedure** | [📄 procedure-template.sop](../templates/procedure-template.sop) | Composición + Flow detallado | Coreografía detallada de actividades |
| **Event** | [📄 event-template.sop](../templates/event-template.sop) | Composición + Triggers + Subscribers | Sucesos observables que inician acciones |
| **Observation** | [📄 observation-template.sop](../templates/observation-template.sop) | Composición + Events + Data capture | Captura de eventos perceptuales |
| **Result** | [📄 result-template.sop](../templates/result-template.sop) | Composición + Lifecycle + Outcomes | Estados finales o decisiones emergentes |

### 🏢 Artefactos Organizacionales (2 Templates)

**Definen estructura, roles y dominios organizacionales.**

| Artefacto | Template | Características | Propósito |
|-----------|----------|-----------------|-----------|
| **Actor** | [📄 actor-template.sop](../templates/actor-template.sop) | Composición + Responsibilities + Capabilities | Sujetos que ejecutan acciones |
| **Area** | [📄 area-template.sop](../templates/area-template.sop) | Composición + Hierarchy + Cross-area comms | Dominios organizacionales y agrupaciones |

### 📚 Documentación y Guías (3 Archivos)

| Documento | Propósito | Contenido |
|-----------|-----------|-----------|
| [📄 SEMANTIC_REFERENCE_RULES.md](../templates/SEMANTIC_REFERENCE_RULES.md) | Reglas anti-alucinación para AI/LLM | Notación correcta, composición vs duplicación |
| [📄 USAGE_GUIDE.md](../templates/USAGE_GUIDE.md) | Guía de uso de templates | Cómo usar templates, mejores prácticas |
| [📄 README.md](../templates/README.md) | Documentación completa | Overview arquitectura y templates v0.0.3-dev |

## 🚀 Principios de Arquitectura v0.0.3-dev

### 1. **Composición Explícita (No Duplicación)**
```yaml
# ✅ CORRECTO - Composición v0.0.3-dev
Vision:
  uses:                                    # Reutiliza artefactos independientes
    intent: Intent.TransformacionDigital
    context: Context.MercadoLatam
    authority: Authority.ConsejoDirectivo
  
  aspirationalStatement: >                 # Solo contenido específico de Vision
    "Ser el catalizador principal..."

# ❌ INCORRECTO - Duplicación versiones anteriores
Vision:
  intent:                                  # Duplicado en 18+ artefactos
    statement: "..."
    mode: declare
  context:                                 # Duplicado en 18+ artefactos  
    scope: "..."
```

### 2. **Referencias Semánticas (No Strings Genéricos)**
```yaml
# ✅ CORRECTO - Referencias semánticas
actor: Actor:ConsejoDirectivo
area: Area:Tecnologia.Desarrollo  
measuredBy: Indicator:ParticipacionMercado

# ❌ INCORRECTO - Strings genéricos
actor: "[ResponsibleActorId]"
area: "[OrganizationalArea]"
```

### 3. **Flujos Semánticos Actor → Acción**
```yaml
# ✅ CORRECTO - Semántica Actor → Acción
flow:
  steps:
         - step: 1
       actor: Actor:GerenteRRHH → "Crear expediente digital"
       inputs: [Actor:RecrutadorSenior → "Datos verificados"]
       outputs: [Actor:AdministradorSistemas ← "Expediente creado"]

# ❌ INCORRECTO - Sin semántica
steps:
  - step: 1
    description: "Crear expediente"         # No indica quién
    owner: "[ActorId]"                      # String genérico
```

### 4. **Jerarquía Organizacional Respetada**
```yaml
# ✅ Comunicación permitida
Process.Desarrollo.CodeReview → Actor:TechLead         # Mismo contexto
Process.Desarrollo.Arquitectura → Vision.Liderazgo     # Contexto superior
Event.SolicitudSoporte ← Area.Ventas                   # Cross-área VÍA Events

# ❌ Comunicación prohibida
Process.Desarrollo.Deploy → Process.Ventas.FollowUp    # Cross-área directa
Vision.Corporativa → Process.Desarrollo.UnitTests      # Referencias descendentes
```

## 📊 Estado de Implementación

### ✅ Templates Completamente Implementados (20)

| Categoría | Cantidad | Templates |
|-----------|----------|-----------|
| 🧠 **Fundacionales** | 4 | Intent, Context, Authority, Evaluation |
| 🏗️ **Estratégicos** | 6 | Vision, Policy, Concept, Principle, Guideline, Indicator |
| ⚡ **Operativos** | 5 | Process, Procedure, Event, Observation, Result |
| 🏢 **Organizacionales** | 2 | Actor, Area |
| 📚 **Documentación** | 3 | Reglas semánticas, Guía de uso, README |

### 🔄 Características v0.0.3-dev Implementadas

- ✅ **Composición explícita** (elimina duplicación DRY)
- ✅ **Artefactos fundacionales independientes** 
- ✅ **Referencias semánticas** (`Actor:Name`, no strings)
- ✅ **Reglas anti-alucinación** para AI/LLM
- ✅ **Jerarquía organizacional** clara
- ✅ **Flujos semánticos** `Actor → acción`
- ✅ **Validación automática** de estructura

## 🚀 Cómo Usar los Templates

### 1. **Crear Artefactos Fundacionales Primero**
```bash
# Orden obligatorio - crear fundacionales primero
1. Intent.MiPropositoEstrategico
2. Context.MiContextoOperacional  
3. Authority.MiAutoridadRelevante
4. Evaluation.MiCriteriosExito
```

### 2. **Crear Artefacto Principal con Composición**
```yaml
Vision.MiVisionEstrategica:
  uses:                                    # Composición explícita
    intent: Intent.MiPropositoEstrategico    # Debe existir
    context: Context.MiContextoOperacional   # Debe existir
    authority: Authority.MiAutoridadRelevante # Debe existir
    evaluation: Evaluation.MiCriteriosExito  # Debe existir
```

### 3. **Validar Referencias Semánticas**
```bash
# Verificar que todas las referencias existen
✅ Actor:ConsejoDirectivo        # Debe existir como artefacto
✅ Area.Tecnologia.Desarrollo    # Jerarquía debe ser válida
✅ Process.Onboarding.Setup      # Referencia debe ser exacta
```

## ✅ Checklist de Validación

### **Antes de Crear Cualquier Artefacto:**
- [ ] **Artefactos fundacionales existen** (Intent, Context, Authority, Evaluation)
- [ ] **Referencias usan notación correcta** (`Actor:Name`, no strings)
- [ ] **Jerarquía organizacional respetada** (no cross-área directas)
- [ ] **Principio DRY cumplido** (sin duplicar bloques fundacionales)
- [ ] **Flujos usan semántica** (`Actor → acción`)

### **Validaciones Automáticas Disponibles:**
```bash
# Estas validaciones están implementadas en la extensión VSCode
sol validate --semantic-references    # Referencias existen
sol validate --dry-compliance        # Sin duplicación  
sol validate --hierarchy-rules       # Jerarquía respetada
sol validate --flow-semantics       # Flujos semánticos
```

## 🔗 Referencias Útiles

- **[Templates SOL v0.0.3-dev](../templates/)**: Directorio completo de templates
- **[VS Code Extension](../../extension/)**: Herramientas de validación y formato
- **[Ejemplos Prácticos](../examples/)**: Implementaciones en contextos reales
- **[Schema JSON](../../extension/schemas/sol-schema.json)**: Validación estructural

---

**Versión Template:** v2025.07  
**Build del Proyecto:** v0.0.3-dev  
**Última actualización:** Enero 2025  
**Estado:** Development Build - Solo para desarrolladores 