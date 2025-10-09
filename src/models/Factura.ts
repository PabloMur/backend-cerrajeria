import { v4 as uuidv4 } from "uuid"

class Factura {
  private id: string
  private servicioId: string
  private clienteId: string
  private montoFinal: number
  private metodoPago: "efectivo" | "tarjeta" | "transferencia" | "QR"
  private fechaEmision: Date
  private pagado: boolean

  constructor(servicioId: string, clienteId: string, montoFinal: number, metodoPago: "efectivo" | "tarjeta" | "transferencia" | "QR") {
    this.id = uuidv4()
    this.servicioId = servicioId
    this.clienteId = clienteId
    this.montoFinal = montoFinal
    this.metodoPago = metodoPago
    this.fechaEmision = new Date()
    this.pagado = false
  }

  public marcarComoPagado(): void {
    this.pagado = true
  }

  public getId(): string {
    return this.id
  }

  public isPagado(): boolean {
    return this.pagado
  }
}

export default Factura
