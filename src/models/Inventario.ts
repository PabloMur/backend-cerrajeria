import { v4 as uuidv4 } from "uuid"

class Inventario {
  private id: string
  private nombre: string
  private cantidad: number
  private unidad: string
  private precioUnitario: number
  private ubicacion: string
  private proveedorId?: string

  constructor(nombre: string, cantidad: number, unidad: string, precioUnitario: number, ubicacion: string, proveedorId?: string) {
    this.id = uuidv4()
    this.nombre = nombre
    this.cantidad = cantidad
    this.unidad = unidad
    this.precioUnitario = precioUnitario
    this.ubicacion = ubicacion
    this.proveedorId = proveedorId
  }

  public restarCantidad(cant: number): void {
    this.cantidad = Math.max(0, this.cantidad - cant)
  }

  public agregarCantidad(cant: number): void {
    this.cantidad += cant
  }
}

export default Inventario
