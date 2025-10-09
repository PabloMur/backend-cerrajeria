import { v4 as uuidv4 } from "uuid"

class Vehiculo {
  private id: string
  private patente: string
  private modelo: string
  private anio: number
  private mantenimientoProximo: Date
  private cerrajeroId: string

  constructor(patente: string, modelo: string, anio: number, cerrajeroId: string, mantenimientoProximo?: Date) {
    this.id = uuidv4()
    this.patente = patente
    this.modelo = modelo
    this.anio = anio
    this.cerrajeroId = cerrajeroId
    this.mantenimientoProximo = mantenimientoProximo ?? new Date()
  }

  public getId(): string {
    return this.id
  }

  public getPatente(): string {
    return this.patente
  }

  public getModelo(): string {
    return this.modelo
  }
}

export default Vehiculo
