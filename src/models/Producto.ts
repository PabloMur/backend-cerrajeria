import { v4 as uuidv4 } from "uuid"
import CategoriaProducto from "./CategoriaProducto"

export default class Producto {
  private id: string
  private nombre: string
  private descripcion?: string
  private cantidad: number
  private unidad: string
  private precioUnitario: number
  private categoria?: CategoriaProducto

  constructor(
    nombre: string,
    cantidad: number,
    unidad: string,
    precioUnitario: number,
    descripcion?: string,
    categoria?: CategoriaProducto
  ) {
    this.id = uuidv4()
    this.nombre = nombre
    this.cantidad = cantidad
    this.unidad = unidad
    this.precioUnitario = precioUnitario
    this.descripcion = descripcion
    this.categoria = categoria
  }

  // Getters
  public getId(): string {
    return this.id
  }

  public getNombre(): string {
    return this.nombre
  }

  public getDescripcion(): string | undefined {
    return this.descripcion
  }

  public getCantidad(): number {
    return this.cantidad
  }

  public getUnidad(): string {
    return this.unidad
  }

  public getPrecioUnitario(): number {
    return this.precioUnitario
  }

  public getCategoria(): CategoriaProducto | undefined {
    return this.categoria
  }

  // Setters
  public setNombre(nombre: string): void {
    this.nombre = nombre
  }

  public setDescripcion(descripcion: string): void {
    this.descripcion = descripcion
  }

  public setCantidad(cantidad: number): void {
    this.cantidad = cantidad
  }

  public setUnidad(unidad: string): void {
    this.unidad = unidad
  }

  public setPrecioUnitario(precio: number): void {
    this.precioUnitario = precio
  }

  public setCategoria(categoria: CategoriaProducto): void {
    this.categoria = categoria
  }

  // Métodos útiles
  public agregarCantidad(cantidad: number): void {
    this.cantidad += cantidad
  }

  public reducirCantidad(cantidad: number): void {
    this.cantidad = Math.max(0, this.cantidad - cantidad)
  }

  public toString(): string {
    return `Producto [ID=${this.id}, Nombre=${this.nombre}, Cantidad=${this.cantidad} ${this.unidad}, Precio=$${this.precioUnitario}, Categoría=${this.getNombre() ?? "N/A"}]`
  }
}
