Observation:
  id: TiempoRespuestaFueraRango
  
  # Bloques fundacionales
  intent:
    statement: >
      Registrar cuando el tiempo de respuesta del sistema excede
      los umbrales establecidos para alertar sobre posibles problemas
      de rendimiento que requieren atención
    mode: declare
    priority: medium
  
  context:
    scope: Monitoreo de rendimiento del sistema
    timeframe: continuo-24-7
    stakeholders: [EquipoOperaciones, AdministradoresSistema, UsuariosFinales]
    conditions: [sistema-operativo, monitoreo-activo, umbrales-definidos]
  
  evaluation:
    expected: detección temprana de problemas de rendimiento
    method: análisis automático de métricas de rendimiento
    criteria:
      - metric: precision-deteccion
        threshold: "> 95%"
      - metric: tiempo-alerta
        threshold: "< 30-segundos"
    frequency: continua
  
  authority:
    actor: Ingeniero de Monitoreo
    basedOn: Especificación de Monitoreo de Sistemas
    level: operational
  
  # Definición de la observación
  observationDefinition:
    type: "Métrica de rendimiento"
    category: "Tiempo de respuesta"
    severity: "warning"
    
  # Datos observados
  observedData:
    timestamp: "Momento exacto de la observación"
    serviceName: "Nombre del servicio afectado"
    responseTime: "Tiempo de respuesta medido (ms)"
    threshold: "Umbral configurado (ms)"
    deviation: "Porcentaje de desviación del umbral"
    endpoint: "Endpoint específico afectado"
    userAgent: "Información del cliente (si disponible)"
    
  # Criterios de detección
  detectionCriteria:
    warning: "Tiempo respuesta > 2 segundos"
    critical: "Tiempo respuesta > 5 segundos"
    emergency: "Tiempo respuesta > 10 segundos"
  
  # Acciones automáticas
  automatedActions:
    - RegistrarEnLogSistema
    - EnviarAlertaEquipoOperaciones
    - ActualizarDashboardMonitoreo
    - EjecutarDiagnosticoAutomatico
  
  # Análisis sugerido
  analysisSteps:
    - verificar-carga-servidor
    - revisar-consultas-base-datos
    - analizar-trafico-red
    - evaluar-recursos-sistema
    - identificar-procesos-pesados
  
  # Métricas relacionadas
  relatedMetrics:
    - CargaCPUServidor
    - UsoMemoriaRAM
    - ThroughputBaseDatos
    - LatenciaRed
    - ConcurrenciaUsuarios 