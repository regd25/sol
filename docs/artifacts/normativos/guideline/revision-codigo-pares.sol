Guideline:
  id: RevisionCodigoPares
  
  # Bloques fundacionales
  intent:
    statement: >
      Se recomienda realizar revisiones de código en pares
      para mejorar la calidad del software y facilitar
      la transferencia de conocimiento entre desarrolladores
    mode: propose
    priority: medium
  
  context:
    scope: Desarrollo de software y sistemas
    timeframe: aplicacion-continua
    stakeholders:
      - Desarrolladores senior
      - Desarrolladores junior
      - Tech leads
      - Arquitectos de software
      - QA engineers
    conditions:
      - codigo-nuevo-desarrollado
      - modificaciones-codigo-existente
      - features-criticas-implementadas
      - disponibilidad-revisor-calificado
  
  authority:
    actor: Arquitecto Principal de Software
    basedOn: Mejores Prácticas de Desarrollo 2025
    validFrom: 2025-01-15
    level: tactical
  
  # Campos de soporte
  area: DesarrolloSoftware
  tags: [desarrollo, calidad, codigo, peer-review]
  
  # Recomendaciones específicas
  recommendations:
    best-practices:
      - revisar-cambios-antes-merge
      - usar-herramientas-automaticas-analisis
      - documentar-decisiones-arquitecturales
      - verificar-cumplimiento-estandares
      - validar-cobertura-pruebas-unitarias
      - revisar-impacto-seguridad
    
    process-guidelines:
      - asignar-revisor-con-experiencia-relevante
      - limitar-tamaño-pull-requests
      - proporcionar-contexto-suficiente
      - responder-comentarios-constructivamente
      - aprobar-solo-cuando-listo-produccion
  
  # Beneficios esperados
  expectedBenefits:
    - mejora-calidad-codigo
    - reduccion-bugs-produccion
    - transferencia-conocimiento-equipo
    - estandarizacion-practicas-desarrollo
    - deteccion-temprana-problemas-arquitectura
  
  # Métricas sugeridas
  suggestedMetrics:
    - porcentaje-codigo-revisado
    - tiempo-promedio-revision
    - bugs-detectados-revision
    - satisfaccion-desarrolladores-proceso
  
  # Herramientas recomendadas
  recommendedTools:
    - GitHub Pull Requests
    - GitLab Merge Requests
    - Azure DevOps
    - SonarQube
    - ESLint
    - Prettier
  
  # Flexibilidad de implementación
  implementation:
    mandatory-for:
      - codigo-produccion-critico
      - cambios-arquitectura-significativos
      - features-seguridad-sensibles
    
    optional-for:
      - scripts-desarrollo-temporal
      - documentacion-interna
      - prototipos-experimentales
    
    exceptions:
      - hotfixes-emergencia-critica
      - cambios-configuracion-menores 