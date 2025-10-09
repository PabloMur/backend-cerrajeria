import { v4 as uuidv4 } from "uuid"

class Turno {
  private id: string
  private fechaHora: Date
  private servicioId: string
  private cerrajeroId: string
  private estado: "confirmado" | "reprogramado" | "cancelado"

  constructor(fechaHora: Date, servicioId: string, cerrajeroId: string) {
    this.id = uuidv4()
    this.fechaHora = fechaHora
    this.servicioId = servicioId
    this.cerrajeroId = cerrajeroId
    this.estado = "confirmado"
  }

  public reprogramar(nuevaFecha: Date): void {
    this.fechaHora = nuevaFecha
    this.estado = "reprogramado"
  }

  public cancelar(): void {
    this.estado = "cancelado"
  }
}

export default Turno
