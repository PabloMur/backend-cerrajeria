import { v4 as uuidv4 } from "uuid"

export default class Mensaje {
  private id: string
  private remitenteId: string
  private destinatarioId: string
  private contenido: string
  private fecha: Date

  constructor(remitenteId: string, destinatarioId: string, contenido: string) {
    this.id = uuidv4()
    this.remitenteId = remitenteId
    this.destinatarioId = destinatarioId
    this.contenido = contenido
    this.fecha = new Date()
  }

  public toString(): string {
    return `Mensaje [De=${this.remitenteId}, Para=${this.destinatarioId}, Contenido="${this.contenido}", Fecha=${this.fecha.toISOString()}]`
  }
}
