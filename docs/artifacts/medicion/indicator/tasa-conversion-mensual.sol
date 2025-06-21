Indicator:
  id: TasaConversionMensual
  
  # Bloques fundacionales
  intent:
    statement: >
      Medir el porcentaje de visitantes que completan una acción deseada
      (registro, compra, suscripción) durante un período mensual
      para evaluar la efectividad de nuestros canales de conversión
    mode: declare
    priority: high
  
  context:
    scope: Canales digitales y procesos de conversión
    timeframe: medicion-mensual
    stakeholders: [EquipoMarketing, EquipoVentas, EquipoProducto, Directivos]
    conditions: [trafico-web-activo, sistema-analytics-funcionando, objetivos-definidos]
  
  evaluation:
    expected: indicador preciso y actualizado mensualmente
    method: cálculo automático basado en datos de analytics
    criteria:
      - metric: precision-calculo
        threshold: "> 99%"
      - metric: disponibilidad-datos
        threshold: "= 100%"
      - metric: actualizacion-puntual
        threshold: "< 2-dias-post-mes"
    frequency: mensual
  
  authority:
    actor: Director de Marketing Digital
    basedOn: Framework de Métricas de Negocio 2025
    validFrom: 2025-01-01
    level: tactical
  
  # Campos de soporte
  area: MarketingDigital
  tags: [conversion, marketing, ventas, kpi]
  
  # Definición del indicador
  definition:
    formula: "(Conversiones / Visitantes Únicos) * 100"
    unit: "Porcentaje (%)"
    type: "KPI de eficiencia"
    category: "Marketing y Ventas"
  
  # Configuración de medición
  measurement:
    dataSource: "Google Analytics + CRM"
    frequency: "Mensual"
    calculationMethod: "Automática"
    reportingDay: "5to día hábil del mes siguiente"
    
    numerator:
      name: "Conversiones"
      definition: "Usuarios que completaron acción objetivo"
      sources: [CRM, EventTracking, FormSubmissions]
    
    denominator:
      name: "Visitantes Únicos"
      definition: "Usuarios únicos que visitaron el sitio"
      sources: [GoogleAnalytics, WebAnalytics]
  
  # Umbrales y targets
  thresholds:
    excellent: "> 5%"
    good: "3-5%"
    acceptable: "1-3%"
    poor: "< 1%"
    
  targets:
    current-year: "3.5%"
    next-quarter: "4.0%"
    annual-goal: "5.0%"
  
  # Segmentación
  segments:
    - canal-organico
    - canal-pagado
    - canal-social
    - canal-email
    - canal-directo
    
    por-dispositivo:
      - desktop
      - mobile
      - tablet
    
    por-region:
      - latam
      - norteamerica
      - europa
  
  # Acciones basadas en resultados
  actionTriggers:
    if-below-1-percent:
      - revisar-experiencia-usuario
      - analizar-embudo-conversion
      - evaluar-propuesta-valor
    
    if-above-5-percent:
      - escalar-inversion-canal
      - replicar-mejores-practicas
      - aumentar-targets-siguiente-periodo
  
  # Reportes y dashboards
  reporting:
    dashboard: "Marketing Performance Dashboard"
    frequency: "Actualización diaria, reporte mensual"
    stakeholders: [CMO, VentasDirector, ProductoDirector]
    format: ["Dashboard interactivo", "Reporte PDF", "Presentación ejecutiva"]
  
  # Indicadores relacionados
  relatedIndicators:
    - CostoAdquisicionCliente
    - ValorVidaCliente
    - TasaRetencionClientes
    - ROIMarketing
    - TiempoConversion 