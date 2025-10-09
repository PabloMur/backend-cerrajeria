import { v4 as uuidv4 } from "uuid"

export default class CategoriaProducto {
  private id: string
  private nombre: string
  private descripcion?: string

  constructor(nombre: string, descripcion?: string) {
    this.id = uuidv4()
    this.nombre = nombre
    this.descripcion = descripcion
  }

  public toString(): string {
    return `CategoríaProducto [Nombre=${this.nombre}, Descripción=${this.descripcion ?? "N/A"}]`
  }
}
