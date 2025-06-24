# 🎯 SOL Templates v0.1.0 - Composición y Anti-Alucinaciones

## 🚀 **NUEVA ARQUITECTURA DE TEMPLATES**

Esta carpeta contiene los **templates completamente refactorizados** que implementan:
- ✅ **Composición explícita** (elimina duplicación DRY)
- ✅ **Artefactos fundacionales independientes** 
- ✅ **Referencias semánticas** (Actor.Name, no strings)
- ✅ **Reglas anti-alucinación** para AI/LLM
- ✅ **Jerarquía organizacional** clara

---

## 📚 **ARTEFACTOS FUNDACIONALES INDEPENDIENTES**

### 🧠 **Base Reutilizable (DRY)**
- **[intent-template.sol](./intent-template.sol)** - Propósito y motivación
- **[context-template.sol](./context-template.sol)** - Contexto operacional  
- **[authority-template.sol](./authority-template.sol)** - Autoridad y legitimidad
- **[evaluation-template.sol](./evaluation-template.sol)** - Criterios de éxito

### 🏗️ **Artefactos Principales (Composición)**
- **[vision-template.sol](./vision-template.sol)** - Declaraciones estratégicas
- **[policy-template.sol](./policy-template.sol)** - Reglas obligatorias
- **[concept-template.sol](./concept-template.sol)** - Definiciones organizacionales
- **[process-template.sol](./process-template.sol)** - Flujos operacionales
- **[indicator-template.sol](./indicator-template.sol)** - Métricas y KPIs

---

## 🧠 **REGLAS SEMÁNTICAS CRÍTICAS**

### 📖 **Documentación Anti-Alucinación**
- **[SEMANTIC_REFERENCE_RULES.md](./SEMANTIC_REFERENCE_RULES.md)** - Reglas semánticas completas

### 🔑 **Notación Correcta**
```yaml
# ✅ CORRECTO - Referencias semánticas
actor: Actor.ConsejoDirectivo
area: Area.Tecnologia.Desarrollo  
measuredBy: Indicator.ParticipacionMercado

# ❌ INCORRECTO - Strings genéricos
actor: "[ResponsibleActorId]"
area: "[OrganizationalArea]"
```

### 🏗️ **Composición vs Duplicación**
```yaml
# ✅ NUEVO - Composición explícita (v2.0)
Vision:
  uses:                                 # Reutiliza artefactos independientes
    intent: Intent.TransformacionDigital
    context: Context.MercadoLatam
    authority: Authority.ConsejoDirectivo
  
  aspirationalStatement: >              # Solo contenido específico
    "Ser el catalizador principal..."

# ❌ VIEJO - Duplicación masiva (v1.0)
Vision:
  intent:                               # Duplicado en 18+ artefactos
    statement: "..."
    mode: declare
  context:                              # Duplicado en 18+ artefactos  
    scope: "..."
```

---

## 🌊 **FLUJOS SEMÁNTICOS (PROCESOS)**

### **Actor → Acción Notation**
```yaml
# ✅ CORRECTO - Semántica Actor → Acción
flow:
  steps:
    - step: 1
      actor: Actor.GerenteRRHH → "Crear expediente digital"
      inputs: [Actor.RecrutadorSenior → "Datos verificados"]
      outputs: [Actor.AdministradorSistemas ← "Expediente creado"]

# ❌ INCORRECTO - Sin semántica
steps:
  - step: 1
    description: "Crear expediente"      # No indica quién
    owner: "[ActorId]"                   # String genérico
```

---

## 🏢 **JERARQUÍA ORGANIZACIONAL**

### **Comunicación Permitida**
```yaml
# ✅ Mismo contexto (Tecnología → Tecnología)
Process.Desarrollo.CodeReview → Actor.TechLead

# ✅ Contexto superior (Tecnología → Empresa)  
Process.Desarrollo.Arquitectura → Vision.LiderazgoTecnologico

# ✅ Cross-área VÍA Events (Tecnología ↔ Ventas)
Event.SolicitudSoporteTecnico ← Area.Ventas
Event.SoporteTecnicoResuelto → Area.Ventas
```

### **Comunicación Prohibida**
```yaml
# ❌ Cross-área directa
Process.Desarrollo.Deploy → Process.Ventas.FollowUp

# ❌ Referencias descendentes directas
Vision.Corporativa → Process.Desarrollo.UnitTests
```

---

## 🚀 **CÓMO USAR TEMPLATES v2.0**

### **1. Crear Artefactos Fundacionales Primero** 
```bash
# Orden obligatorio - crear fundacionales primero
1. Intent.MiPropositoEstrategico
2. Context.MiContextoOperacional  
3. Authority.MiAutoridadRelevante
4. Evaluation.MiCriteriosExito
```

### **2. Crear Artefacto Principal con Composición**
```yaml
Vision.MiVisionEstrategica:
  uses:                                 # Composición explícita
    intent: Intent.MiPropositoEstrategico    # Debe existir
    context: Context.MiContextoOperacional   # Debe existir
    authority: Authority.MiAutoridadRelevante # Debe existir
    evaluation: Evaluation.MiCriteriosExito  # Debe existir
```

