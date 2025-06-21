# Vision - Definición Esquemática

## Descripción
**¿Qué es?** Declaración de dirección estratégica o propósito de la organización.  
**Ejemplo:** "Ser el proveedor líder en soluciones tecnológicas sustentables en LATAM."

## Categoría
**Estratégico** - Define la dirección, valores y principios rectores.

## Estructura Esquemática

```yaml
Vision:
  id: [string, required] # Identificador único del artefacto
  
  # Bloques fundacionales (obligatorios)
  intent:
    statement: [string, required] # Declaración de la visión estratégica
    mode: [enum, required] # declare (típico para visiones)
    priority: [enum, required] # low|medium|high|critical
  
  context:
    scope: [string, required] # Ámbito de aplicación de la visión
    timeframe: [string, required] # Marco temporal (típicamente largo-plazo)
    stakeholders: [array, required] # Lista de partes interesadas
    conditions: [array, optional] # Condiciones necesarias para la visión
  
  authority:
    actor: [string, required] # Quien define/respalda la visión
    basedOn: [string, required] # Documento o plan que la respalda
    validFrom: [date, required] # Fecha de vigencia inicial
    validUntil: [date, optional] # Fecha de vigencia final
    level: [enum, required] # strategic (típico para visiones)
  
  evaluation: [object, optional] # Cómo se mide el logro de la visión
    expected: [string, optional] # Estado esperado
    method: [string, optional] # Método de evaluación
    criteria: [array, optional] # Criterios específicos de medición
    frequency: [string, optional] # Frecuencia de evaluación
  
  # Campos de soporte (opcionales)
  area: [string, optional] # Área organizacional relacionada
  tags: [array, optional] # Etiquetas para categorización
  relatedVisions: [array, optional] # Otras visiones relacionadas
  businessImpact: [array, optional] # Impactos esperados en el negocio
  measuredBy: [array, optional] # Indicadores que miden esta visión
```

## Campos Requeridos Mínimos
- `id`: Identificador único
- `intent.statement`: Declaración de la visión
- `intent.mode`: Típicamente "declare"
- `intent.priority`: Nivel de prioridad
- `context.scope`: Ámbito de aplicación
- `context.timeframe`: Marco temporal
- `context.stakeholders`: Partes interesadas
- `authority.actor`: Responsable de la visión
- `authority.basedOn`: Documento que la respalda
- `authority.level`: Típicamente "strategic"

## Mejores Prácticas
1. **Claridad**: La declaración debe ser clara e inspiradora
2. **Medibilidad**: Incluir criterios de evaluación cuando sea posible
3. **Temporalidad**: Definir marcos temporales realistas (3-10 años)
4. **Alineación**: Vincular con otras visiones y estrategias organizacionales
5. **Stakeholders**: Identificar todas las partes interesadas relevantes

## Ejemplo de Uso
Ver: `liderazgo-tecnologico-sustentable.sol` en esta carpeta.