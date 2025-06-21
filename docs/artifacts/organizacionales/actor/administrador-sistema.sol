Actor:
  id: AdministradorSistema
  
  # Bloques fundacionales
  intent:
    statement: >
      Mantener la operación, seguridad y disponibilidad de los sistemas
      tecnológicos de la organización, garantizando su funcionamiento
      óptimo y la continuidad del negocio
    mode: require
    priority: critical
  
  context:
    scope: Infraestructura tecnológica y sistemas críticos
    timeframe: 24/7 operación continua
    stakeholders:
      - Usuarios internos
      - Equipos de desarrollo
      - Gerencia de TI
      - Proveedores de infraestructura
      - Auditores de seguridad
    conditions:
      - sistemas-criticos-operativos
      - infraestructura-disponible
      - herramientas-administracion-accesibles
      - procedimientos-operacion-definidos
  
  authority:
    actor: Director de Infraestructura
    basedOn: Manual de Roles y Responsabilidades TI
    validFrom: 2025-01-01
    level: operational
  
  # Campos de soporte
  area: Tecnologia
  tags: [administracion, sistemas, infraestructura, operaciones]
  
  # Tipo de actor
  actorType: persona-fisica
  
  # Responsabilidades principales
  responsibilities:
    core:
      - monitoreo-sistemas-24-7
      - mantenimiento-servidores
      - gestion-copias-seguridad
      - aplicacion-parches-seguridad
      - resolucion-incidentes-infraestructura
      - configuracion-servicios-red
    
    security:
      - implementacion-politicas-seguridad
      - gestion-accesos-usuarios
      - auditoria-logs-sistema
      - respuesta-incidentes-seguridad
      - actualizacion-sistemas-antivirus
    
    operational:
      - planificacion-mantenimientos
      - optimizacion-rendimiento-sistemas
      - documentacion-procedimientos
      - capacitacion-usuarios-basica
      - coordinacion-proveedores-externos
  
  # Competencias requeridas
  requiredSkills:
    technical:
      - administracion-servidores-linux-windows
      - redes-tcp-ip-configuracion
      - virtualizacion-vmware-hyper-v
      - bases-datos-administracion-basica
      - scripting-bash-powershell
      - herramientas-monitoreo-sistemas
    
    soft:
      - resolucion-problemas-bajo-presion
      - comunicacion-tecnica-efectiva
      - trabajo-equipo-colaborativo
      - atencion-detalle-precision
      - adaptabilidad-nuevas-tecnologias
  
  # Herramientas utilizadas
  tools:
    monitoring:
      - Nagios
      - Zabbix
      - Prometheus
      - Grafana
    
    infrastructure:
      - VMware vSphere
      - Microsoft Active Directory
      - Docker
      - Kubernetes
    
    automation:
      - Ansible
      - Puppet
      - PowerShell
      - Bash Scripts
  
  # Procesos en los que participa
  participatesIn:
    - GestionIncidentesInfraestructura
    - MantenimientoSistemas
    - CopiasSeguridadRecuperacion
    - ProvisionamientoServidores
    - MonitoreoRendimientoSistemas
  
  # Interacciones principales
  interactions:
    - DesarrolladorSoftware: soporte-infraestructura-desarrollo
    - UsuarioFinal: resolucion-problemas-tecnicos
    - ProveedorTecnologico: coordinacion-servicios-externos
    - EspecialistaSeguridadTI: implementacion-politicas-seguridad
    - GerenteTI: reporte-estado-infraestructura
  
  # Métricas de desempeño
  performanceMetrics:
    - tiempo-resolucion-incidentes
    - disponibilidad-sistemas-gestionados
    - cumplimiento-ventanas-mantenimiento
    - satisfaccion-usuarios-internos
    - numero-incidentes-prevenidos 