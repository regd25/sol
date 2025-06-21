Procedure:
  id: RecuperacionContraseña
  
  # Bloques fundacionales
  intent:
    statement: >
      Proporcionar un método seguro y eficiente para que los usuarios
      puedan recuperar el acceso a sus cuentas cuando olviden su contraseña
    mode: require
    priority: medium
  
  context:
    scope: Sistema de autenticación de usuarios
    timeframe: proceso-inmediato
    stakeholders: [Usuario, SistemaAutenticacion, SoporteTecnico]
    conditions: [usuario-registrado, email-verificado, sistema-disponible]
  
  authority:
    actor: Administrador de Seguridad TI
    basedOn: Política de Seguridad de Accesos
    level: operational
  
  # Pasos detallados
  steps:
    1:
      action: "Usuario accede a página de login"
      input: "URL del sistema"
      output: "Página de autenticación mostrada"
    
    2:
      action: "Usuario hace clic en 'Olvidé mi contraseña'"
      input: "Click en enlace"
      output: "Formulario de recuperación mostrado"
    
    3:
      action: "Usuario ingresa su email registrado"
      input: "Dirección de email"
      validation: "Email formato válido y existe en sistema"
      output: "Email validado"
    
    4:
      action: "Sistema genera token de recuperación"
      process: "Crear token único con expiración 1 hora"
      output: "Token de recuperación generado"
    
    5:
      action: "Sistema envía email con enlace de recuperación"
      input: "Token + template email"
      output: "Email enviado a usuario"
    
    6:
      action: "Usuario hace clic en enlace del email"
      input: "URL con token"
      validation: "Token válido y no expirado"
      output: "Página cambio contraseña mostrada"
    
    7:
      action: "Usuario ingresa nueva contraseña"
      input: "Nueva contraseña + confirmación"
      validation: "Cumple políticas de seguridad"
      output: "Contraseña actualizada en sistema"
    
    8:
      action: "Sistema confirma cambio exitoso"
      output: "Mensaje confirmación + redirección login"
  
  # Casos de error
  errorHandling:
    email-no-encontrado:
      action: "Mostrar mensaje genérico por seguridad"
      message: "Si el email existe, recibirás instrucciones"
    
    token-expirado:
      action: "Mostrar error y opción reiniciar proceso"
      message: "El enlace ha expirado, solicita uno nuevo"
    
    contraseña-no-cumple-politicas:
      action: "Mostrar requisitos específicos"
      redirect: "Formulario con errores marcados"
  
  # Configuración de seguridad
  security:
    tokenExpiration: "1-hora"
    maxAttempts: "3-por-hora-por-email"
    passwordRequirements: "8+ caracteres, mayúscula, número, símbolo"
    auditLog: "Registrar todos los intentos" 