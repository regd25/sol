# Concept - Definición Esquemática

## Descripción
**¿Qué es?** Definición de un concepto, entidad o término importante para el dominio del negocio.  
**Ejemplo:** "Cliente", "Producto", "Pedido", "Usuario Premium"

## Categoría
**Organizacional** - Define estructura, roles y responsabilidades organizacionales.

## Estructura Esquemática

```yaml
Concept:
  id: [string, required] # Identificador único del artefacto
  
  # Bloques fundacionales (obligatorios)
  intent:
    statement: [string, required] # Definición clara del concepto
    mode: [enum, required] # declare (típico para conceptos)
    priority: [enum, required] # low|medium|high|critical
  
  context:
    scope: [string, required] # Ámbito donde se usa el concepto
    timeframe: [string, required] # Marco temporal de validez
    stakeholders: [array, required] # Quienes usan/manejan el concepto
    conditions: [array, optional] # Condiciones donde aplica la definición
  
  authority:
    actor: [string, required] # Quien define/autoriza el concepto
    basedOn: [string, required] # Documento o estándar que lo respalda
    validFrom: [date, required] # Fecha de vigencia inicial
    validUntil: [date, optional] # Fecha de vigencia final
    level: [enum, required] # domain|business|technical
  
  # Campos específicos del concepto (opcionales)
  definition: [object, optional] # Definición detallada
    description: [string, optional] # Descripción extendida
    attributes: [array, optional] # Atributos principales del concepto
    relationships: [array, optional] # Relaciones con otros conceptos
    constraints: [array, optional] # Restricciones o reglas del concepto
    examples: [array, optional] # Ejemplos concretos
  
  # Campos de soporte (opcionales)
  area: [string, optional] # Área organizacional responsable
  tags: [array, optional] # Etiquetas para categorización
  synonyms: [array, optional] # Términos sinónimos o alternativos
  relatedConcepts: [array, optional] # Conceptos relacionados
  usedInProcesses: [array, optional] # Procesos que utilizan el concepto
  managedByActors: [array, optional] # Actores responsables del concepto
  measuredBy: [array, optional] # Indicadores relacionados al concepto
```

## Campos Requeridos Mínimos
- `id`: Identificador único
- `intent.statement`: Definición del concepto
- `intent.mode`: Típicamente "declare"
- `intent.priority`: Nivel de prioridad
- `context.scope`: Ámbito de uso
- `context.timeframe`: Marco temporal
- `context.stakeholders`: Quienes lo usan
- `authority.actor`: Quien define el concepto
- `authority.basedOn`: Documento que lo respalda
- `authority.level`: Nivel de autoridad

## Tipos de Conceptos Comunes
- **Entidades de Negocio**: Cliente, Producto, Pedido
- **Roles**: Usuario Premium, Administrador, Proveedor
- **Estados**: Activo, Pendiente, Completado
- **Procesos**: Onboarding, Checkout, Validación
- **Métricas**: Conversión, Retención, Satisfacción

## Mejores Prácticas
1. **Precisión**: Definición clara y sin ambigüedades
2. **Consistencia**: Usar la misma definición en toda la organización
3. **Ejemplos**: Incluir ejemplos concretos para clarificar
4. **Relaciones**: Mapear cómo se relaciona con otros conceptos
5. **Evolución**: Revisar y actualizar definiciones según el negocio evoluciona

## Ejemplo de Uso
Ver: `cliente.sol` en esta carpeta. 