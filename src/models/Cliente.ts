import { v4 as uuidv4 } from "uuid"
import User from "./User"

class Cliente extends User {
  private direccion: string
  private dni: string
  private metodoPagoFavorito?: string

  constructor(
    name: string,
    email: string,
    direccion: string,
    dni: string,
    metodoPagoFavorito?: string,
    age?: number
  ) {
    super(name, email, age)
    this.direccion = direccion
    this.dni = dni
    this.metodoPagoFavorito = metodoPagoFavorito
  }

  public getDireccion(): string {
    return this.direccion
  }

  public getDni(): string {
    return this.dni
  }

  public getMetodoPagoFavorito(): string | undefined {
    return this.metodoPagoFavorito
  }

  public override toString(): string {
    return `Cliente [ID=${this.getId()}, Nombre=${this.getName()}, Email=${this.getEmail()}, Dirección=${this.direccion}]`
  }
}

export default Cliente
