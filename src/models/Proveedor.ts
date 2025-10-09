import { v4 as uuidv4 } from "uuid"

class Proveedor {
  private id: string
  private nombre: string
  private telefono: string
  private email: string
  private direccion: string

  constructor(nombre: string, telefono: string, email: string, direccion: string) {
    this.id = uuidv4()
    this.nombre = nombre
    this.telefono = telefono
    this.email = email
    this.direccion = direccion
  }

  public getNombre(): string {
    return this.nombre
  }

  public getId(): string {
    return this.id
  }
}

export default Proveedor
