# Guideline - Definición Esquemática

## Descripción
**¿Qué es?** Recomendación o buena práctica sugerida, no obligatoria.  
**Ejemplo:** "Se recomienda hacer revisión de código por pares antes de cada merge."

## Categoría
**Normativo** - Establece reglas, normas y directrices que deben seguirse.

## Estructura Esquemática

```yaml
Guideline:
  id: [string, required] # Identificador único del artefacto
  
  # Bloques fundacionales (obligatorios)
  intent:
    statement: [string, required] # Declaración de la recomendación
    mode: [enum, required] # propose (típico para guidelines)
    priority: [enum, required] # low|medium|high|critical
  
  context:
    scope: [string, required] # Ámbito donde aplica la recomendación
    timeframe: [string, required] # Marco temporal de aplicación
    stakeholders: [array, required] # Quienes deberían seguir la guía
    conditions: [array, optional] # Condiciones donde es más relevante
  
  authority:
    actor: [string, required] # Quien propone/recomienda la guía
    basedOn: [string, required] # Estándar o práctica que la respalda
    validFrom: [date, required] # Fecha de vigencia inicial
    validUntil: [date, optional] # Fecha de vigencia final
    level: [enum, required] # advisory|best-practice|standard
  
  evaluation: [object, optional] # Cómo se mide la adopción
    expected: [string, optional] # Estado esperado de adopción
    method: [string, optional] # Método de seguimiento
    criteria: [array, optional] # Criterios de evaluación
    frequency: [string, optional] # Frecuencia de revisión
    thresholds: [object, optional] # Umbrales deseables
      target: [number, optional] # Nivel objetivo de adopción (%)
  
  # Campos de soporte (opcionales)
  area: [string, optional] # Área organizacional relacionada
  tags: [array, optional] # Etiquetas para categorización
  relatedPrinciples: [array, optional] # Principios que respaldan la guía
  benefits: [array, optional] # Beneficios esperados de seguir la guía
  alternatives: [array, optional] # Alternativas aceptables
  supportingTools: [array, optional] # Herramientas que facilitan la adopción
  measuredBy: [array, optional] # Indicadores de adopción
```

## Campos Requeridos Mínimos
- `id`: Identificador único
- `intent.statement`: Declaración de la recomendación
- `intent.mode`: Típicamente "propose"
- `intent.priority`: Nivel de prioridad
- `context.scope`: Ámbito de aplicación
- `context.timeframe`: Marco temporal
- `context.stakeholders`: Quienes deberían seguirla
- `authority.actor`: Quien propone la guía
- `authority.basedOn`: Estándar que la respalda
- `authority.level`: Nivel de autoridad

## Diferencias con Policy
- **Guideline**: Recomendada, flexible, enfoque educativo
- **Policy**: Obligatoria, estricta, con posibles sanciones por incumplimiento

## Mejores Prácticas
1. **Claridad**: Debe explicar claramente la recomendación y sus beneficios
2. **Justificación**: Incluir el razonamiento detrás de la recomendación
3. **Flexibilidad**: Permitir adaptaciones según contexto específico
4. **Ejemplos**: Proporcionar ejemplos concretos de implementación
5. **Evolución**: Revisar periódicamente y actualizar según aprendizajes

## Ejemplo de Uso
Ver: `revision-codigo-pares.sol` en esta carpeta. 