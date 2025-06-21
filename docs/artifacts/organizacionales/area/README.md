# Area - Definición Esquemática

## Descripción
**¿Qué es?** Unidad organizacional, departamento o división dentro de la organización.  
**Ejemplo:** "Área de Tecnología", "Departamento de Recursos Humanos", "División de Marketing"

## Categoría
**Organizacional** - Define estructura, roles y responsabilidades organizacionales.

## Estructura Esquemática

```yaml
Area:
  id: [string, required] # Identificador único del artefacto
  
  # Bloques fundacionales (obligatorios)
  intent:
    statement: [string, required] # Propósito y responsabilidades del área
    mode: [enum, required] # declare (típico para áreas)
    priority: [enum, required] # low|medium|high|critical
  
  context:
    scope: [string, required] # Ámbito de responsabilidad del área
    timeframe: [string, required] # Marco temporal de operación
    stakeholders: [array, required] # Partes interesadas internas/externas
    conditions: [array, optional] # Condiciones especiales de operación
  
  authority:
    actor: [string, required] # Quien establece/autoriza el área
    basedOn: [string, required] # Organigrama o documento que la respalda
    validFrom: [date, required] # Fecha de creación/vigencia
    validUntil: [date, optional] # Fecha de reestructuración (si aplica)
    level: [enum, required] # organizational
  
  # Campos específicos del área (opcionales)
  structure: [object, optional] # Estructura organizacional
    parentArea: [string, optional] # Área padre (si es sub-área)
    childAreas: [array, optional] # Sub-áreas dependientes
    manager: [string, optional] # Responsable/gerente del área
    teamSize: [number, optional] # Tamaño aproximado del equipo
  
  # Campos de soporte (opcionales)
  tags: [array, optional] # Etiquetas para categorización
  relatedAreas: [array, optional] # Áreas relacionadas/colaborativas
  keyProcesses: [array, optional] # Procesos principales del área
  managedActors: [array, optional] # Actores que pertenecen al área
  responsibleFor: [array, optional] # Políticas/procesos bajo su responsabilidad
  measuredBy: [array, optional] # Indicadores de desempeño del área
```

## Campos Requeridos Mínimos
- `id`: Identificador único
- `intent.statement`: Propósito del área
- `intent.mode`: Típicamente "declare"
- `intent.priority`: Nivel de prioridad
- `context.scope`: Ámbito de responsabilidad
- `context.timeframe`: Marco temporal
- `context.stakeholders`: Partes interesadas
- `authority.actor`: Quien establece el área
- `authority.basedOn`: Documento que la respalda
- `authority.level`: Típicamente "organizational"

## Relaciones Comunes
- **Contiene**: Actores que pertenecen al área
- **Gestiona**: Procesos bajo su responsabilidad
- **Colabora**: Con otras áreas relacionadas
- **Reporta**: A área padre (si es sub-área)
- **Mide**: Indicadores de desempeño específicos

## Mejores Prácticas
1. **Claridad**: Definir claramente el propósito y responsabilidades
2. **Límites**: Establecer claramente qué está dentro/fuera del scope
3. **Relaciones**: Mapear dependencias y colaboraciones con otras áreas
4. **Medición**: Definir indicadores clave de desempeño del área
5. **Evolución**: Revisar estructura cuando cambien las necesidades organizacionales

## Ejemplo de Uso
Ver: `tecnologia.sol` en esta carpeta. 