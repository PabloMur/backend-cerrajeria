import { v4 as uuidv4 } from "uuid"

class Gasto {
  private id: string
  private descripcion: string
  private monto: number
  private categoria: string
  private fecha: Date
  private registradoPor: string

  constructor(descripcion: string, monto: number, categoria: string, registradoPor: string) {
    this.id = uuidv4()
    this.descripcion = descripcion
    this.monto = monto
    this.categoria = categoria
    this.fecha = new Date()
    this.registradoPor = registradoPor
  }

  public getId(): string {
    return this.id
  }

  public getMonto(): number {
    return this.monto
  }

  public toString(): string {
    return `Gasto [ID=${this.id}, Descripción=${this.descripcion}, Monto=$${this.monto}, Categoría=${this.categoria}]`
  }
}

export default Gasto
