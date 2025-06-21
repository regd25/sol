Concept:
  id: Cliente
  
  # Bloques fundacionales
  intent:
    statement: >
      Definir de manera clara y unívoca qué constituye un Cliente
      para la organización, estableciendo sus características,
      tipos y relaciones fundamentales
    mode: declare
    priority: high
  
  context:
    scope: Toda la organización y sus operaciones comerciales
    timeframe: permanente
    stakeholders:
      - Equipos comerciales
      - Atención al cliente
      - Marketing
      - Finanzas
      - Producto
      - Legal
    conditions:
      - relaciones-comerciales-activas
      - transacciones-monetarias
      - contratos-servicios-vigentes
      - interacciones-productos-servicios
  
  authority:
    actor: Chief Commercial Officer
    basedOn: Modelo de Negocio Corporativo 2025
    validFrom: 2025-01-01
    level: strategic
  
  # Campos de soporte
  area: Comercial
  tags: [cliente, negocio, comercial, relacion]
  
  # Definición conceptual
  definition: >
    Persona física o jurídica que mantiene o ha mantenido una relación
    comercial con la organización, ya sea a través de la adquisición
    de productos, contratación de servicios, o participación en
    programas comerciales de la empresa.
  
  # Tipos de cliente
  types:
    por-volumen:
      - cliente-corporativo: Empresas con facturación > $100K anual
      - cliente-pyme: Empresas con facturación $10K-$100K anual
      - cliente-individual: Personas físicas y microempresas < $10K anual
    
    por-relacion:
      - cliente-activo: Con transacciones en últimos 12 meses
      - cliente-inactivo: Sin transacciones en últimos 12 meses
      - cliente-prospecto: Interés manifestado, sin transacciones
      - cliente-perdido: Canceló relación comercial
    
    por-canal:
      - cliente-directo: Relación directa con la empresa
      - cliente-partner: A través de socios comerciales
      - cliente-digital: Principalmente canales online
      - cliente-tradicional: Principalmente canales offline
  
  # Atributos fundamentales
  attributes:
    identificacion:
      - id-cliente-unico
      - nombre-razon-social
      - tipo-documento-identidad
      - numero-documento
      - pais-residencia
    
    contacto:
      - email-principal
      - telefono-contacto
      - direccion-fisica
      - preferencias-comunicacion
    
    comercial:
      - fecha-primera-compra
      - fecha-ultima-transaccion
      - valor-total-transacciones
      - productos-servicios-contratados
      - canal-adquisicion
    
    segmentacion:
      - segmento-comercial
      - scoring-crediticio
      - potencial-crecimiento
      - riesgo-churn
  
  # Relaciones con otros conceptos
  relationships:
    - Factura: "Cliente genera Facturas"
    - Proyecto: "Cliente puede tener múltiples Proyectos"
    - Contrato: "Cliente firma Contratos"
    - Producto: "Cliente adquiere Productos"
    - Servicio: "Cliente contrata Servicios"
    - Ticket: "Cliente genera Tickets de soporte"
  
  # Procesos relacionados
  relatedProcesses:
    - OnboardingClientes
    - GestionRelacionCliente
    - AtencionCliente
    - FacturacionCliente
    - RetencionClientes
  
  # Indicadores asociados
  relatedIndicators:
    - NumeroClientesActivos
    - ValorPromedioPorCliente
    - TasaRetencionClientes
    - SatisfaccionCliente
    - TiempoVidaCliente 