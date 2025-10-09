import { v4 as uuidv4 } from "uuid"

class User {
  private id: string
  private name: string
  private email: string
  private age?: number // opcional

  constructor(name: string, email: string, age?: number) {
    this.id = uuidv4() // genera un UUID único automáticamente
    this.name = name
    this.email = email
    this.age = age
  }

  // Getters
  public getId(): string {
    return this.id
  }

  public getName(): string {
    return this.name
  }

  public getEmail(): string {
    return this.email
  }

  public getAge(): number | undefined {
    return this.age
  }

  // Setters
  public setName(name: string): void {
    this.name = name
  }

  public setEmail(email: string): void {
    this.email = email
  }

  public setAge(age: number): void {
    this.age = age
  }

  // Métodos útiles
  public equals(other: User): boolean {
    return this.id === other.id
  }

  public toString(): string {
    return `User [ID=${this.id}, Name=${this.name}, Email=${this.email}, Age=${this.age ?? "N/A"}]`
  }
}

export default User