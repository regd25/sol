Event:
  id: NuevaSolicitudRegistrada
  
  # Bloques fundacionales
  intent:
    statement: >
      Notificar al sistema que una nueva solicitud ha sido registrada
      y requiere procesamiento según las reglas de negocio establecidas
    mode: declare
    priority: high
  
  context:
    scope: Sistema de gestión de solicitudes
    timeframe: tiempo-real
    stakeholders: [Cliente, SistemaGestion, EquipoProcesamiento]
    conditions: [formulario-completado, datos-validados, sistema-operativo]
  
  authority:
    actor: Arquitecto de Sistemas
    basedOn: Especificación de Eventos del Sistema
    level: operational
  
  # Definición del evento
  eventDefinition:
    trigger: "Formulario de solicitud enviado exitosamente"
    source: "Sistema Web/Aplicación Móvil"
    destination: "Cola de procesamiento de solicitudes"
    
  # Datos del evento
  eventData:
    required:
      - solicitudId: "Identificador único de la solicitud"
      - clienteId: "Identificador del cliente"
      - tipoSolicitud: "Categoría de la solicitud"
      - fechaCreacion: "Timestamp de creación"
      - prioridad: "Nivel de prioridad (alta/media/baja)"
    
    optional:
      - comentarios: "Comentarios adicionales del cliente"
      - archivosAdjuntos: "Lista de archivos adjuntos"
      - canalOrigen: "Canal por el que se originó (web/móvil/telefono)"
  
  # Acciones desencadenadas
  triggeredActions:
    - AsignarSolicitudAEquipo
    - EnviarNotificacionCliente
    - CrearTicketSeguimiento
    - ActualizarMetricasSolicitudes
    - IniciarProcesamiento
  
  # Suscriptores del evento
  subscribers:
    - ServicioProcesamiento
    - ServicioNotificaciones
    - ServicioMetricas
    - ServicioAuditoria 