# 🎭 ACTOR TEMPLATE - Organizational Role Definition

Actor:[ActorId]:                             # REQUIRED: Unique identifier for this actor
                                            # Example: Actor:ConsejoDirectivo
                                            # Example: Actor:TechLead
                                            # Example: Actor:ClientesCorporativos

  # ┌─ ACTOR DEFINITION ─────────────────────┐
  definition:
    name: "[Actor Name]"                     # REQUIRED: Human-readable name
                                            # Example: "Consejo Directivo"
                                            # Example: "Tech Lead Senior"
                                            # Example: "Clientes Corporativos"
    
    description: >                          # REQUIRED: What this actor represents
      [Actor description explaining their role, responsibilities, and context]
      # Example: "Órgano de gobierno corporativo responsable de decisiones estratégicas..."
    
    type: [internal|external|system]        # REQUIRED: Actor type
                                           # - internal: Employee, department, role within organization
                                           # - external: Customer, supplier, regulator, partner
                                           # - system: Automated system acting as an actor
    
    category: [individual|group|organization|system] # REQUIRED: Actor category
                                           # - individual: Single person role
                                           # - group: Team or committee
                                           # - organization: External organization
                                           # - system: Automated system

  # ┌─ ORGANIZATIONAL CONTEXT ──────────────┐
  organizational:
    area: Area:[AreaId]                     # OPTIONAL: Organizational area this actor belongs to
                                           # Example: Area:Tecnologia
                                           # Example: Area:Estrategia
    
    level: [strategic|tactical|operational] # REQUIRED: Organizational level
                                           # - strategic: C-level, board, strategic decision makers
                                           # - tactical: Middle management, department heads
                                           # - operational: Individual contributors, specialists
    
    reportsTo: Actor:[SuperiorActorId]      # OPTIONAL: Who this actor reports to
                                           # Example: Actor:DirectorTecnologia
    
    manages:                               # OPTIONAL: Who reports to this actor
      - Actor:[SubordinateActorId]         # Example: Actor:SeniorDeveloper
      - Actor:[SubordinateActorId]         # Example: Actor:QAEngineer
      # Add more subordinates as needed

  # ┌─ RESPONSIBILITIES ────────────────────┐
  responsibilities:
    primary:                               # REQUIRED: Primary responsibilities
      - responsibility: "[Primary responsibility]" # Example: "Definir arquitectura técnica"
        scope: "[Responsibility scope]"    # Example: "Todos los proyectos de desarrollo"
        authority: Authority:[AuthorityId] # Example: Authority:TechLeadAuthority
      # Add more primary responsibilities as needed
    
    secondary:                             # OPTIONAL: Secondary responsibilities
      - responsibility: "[Secondary responsibility]" # Example: "Mentorear desarrolladores junior"
        scope: "[Responsibility scope]"    # Example: "Equipo de desarrollo"
      # Add more secondary responsibilities as needed
    
    accountabilities:                      # REQUIRED: What this actor is accountable for
      - accountability: "[What they're accountable for]" # Example: "Calidad técnica del código"
        measuredBy: Indicator:[IndicatorId] # Example: Indicator:CoberturaPruebas
        target: "[Target value]"           # Example: "> 80% cobertura"
      # Add more accountabilities as needed

  # ┌─ CAPABILITIES ────────────────────────┐
  capabilities:
    required:                              # REQUIRED: Capabilities this actor must have
      - capability: "[Required capability]" # Example: "Arquitectura de software"
        level: [basic|intermediate|advanced|expert] # Example: advanced
        critical: [true|false]             # Whether this capability is critical
      # Add more required capabilities as needed
    
    preferred:                             # OPTIONAL: Preferred additional capabilities
      - capability: "[Preferred capability]" # Example: "Liderazgo técnico"
        level: [basic|intermediate|advanced|expert] # Example: intermediate
      # Add more preferred capabilities as needed
    
    development:                           # OPTIONAL: Capabilities under development
      - capability: "[Developing capability]" # Example: "Cloud architecture"
        currentLevel: [basic|intermediate|advanced|expert] # Example: basic
        targetLevel: [basic|intermediate|advanced|expert]  # Example: intermediate
        timeline: "[Development timeline]"  # Example: "6 meses"
      # Add more development areas as needed

  # ┌─ INTERACTIONS ────────────────────────┐
  interactions:
    internal:                              # REQUIRED: Internal interactions
      - interactsWith: Actor:[ActorId]     # Example: Actor:ProductOwner
        frequency: [daily|weekly|monthly|quarterly|asNeeded] # Example: daily
        purpose: "[Interaction purpose]"   # Example: "Alineación requisitos técnicos"
        channel: "[Communication channel]" # Example: "Daily standup meetings"
      # Add more internal interactions as needed
    
    external:                              # OPTIONAL: External interactions
      - interactsWith: Actor:[ExternalActorId] # Example: Actor:ClientesCorporativos
        frequency: [daily|weekly|monthly|quarterly|asNeeded] # Example: monthly
        purpose: "[Interaction purpose]"   # Example: "Revisión arquitectura soluciones"
        channel: "[Communication channel]" # Example: "Technical review meetings"
      # Add more external interactions as needed
    
    crossArea:                             # OPTIONAL: Cross-area interactions (via Events)
      - communicatesWith: Area:[AreaId]    # Example: Area:Ventas
        via: Event:[EventId]               # Example: Event:SolicitudSoporteTecnico
        purpose: "[Communication purpose]" # Example: "Soporte técnico clientes"
      # Add more cross-area communications as needed

  # ┌─ DECISION AUTHORITY ──────────────────┐
  authority:
    decisionRights:                        # REQUIRED: What decisions this actor can make
      - decision: "[Decision type]"        # Example: "Selección tecnologías desarrollo"
        scope: "[Decision scope]"          # Example: "Proyectos asignados"
        limitations: []                    # Any limitations on decision authority
        escalation: Actor:[EscalationActorId] # Example: Actor:DirectorTecnologia
      # Add more decision rights as needed
    
    approvalRights:                        # OPTIONAL: What this actor can approve
      - approval: "[Approval type]"        # Example: "Pull requests código"
        scope: "[Approval scope]"          # Example: "Repositorios de equipo"
        criteria: []                       # Approval criteria
      # Add more approval rights as needed
    
    budgetAuthority:                       # OPTIONAL: Budget authority if any
      limit: "[Budget limit]"              # Example: "$10,000 USD"
      scope: "[Budget scope]"              # Example: "Herramientas desarrollo"
      approvalRequired: Actor:[ApproverActorId] # Example: Actor:DirectorTecnologia

  # ┌─ PERFORMANCE ─────────────────────────┐
  performance:
    measuredBy:                            # REQUIRED: How this actor's performance is measured
      - metric: "[Performance metric]"     # Example: "Calidad entregas técnicas"
        measurement: Indicator:[IndicatorId] # Example: Indicator:DefectosProduccion
        target: "[Target value]"           # Example: "< 2 defectos por release"
        frequency: "[Measurement frequency]" # Example: "Mensual"
      # Add more performance metrics as needed
    
    reviewProcess:                         # REQUIRED: Performance review process
      frequency: "[Review frequency]"      # Example: "Trimestral"
      reviewedBy: Actor:[ReviewerActorId]  # Example: Actor:DirectorTecnologia
      criteria: []                         # Review criteria
    
    developmentPlan:                       # OPTIONAL: Professional development
      objectives: []                       # Development objectives
      timeline: "[Development timeline]"   # Example: "Anual"
      supportedBy: Actor:[MentorActorId]   # Example: Actor:SeniorArchitect

  # ┌─ SYSTEMS & TOOLS ─────────────────────┐
  systemsAccess:
    required:                              # REQUIRED: Systems this actor needs access to
      - system: "[System name]"            # Example: "GitHub Enterprise"
        accessLevel: "[Access level]"      # Example: "Admin repositorios equipo"
        purpose: "[Why access is needed]"  # Example: "Gestión código fuente"
        grantedBy: Actor:[GrantorActorId]   # Example: Actor:AdministradorSistemas
      # Add more required systems as needed
    
    tools:                                 # REQUIRED: Tools this actor uses
      - tool: "[Tool name]"                # Example: "IntelliJ IDEA"
        purpose: "[Tool purpose]"          # Example: "Desarrollo aplicaciones Java"
        license: "[License type]"          # Example: "Enterprise license"
      # Add more tools as needed

  # ┌─ COMPLIANCE & GOVERNANCE ─────────────┐
  compliance:
    policies:                              # REQUIRED: Policies this actor must follow
      - policy: Policy:[PolicyId]          # Example: Policy:SeguridadInformacion
        compliance: [mandatory|recommended|optional] # Example: mandatory
        training: "[Training requirements]" # Example: "Certificación anual"
      # Add more policies as needed
    
    certifications:                        # OPTIONAL: Required certifications
      - certification: "[Certification name]" # Example: "AWS Solutions Architect"
        level: "[Certification level]"     # Example: "Professional"
        validity: "[Validity period]"      # Example: "3 años"
        renewalRequired: [true|false]      # Example: true
      # Add more certifications as needed

  # ┌─ RELATIONSHIPS ───────────────────────┐
  relationships:
    participatesIn:                        # OPTIONAL: Processes this actor participates in
      - Process:[ProcessId]                # Example: Process:CodeReview
        role: "[Actor's role in process]"  # Example: "Reviewer principal"
    
    implementsPolicies:                    # OPTIONAL: Policies this actor implements
      - Policy:[PolicyId]                  # Example: Policy:CalidadSoftware
    
    supportsVisions:                       # OPTIONAL: Visions this actor supports
      - Vision:[VisionId]                  # Example: Vision:ExcelenciaTecnica
    
    usesAuthority:                         # OPTIONAL: Authority artifacts this actor uses
      - Authority:[AuthorityId]            # Example: Authority:TechLeadAuthority
    
    generatesEvents:                       # OPTIONAL: Events this actor can generate
      - Event:[EventId]                    # Example: Event:CodeReviewCompleted

  # ┌─ CATEGORIZATION ──────────────────────┐
  categorization:
    domain: "[Business Domain]"            # OPTIONAL: Business domain
                                          # Example: "Desarrollo Tecnológico"
    
    function: "[Organizational Function]"  # OPTIONAL: Organizational function
                                          # Example: "Ingeniería"
    
    seniority: [junior|mid|senior|lead|principal|director] # OPTIONAL: Seniority level
    
    employment: [fullTime|partTime|contractor|consultant|external] # OPTIONAL: Employment type

  # ┌─ METADATA ────────────────────────────┐
  metadata:
    version: "1.0.0"                       # Template version
    lastUpdated: "[YYYY-MM-DD]"           # Last update date
    status: [active|inactive|deprecated]   # Actor status
    
    tags: []                              # Optional tags for categorization
    
    notes: >                              # Optional additional notes
      [Any additional context or notes about this actor]

# ────────────────────────────────────────────────────────────────────────────────

# TEMPLATE INSTRUCTIONS:
# 1. Replace ALL [placeholders] with actual values
# 2. Use semantic references: Actor:Name, Area:Name, etc.
# 3. Define clear responsibilities and authority
# 4. Map all interactions and system access
# 5. Ensure compliance requirements are specified
# 6. Validate using SOL extension in VSCode
# 7. Ensure all referenced artifacts exist 