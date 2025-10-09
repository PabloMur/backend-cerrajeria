import { v4 as uuidv4 } from "uuid"

class Presupuesto {
  private id: string
  private servicioId: string
  private montoEstimado: number
  private detalleMateriales: string
  private validezHasta: Date
  private aceptado: boolean

  constructor(servicioId: string, montoEstimado: number, detalleMateriales: string, diasValidez: number = 7) {
    this.id = uuidv4()
    this.servicioId = servicioId
    this.montoEstimado = montoEstimado
    this.detalleMateriales = detalleMateriales
    this.validezHasta = new Date(Date.now() + diasValidez * 24 * 60 * 60 * 1000)
    this.aceptado = false
  }

  public aceptar(): void {
    this.aceptado = true
  }

  public getId(): string {
    return this.id
  }

  public getMonto(): number {
    return this.montoEstimado
  }

  public isAceptado(): boolean {
    return this.aceptado
  }
}

export default Presupuesto
