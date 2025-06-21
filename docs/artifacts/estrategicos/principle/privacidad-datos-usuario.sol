Principle:
  id: PrivacidadDatosUsuario
  
  # Bloques fundacionales
  intent:
    statement: >
      Priorizar siempre la privacidad de los datos del usuario,
      garantizando transparencia, control y protección en todo momento
    mode: declare
    priority: critical
  
  context:
    scope: Todas las operaciones que involucren datos personales
    timeframe: permanente
    stakeholders:
      - Usuarios finales
      - Equipos de desarrollo
      - Equipos de producto
      - Área legal
      - Reguladores de datos
    conditions:
      - procesamiento-datos-personales
      - almacenamiento-informacion-usuario
      - comparticion-datos-terceros
      - analisis-comportamiento-usuario
  
  authority:
    actor: Chief Privacy Officer
    basedOn: Código de Ética Digital y GDPR
    validFrom: 2025-01-01
    level: strategic
  
  # Campos de soporte
  area: EticaDigital
  tags: [privacidad, datos, usuario, etica]
  
  # Manifestaciones del principio
  manifestations:
    - consentimiento-explicito-usuario
    - minimizacion-recoleccion-datos
    - transparencia-uso-informacion
    - derecho-olvido-garantizado
    - seguridad-almacenamiento-datos
    - auditoria-regular-practicas
  
  # Políticas que lo implementan
  supportingPolicies: 
    - ConsentimientoExplicito
    - MinimizacionDatos
    - DerechoOlvido
    - Seguridad-Almacenamiento
  
  # Procesos afectados
  affectedProcesses:
    - RegistroUsuarios
    - AnalisisDatos
    - ComparticionTerceros
    - RespuestaIncidentes
  
  # Indicadores de cumplimiento
  measuredBy:
    - IndiceCumplimientoPrivacidad
    - TiempoRespuestaSolicitudesPrivacidad
    - IncidentesPrivacidadReportados 