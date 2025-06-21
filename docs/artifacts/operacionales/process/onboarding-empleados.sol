Process:
  id: OnboardingEmpleados
  
  # Bloques fundacionales
  intent:
    statement: >
      Integrar de manera efectiva a los nuevos empleados a la organización,
      proporcionándoles las herramientas, conocimientos y accesos necesarios
      para ser productivos desde el primer día
    mode: require
    priority: high
  
  context:
    scope: Incorporación de nuevos empleados a la organización
    timeframe: 30 días desde fecha de ingreso
    stakeholders:
      - Nuevo empleado
      - Manager directo
      - Recursos Humanos
      - TI/Sistemas
      - Compañeros de equipo
      - Mentores asignados
    conditions:
      - contrato-trabajo-firmado
      - fecha-inicio-definida
      - puesto-trabajo-preparado
      - manager-disponible-acompañamiento
  
  evaluation:
    expected: empleado completamente integrado y productivo
    method: evaluación continua y feedback estructurado
    criteria:
      - metric: tiempo-completar-onboarding
        threshold: "< 30-dias"
      - metric: satisfaccion-nuevo-empleado
        threshold: "> 4.5/5.0"
      - metric: productividad-primer-mes
        threshold: "> 70% de objetivo"
      - metric: completitud-actividades-onboarding
        threshold: "= 100%"
    frequency: al-finalizar-proceso
  
  authority:
    actor: Director de Recursos Humanos
    basedOn: Manual de Gestión de Talento 2025
    validFrom: 2025-01-01
    level: operational
  
  # Campos de soporte
  area: RecursosHumanos
  tags: [onboarding, empleados, integracion, talento]
  
  # Flujo del proceso
  flow:
    phases:
      pre-ingreso:
        duration: "1-semana antes del ingreso"
        activities:
          - enviar-kit-bienvenida
          - preparar-estacion-trabajo
          - configurar-accesos-sistemas
          - asignar-mentor-buddy
          - planificar-agenda-primera-semana
        
        deliverables:
          - kit-bienvenida-enviado
          - workstation-configurada
          - credenciales-sistemas-creadas
          - mentor-asignado-notificado
      
      primera-semana:
        duration: "5 días laborales"
        activities:
          - sesion-bienvenida-organizacional
          - tour-instalaciones
          - reunion-manager-directo
          - capacitacion-sistemas-basicos
          - presentacion-equipo-trabajo
          - revision-descripcion-puesto
          - entrega-equipos-herramientas
        
        deliverables:
          - formularios-rrhh-completados
          - accesos-sistemas-verificados
          - capacitacion-basica-completada
          - objetivos-primer-mes-definidos
      
      primer-mes:
        duration: "30 días laborales"
        activities:
          - capacitacion-especifica-rol
          - asignacion-proyectos-iniciales
          - reuniones-seguimiento-semanales
          - feedback-continuo-manager
          - networking-interno
          - evaluacion-periodo-prueba
        
        deliverables:
          - plan-desarrollo-individual
          - primeros-entregables-completados
          - evaluacion-desempeño-inicial
          - feedback-proceso-onboarding
  
  # Estados del proceso
  lifecycle:
    states: 
      - planificado
      - pre-ingreso
      - en-progreso
      - completado
      - escalado
    
    transitions:
      - from: planificado
        to: pre-ingreso
        trigger: contrato-firmado
      - from: pre-ingreso
        to: en-progreso
        trigger: primer-dia-trabajo
      - from: en-progreso
        to: completado
        trigger: evaluacion-30-dias-exitosa
      - from: en-progreso
        to: escalado
        trigger: problemas-integracion-detectados
  
  # Eventos del proceso
  events:
    triggers:
      - ContratoEmpleadoFirmado
      - FechaInicioAlcanzada
      - ProblemasIntegracionDetectados
    
    emits:
      - OnboardingIniciado
      - OnboardingCompletado
      - EscalacionOnboardingRequerida
      - FeedbackOnboardingRecibido
  
  # Actores participantes
  actors:
    - NuevoEmpleado
    - ManagerDirecto
    - EspecialistaRRHH
    - AdministradorSistemas
    - MentorAsignado
  
  # Procedimientos detallados
  detailedProcedures:
    - ConfiguracionAccesosSistemas
    - EntregaEquipoTrabajo
    - CapacitacionSistemasBasicos
    - EvaluacionPeriodoPrueba
  
  # Indicadores de éxito
  successIndicators:
    - TiempoOnboardingCompleto
    - SatisfaccionNuevoEmpleado
    - RetencionEmpleados90Dias
    - ProductividadPrimerMes 