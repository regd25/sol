# Event - Definición Esquemática

## Descripción
**¿Qué es?** Suceso o acontecimiento que ocurre en el sistema y puede desencadenar acciones.  
**Ejemplo:** "Nueva solicitud registrada", "Usuario inactivo por 30 días", "Pago procesado"

## Categoría
**Operacional** - Define actividades, flujos y operaciones del día a día.

## Estructura Esquemática

```yaml
Event:
  id: [string, required] # Identificador único del artefacto
  
  # Bloques fundacionales (obligatorios)
  intent:
    statement: [string, required] # Descripción del evento
    mode: [enum, required] # declare (típico para eventos)
    priority: [enum, required] # low|medium|high|critical
  
  context:
    scope: [string, required] # Ámbito donde ocurre el evento
    timeframe: [string, required] # Cuándo puede ocurrir el evento
    stakeholders: [array, required] # Actores afectados por el evento
    conditions: [array, optional] # Condiciones que generan el evento
  
  authority:
    actor: [string, required] # Quien define/autoriza el evento
    basedOn: [string, required] # Documento que lo respalda
    validFrom: [date, required] # Fecha de vigencia inicial
    validUntil: [date, optional] # Fecha de vigencia final
    level: [enum, required] # operational|system|business
  
  # Campos específicos del evento (obligatorios)
  trigger: [object, required] # Qué desencadena el evento
    source: [string, required] # Origen del evento (sistema, proceso, actor)
    condition: [string, required] # Condición específica que lo activa
    frequency: [string, optional] # Frecuencia esperada del evento
  
  # Campos de soporte (opcionales)
  area: [string, optional] # Área relacionada con el evento
  tags: [array, optional] # Etiquetas para categorización
  relatedEvents: [array, optional] # Eventos relacionados
  triggeredBy: [array, optional] # Procesos/actores que pueden generarlo
  triggers: [array, optional] # Qué acciones desencadena este evento
  data: [array, optional] # Datos asociados al evento
  responses: [array, optional] # Respuestas automáticas al evento
  notifications: [array, optional] # Notificaciones que genera
  measuredBy: [array, optional] # Indicadores relacionados al evento
```

## Campos Requeridos Mínimos
- `id`: Identificador único
- `intent.statement`: Descripción del evento
- `intent.mode`: Típicamente "declare"
- `intent.priority`: Nivel de prioridad
- `context.scope`: Ámbito donde ocurre
- `context.timeframe`: Cuándo puede ocurrir
- `context.stakeholders`: Actores afectados
- `authority.actor`: Quien define el evento
- `authority.basedOn`: Documento que lo respalda
- `authority.level`: Nivel de autoridad
- `trigger.source`: Origen del evento
- `trigger.condition`: Condición que lo activa

## Tipos de Eventos Comunes
- **Eventos de Sistema**: Inicio/parada de servicios, errores, alertas
- **Eventos de Negocio**: Nuevas transacciones, cambios de estado
- **Eventos de Usuario**: Registro, login, acciones específicas
- **Eventos Programados**: Reportes, backups, mantenimiento

## Diferencias con Observation
- **Event**: Suceso que ocurre y puede desencadenar acciones
- **Observation**: Medición o monitoreo de una condición específica

## Mejores Prácticas
1. **Claridad**: Describir claramente qué constituye el evento
2. **Contexto**: Especificar cuándo y dónde puede ocurrir
3. **Datos**: Definir qué información acompaña al evento
4. **Respuestas**: Documentar qué acciones se desencadenan
5. **Monitoreo**: Establecer métricas para seguimiento del evento

## Ejemplo de Uso
Ver: `nueva-solicitud-registrada.sol` en esta carpeta. 