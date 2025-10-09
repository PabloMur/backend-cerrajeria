import { v4 as uuidv4 } from "uuid"

class Notificacion {
  private id: string
  private usuarioId: string
  private mensaje: string
  private tipo: "sistema" | "servicio" | "factura"
  private fecha: Date
  private leida: boolean

  constructor(usuarioId: string, mensaje: string, tipo: "sistema" | "servicio" | "factura") {
    this.id = uuidv4()
    this.usuarioId = usuarioId
    this.mensaje = mensaje
    this.tipo = tipo
    this.fecha = new Date()
    this.leida = false
  }

  public marcarComoLeida(): void {
    this.leida = true
  }
}

export default Notificacion
