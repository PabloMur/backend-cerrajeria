import { v4 as uuidv4 } from "uuid"

class Servicio {
  private id: string
  private tipo: string
  private descripcion: string
  private precioBase: number
  private estado: "pendiente" | "en curso" | "completado" | "cancelado"
  private fechaSolicitud: Date
  private fechaFinalizacion?: Date
  private clienteId: string
  private cerrajeroId?: string
  private ubicacion: string
  private notas?: string

  constructor(
    tipo: string,
    descripcion: string,
    precioBase: number,
    clienteId: string,
    ubicacion: string,
    cerrajeroId?: string,
    notas?: string
  ) {
    this.id = uuidv4()
    this.tipo = tipo
    this.descripcion = descripcion
    this.precioBase = precioBase
    this.estado = "pendiente"
    this.fechaSolicitud = new Date()
    this.clienteId = clienteId
    this.cerrajeroId = cerrajeroId
    this.ubicacion = ubicacion
    this.notas = notas
  }

  public completarServicio(): void {
    this.estado = "completado"
    this.fechaFinalizacion = new Date()
  }

  public cancelarServicio(): void {
    this.estado = "cancelado"
  }

  public getId(): string {
    return this.id
  }

  public getEstado(): string {
    return this.estado
  }

  public toString(): string {
    return `Servicio [ID=${this.id}, Tipo=${this.tipo}, Estado=${this.estado}, Cliente=${this.clienteId}]`
  }
}

export default Servicio
