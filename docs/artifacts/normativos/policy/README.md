# Policy - Definición Esquemática

## Descripción
**¿Qué es?** Regla, norma o política específica que debe cumplirse obligatoriamente.  
**Ejemplo:** "Todos los usuarios deben usar autenticación de doble factor."

## Categoría
**Normativo** - Establece reglas, normas y directrices que deben seguirse.

## Estructura Esquemática

```yaml
Policy:
  id: [string, required] # Identificador único del artefacto
  
  # Bloques fundacionales (obligatorios)
  intent:
    statement: [string, required] # Declaración de la política
    mode: [enum, required] # require (típico para políticas)
    priority: [enum, required] # low|medium|high|critical
  
  context:
    scope: [string, required] # Ámbito donde aplica la política
    timeframe: [string, required] # Marco temporal de vigencia
    stakeholders: [array, required] # Quienes deben cumplir la política
    conditions: [array, optional] # Condiciones específicas de aplicación
  
  authority:
    actor: [string, required] # Quien establece/autoriza la política
    basedOn: [string, required] # Documento o regulación que la respalda
    validFrom: [date, required] # Fecha de vigencia inicial
    validUntil: [date, optional] # Fecha de vigencia final
    level: [enum, required] # organizational|regulatory|legal
  
  evaluation:
    expected: [string, required] # Estado esperado de cumplimiento
    method: [string, required] # Método de verificación
    criteria: [array, required] # Criterios específicos de cumplimiento
    frequency: [string, required] # Frecuencia de verificación
    thresholds: [object, optional] # Umbrales de cumplimiento
      acceptable: [number, optional] # Nivel aceptable (%)
      target: [number, optional] # Nivel objetivo (%)
  
  # Campos de soporte (opcionales)
  area: [string, optional] # Área organizacional responsable
  tags: [array, optional] # Etiquetas para categorización
  relatedPrinciples: [array, optional] # Principios que respaldan la política
  supportingProcesses: [array, optional] # Procesos que implementan la política
  exceptions: [array, optional] # Excepciones permitidas
  sanctions: [array, optional] # Sanciones por incumplimiento
  measuredBy: [array, optional] # Indicadores de cumplimiento
```

## Campos Requeridos Mínimos
- `id`: Identificador único
- `intent.statement`: Declaración de la política
- `intent.mode`: Típicamente "require"
- `intent.priority`: Nivel de prioridad
- `context.scope`: Ámbito de aplicación
- `context.timeframe`: Marco temporal
- `context.stakeholders`: Quienes deben cumplirla
- `authority.actor`: Quien establece la política
- `authority.basedOn`: Documento que la respalda
- `authority.level`: Nivel de autoridad
- `evaluation.expected`: Estado esperado
- `evaluation.method`: Método de verificación
- `evaluation.criteria`: Criterios de cumplimiento
- `evaluation.frequency`: Frecuencia de verificación

## Diferencias con Guideline
- **Policy**: Obligatoria, con evaluación estricta y posibles sanciones
- **Guideline**: Recomendada, con evaluación flexible y enfoque educativo

## Mejores Prácticas
1. **Especificidad**: Debe ser clara y específica en sus requerimientos
2. **Medibilidad**: Incluir criterios objetivos de cumplimiento
3. **Aplicabilidad**: Debe ser práctica y factible de implementar
4. **Trazabilidad**: Vincular con principios y regulaciones superiores
5. **Excepciones**: Definir claramente cualquier excepción permitida

## Ejemplo de Uso
Ver: `autenticacion-doble-factor.sol` en esta carpeta. 