### **3. Validar Referencias Semánticas**
```bash
# Verificar que todas las referencias existen
✅ Actor.ConsejoDirectivo        # Debe existir como artefacto
✅ Area.Tecnologia.Desarrollo    # Jerarquía debe ser válida
✅ Process.Onboarding.Setup      # Referencia debe ser exacta
```

---

## 📋 **PLANTILLAS DISPONIBLES**

### **🧠 Fundacionales (Base Reutilizable)**

| Template | Propósito | Reutilizado Por | Ejemplo |
|----------|-----------|-----------------|---------|
| `intent-template.sol` | Propósito/motivación | Vision, Policy, Process | Intent.TransformacionDigital |
| `context-template.sol` | Contexto operacional | Vision, Process, Policy | Context.MercadoLatam |
| `authority-template.sol` | Autoridad/legitimidad | Vision, Policy, Process | Authority.ConsejoDirectivo |
| `evaluation-template.sol` | Criterios de éxito | Vision, Policy, Process | Evaluation.IndicadoresKPI |

### **🏗️ Principales (Usan Composición)**

| Template | Tipo | Composición Requerida | Status | Ejemplo de Caso |
|----------|------|----------------------|--------|-----------------|
| `vision-template.sol` | Estratégico | Intent + Context + Authority | ✅ | "Liderazgo tecnológico sustentable" |
| `process-template.sol` | Operacional | Intent + Context + Authority | ✅ | "Onboarding empleados" |
| `policy-template.sol` | Normativo | Intent + Context + Authority | 🔄 | "Política seguridad datos" |
| `concept-template.sol` | Organizacional | Intent + Context + Authority | 🔄 | "Cliente", "Producto", "Servicio" |
| `indicator-template.sol` | Control | Intent + Context + Authority | 🔄 | "Tasa conversión mensual" |

### **📋 Operacionales Completados**

| Template | Tipo | Status | Descripción |
|----------|------|--------|-------------|
| `actor-template.sol` | Organizacional | ✅ | Roles y responsabilidades |
| `observation-template.sol` | Monitoreo | ✅ | Puntos de observación operacional |
| `result-template.sol` | Resultados | ✅ | Productos de procesos |
| `guideline-template.sol` | Normativo | ✅ | Directrices operacionales |
| `principle-template.sol` | Estratégico | ✅ | Principios fundamentales |
| `procedure-template.sol` | Operacional | ✅ | Procedimientos detallados |

---

## ✅ **CHECKLIST OBLIGATORIO**

### **Antes de Crear Cualquier Artefacto:**
- [ ] **Artefactos fundacionales existen** (Intent, Context, Authority, Evaluation)
- [ ] **Referencias usan notación correcta** (`Actor.Name`, no strings)
- [ ] **Jerarquía organizacional respetada** (no cross-área directas)
- [ ] **Principio DRY cumplido** (sin duplicar bloques fundacionales)
- [ ] **Flujos usan semántica** (`Actor → acción`)

### **Validaciones Automáticas:**
```bash
sol validate --semantic-references    # Referencias existen
sol validate --dry-compliance        # Sin duplicación  
sol validate --hierarchy-rules       # Jerarquía respetada
sol validate --flow-semantics       # Flujos semánticos
```

---



### **Paso 2: Convertir a Composición**
```yaml
# v2.0 (NUEVO) - Composición
Vision:
  uses:
    intent: Intent:TransformacionDigital  # Referencia al artefacto independiente
```

### **Paso 3: Corregir Referencias**
```yaml
# v1.0 (VIEJO) - String genérico
authority:
  actor: "[ResponsibleActorId]"

# v2.0 (NUEVO) - Referencia semántica  
uses:
  authority: Authority:ConsejoDirectivoAuthority
```

---

## ✅ Campos Obligatorios en Todos los Templates

- `meta.id` - Identificador único en CamelCase
- `intent.statement` - Declaración clara de la intención
- `intent.mode` - Modo de operación (declare/require/propose/prohibit)
- `context.scope` - Ámbito de aplicación específico
- `context.stakeholders` - Partes interesadas involucradas
- `authority.actor` - Responsable del artefacto
- `authority.level` - Nivel de autoridad (strategic/tactical/operational)

## 📖 Convenciones de Naming

- **IDs**: CamelCase sin espacios (ej: `MiNuevoArtefacto`)
- **Files**: kebab-case con extensión .sol (ej: `mi-nuevo-artefacto.sol`)
- **References**: Usar el ID exacto del artefacto referenciado

## 🔗 Referencias Útiles

- [Documentación de Artefactos](../artifacts/README.md)
- [Esquema JSON](../../extension/schemas/sol-schema.json)
- [Ejemplos Prácticos](../examples/)

---

**Versión Template:** v2025.06
**Última actualización:** Junio 2025