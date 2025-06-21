# SOL - Semantic Operations Language Support

Esta extensión de VS Code proporciona soporte completo para el **Semantic Operations Language (SOL)**, incluyendo resaltado de sintaxis, validación de esquemas, navegación semántica y soporte de lenguaje para archivos `.sol`, `.sol.yaml` y `.sol.yml`.

## 🎯 Sobre SOL

SOL es un proyecto que sigue principios fundamentales de diseño:

1. **Coherencia Semántica**: Mantener la integridad narrativa
2. **Trazabilidad**: Vincular artefactos a su visión estratégica  
3. **Simplicidad**: Empezar simple y refactorizar cuando sea necesario
4. **Documentación**: Todo cambio debe incluir ejemplos claros

Para más información sobre SOL, visita el [repositorio oficial](https://github.com/regd25/sol).

## ✨ Características

### Soporte de Sintaxis
- Resaltado de sintaxis avanzado para artefactos SOL
- Reconocimiento de tipos de artefactos: Vision, Domain, Process, Actor, Policy, Indicator
- Soporte para operadores semánticos y referencias entre artefactos
- Detección automática de archivos SOL mediante headers

### Validación Semántica  
- Validación de coherencia semántica entre artefactos
- Verificación de trazabilidad Vision-Domain-Process
- Detección de referencias rotas entre artefactos
- Diagnósticos en tiempo real

### Navegación Inteligente
- "Go to Definition" para referencias entre artefactos
- Hover información con detalles de artefactos
- Símbolos de documento para navegación rápida
- Autocompletado inteligente basado en contexto

### Comandos SOL
- `SOL: Validate Semantic Coherence` - Valida la coherencia semántica del documento
- `SOL: Show Artifact Traceability` - Muestra el mapa de trazabilidad
- `SOL: Generate Documentation` - Genera documentación automática
- `SOL: Format Document` - Formatea el documento SOL siguiendo las convenciones estándar

### Formateo de Código
- Formateo automático de documentos SOL con `Ctrl+Shift+I` (Windows/Linux) o `Cmd+Shift+I` (Mac)
- Formateo de selección con `Ctrl+K Ctrl+F` (Windows/Linux) o `Cmd+K Cmd+F` (Mac)
- Indentación inteligente basada en la estructura semántica SOL
- Limpieza automática de espacios en blanco y normalización de sintaxis

## 📁 Extensiones de Archivo Soportadas

- `.sol` - Archivos SOL puros
- `.sol.yaml` - Archivos SOL en formato YAML
- `.sol.yml` - Archivos SOL en formato YAML (extensión corta)
- `.omd` - Operations Markdown

## 🚀 Uso

1. Instala la extensión
2. Abre cualquier archivo `.sol`, `.sol.yaml` o `.sol.yml`
3. Disfruta del soporte completo de SOL con:
   - Resaltado de sintaxis automático
   - Validación en tiempo real
   - Navegación semántica
   - Comandos de coherencia y trazabilidad

### Ejemplo de Archivo SOL

```sol
# SOL - Semantic Operations Language

Vision:
  - id: DigitalTransformation
    content: "Transform operations through semantic clarity"
    author: "SOL Team"

Domain:
  id: OperationalExcellence
  description: "Domain focused on operational processes"
  vision: DigitalTransformation

Actor:
  - id: ProcessManager
    type: Human
    domain: OperationalExcellence

Process:
  id: OptimizeOperations
  vision: DigitalTransformation
  actors:
    - ProcessManager
  steps:
    - "Analyze current state"
    - "Define target state (Vision: DigitalTransformation)"
    - "Implement improvements"
```

## 🛠 Instalación (Desarrollo Local)

1. Clona el repositorio
2. Instala dependencias:
   ```bash
   npm install
   ```
3. Compila la extensión:
   ```bash
   npm run compile
   npm run compile-server
   ```
4. Presiona `F5` para lanzar VS Code con la extensión cargada
5. Abre cualquier archivo SOL para probar las funcionalidades

## 📋 Requisitos

- VS Code 1.70.0 o superior
- Node.js para desarrollo local

## 🏗 Estructura de Archivos Recomendada

```
proyecto/
├── vision/
│   └── strategic-vision.sol
├── domains/
│   ├── operational-domain.sol.yaml
│   └── technical-domain.sol.yaml
├── processes/
│   ├── onboarding-process.sol
│   └── optimization-process.sol.yaml
└── actors/
    └── organizational-actors.sol.yaml
```

## 🎨 Características Técnicas

### Gramática de Sintaxis
- Definición completa de TextMate para archivos `.sol`
- Gramática especializada para archivos `.sol.yaml`
- Reconocimiento de patrones semánticos SOL
- Soporte para referencias cruzadas entre artefactos

### Esquema de Validación
- JSON Schema completo para validación de artefactos SOL
- Validación de tipos de artefactos y sus propiedades
- Verificación de patrones de nomenclatura
- Validación de referencias entre artefactos

### Servidor de Lenguaje
- Completado inteligente basado en contexto
- Información de hover con detalles de artefactos
- Navegación "Go to Definition" para referencias
- Símbolos de documento para exploración rápida

## 🤝 Contribuciones

Este proyecto sigue los principios de SOL para contribuciones:

1. **Coherencia Semántica**: Mantener la integridad narrativa del código
2. **Trazabilidad**: Vincular cambios a objetivos estratégicos
3. **Simplicidad**: Empezar simple, refactorizar cuando sea necesario
4. **Documentación**: Incluir ejemplos claros con cada cambio

Para contribuir, visita el [repositorio de SOL](https://github.com/regd25/sol) y revisa las guías de contribución.

## 📄 Licencia

MIT - Ver archivo LICENSE para detalles completos.

## 🔗 Enlaces

- [Repositorio SOL](https://github.com/regd25/sol) - Proyecto principal
- [Documentación SOL](https://github.com/regd25/sol#readme) - Documentación completa
- [Issues](https://github.com/regd25/sol/issues) - Reportar problemas o sugerencias

---

**¿Tienes preguntas?** Revisa la [documentación completa de SOL](https://github.com/regd25/sol) o abre un [issue](https://github.com/regd25/sol/issues) para discutir casos de uso específicos.
