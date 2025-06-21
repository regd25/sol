Policy:
  id: AutenticacionDobleFactor
  
  # Bloques fundacionales
  intent:
    statement: >
      Todos los usuarios deben autenticarse mediante doble factor
      para acceder a sistemas críticos y datos sensibles
    mode: require
    priority: critical
  
  context:
    scope: Acceso a sistemas críticos y datos sensibles
    timeframe: aplicacion-permanente
    stakeholders:
      - Todos los usuarios del sistema
      - Administradores de sistema
      - Equipo de seguridad
      - Auditores externos
    conditions:
      - acceso-sistemas-criticos
      - manejo-datos-sensibles
      - conexion-redes-corporativas
      - usuario-con-privilegios-elevados
  
  evaluation:
    expected: 100% de usuarios con autenticación de doble factor activa
    method: monitoreo automático y auditorías regulares
    criteria:
      - metric: porcentaje-usuarios-2fa-activo
        threshold: "= 100%"
      - metric: intentos-acceso-sin-2fa-bloqueados
        threshold: "= 100%"
      - metric: tiempo-activacion-2fa-nuevos-usuarios
        threshold: "< 24-horas"
    frequency: continua
  
  authority:
    actor: Chief Information Security Officer
    basedOn: Política de Seguridad Corporativa 2025
    validFrom: 2025-02-01
    level: tactical
  
  # Campos de soporte
  area: SeguridadInformatica
  principle: PrivacidadDatosUsuario
  tags: [seguridad, autenticacion, acceso, 2fa]
  
  # Configuración de la política
  enforcement:
    automatic: true
    exceptions: []
    escalation: 
      - nivel-1: notificacion-usuario
      - nivel-2: bloqueo-acceso-temporal
      - nivel-3: escalacion-administrador
  
  # Implementación técnica
  technicalRequirements:
    - sistema-2fa-integrado
    - aplicacion-autenticador-movil
    - tokens-hardware-disponibles
    - backup-codes-generados
  
  # Procesos relacionados
  relatedProcesses: 
    - AltaUsuarios
    - GestionAccesos
    - AuditoriaSeguridad
  
  # Excepciones y casos especiales
  exceptions:
    - cuentas-servicio-automatizadas
    - acceso-emergencia-autorizado
    - sistemas-legacy-en-migracion 