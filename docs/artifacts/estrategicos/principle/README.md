# Principle - Definición Esquemática

## Descripción
**¿Qué es?** Valor o principio rector, técnico, ético u organizacional, que guía la toma de decisiones.  
**Ejemplo:** "Priorizar siempre la privacidad de los datos del usuario."

## Categoría
**Estratégico** - Define la dirección, valores y principios rectores.

## Estructura Esquemática

```yaml
Principle:
  id: [string, required] # Identificador único del artefacto
  
  # Bloques fundacionales (obligatorios)
  intent:
    statement: [string, required] # Declaración del principio
    mode: [enum, required] # declare (típico para principios)
    priority: [enum, required] # low|medium|high|critical
  
  context:
    scope: [string, required] # Ámbito donde aplica el principio
    timeframe: [string, required] # Marco temporal (típicamente permanente)
    stakeholders: [array, required] # Quienes deben seguir el principio
    conditions: [array, optional] # Condiciones donde aplica
  
  authority:
    actor: [string, required] # Quien establece el principio
    basedOn: [string, required] # Documento o código que lo respalda
    validFrom: [date, required] # Fecha de vigencia inicial
    validUntil: [date, optional] # Fecha de vigencia final
    level: [enum, required] # strategic (típico para principios)
  
  # Campos de soporte (opcionales)
  area: [string, optional] # Área organizacional relacionada
  tags: [array, optional] # Etiquetas para categorización
  manifestations: [array, optional] # Cómo se manifiesta el principio
  supportingPolicies: [array, optional] # Políticas que implementan el principio
  affectedProcesses: [array, optional] # Procesos afectados por el principio
  measuredBy: [array, optional] # Indicadores de cumplimiento
```

## Campos Requeridos Mínimos
- `id`: Identificador único
- `intent.statement`: Declaración del principio
- `intent.mode`: Típicamente "declare"
- `intent.priority`: Nivel de prioridad
- `context.scope`: Ámbito de aplicación
- `context.timeframe`: Marco temporal
- `context.stakeholders`: Quienes deben seguirlo
- `authority.actor`: Quien establece el principio
- `authority.basedOn`: Documento que lo respalda
- `authority.level`: Típicamente "strategic"

## Diferencias con Policy
- **Principle**: Guía general, valor fundamental, no tiene evaluación específica
- **Policy**: Regla específica, obligatoria, con criterios de cumplimiento medibles

## Mejores Prácticas
1. **Universalidad**: Debe aplicar ampliamente en la organización
2. **Claridad**: Fácil de entender y recordar
3. **Estabilidad**: Los principios no cambian frecuentemente
4. **Aplicabilidad**: Debe poder traducirse en políticas y procesos concretos
5. **Consistencia**: No debe contradecir otros principios organizacionales

## Ejemplo de Uso
Ver: `privacidad-datos-usuario.sol` en esta carpeta. 