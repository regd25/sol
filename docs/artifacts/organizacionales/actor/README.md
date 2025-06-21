# Actor - Definición Esquemática

## Descripción
**¿Qué es?** Rol, persona o sistema que participa en procesos organizacionales.  
**Ejemplo:** "Administrador de Sistema", "Cliente Premium", "Sistema de Facturación"

## Categoría
**Organizacional** - Define estructura, roles y responsabilidades organizacionales.

## Estructura Esquemática

```yaml
Actor:
  id: [string, required] # Identificador único del artefacto
  
  # Bloques fundacionales (obligatorios)
  intent:
    statement: [string, required] # Definición del rol y responsabilidades
    mode: [enum, required] # declare (típico para actores)
    priority: [enum, required] # low|medium|high|critical
  
  context:
    scope: [string, required] # Ámbito donde opera el actor
    timeframe: [string, required] # Marco temporal de actividad
    stakeholders: [array, required] # Con quienes interactúa el actor
    conditions: [array, optional] # Condiciones de operación
  
  authority:
    actor: [string, required] # Quien define/autoriza el rol
    basedOn: [string, required] # Documento que define el rol
    validFrom: [date, required] # Fecha de vigencia inicial
    validUntil: [date, optional] # Fecha de vigencia final
    level: [enum, required] # operational|managerial|strategic
  
  # Campos específicos del actor (opcionales)
  profile: [object, optional] # Perfil del actor
    type: [enum, optional] # human|system|external
    area: [string, optional] # Área organizacional a la que pertenece
    skills: [array, optional] # Habilidades requeridas
    access: [array, optional] # Sistemas/recursos a los que tiene acceso
    permissions: [array, optional] # Permisos específicos
  
  responsibilities: [array, optional] # Responsabilidades específicas
  interactions: [array, optional] # Interacciones con otros actores
  
  # Campos de soporte (opcionales)
  tags: [array, optional] # Etiquetas para categorización
  relatedActors: [array, optional] # Actores relacionados
  participatesIn: [array, optional] # Procesos en los que participa
  managedBy: [array, optional] # Actores que gestionan este rol
  manages: [array, optional] # Actores que gestiona este rol
  measuredBy: [array, optional] # Indicadores de desempeño del actor
```

## Campos Requeridos Mínimos
- `id`: Identificador único
- `intent.statement`: Definición del rol
- `intent.mode`: Típicamente "declare"
- `intent.priority`: Nivel de prioridad
- `context.scope`: Ámbito de operación
- `context.timeframe`: Marco temporal
- `context.stakeholders`: Con quienes interactúa
- `authority.actor`: Quien define el rol
- `authority.basedOn`: Documento que lo respalda
- `authority.level`: Nivel de autoridad

## Tipos de Actores Comunes
- **Humanos**: Empleados, clientes, proveedores, usuarios
- **Sistemas**: APIs, servicios, aplicaciones, bases de datos
- **Externos**: Reguladores, auditores, socios, competidores
- **Roles**: Administrador, Usuario, Gerente, Analista

## Diferencias con Area
- **Actor**: Rol específico, persona o sistema individual
- **Area**: Unidad organizacional que puede contener múltiples actores

## Mejores Prácticas
1. **Especificidad**: Definir claramente responsabilidades y límites del rol
2. **Permisos**: Documentar accesos y permisos necesarios
3. **Interacciones**: Mapear relaciones con otros actores
4. **Medición**: Definir indicadores de desempeño relevantes
5. **Evolución**: Revisar roles según cambios organizacionales

## Ejemplo de Uso
Ver: `administrador-sistema.sol` en esta carpeta. 