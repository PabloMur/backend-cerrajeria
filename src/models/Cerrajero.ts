import User from "./User"

class Cerrajero extends User {
  private especialidad: string
  private fechaInicio: Date

  constructor(
    name: string,
    email: string,
    especialidad: string,
    fechaInicio: Date,
    age?: number
  ) {
    super(name, email, age)
    this.especialidad = especialidad
    this.fechaInicio = fechaInicio
  }

  // Getters
  public getEspecialidad(): string {
    return this.especialidad
  }

  public getFechaInicio(): Date {
    return this.fechaInicio
  }

  // Setters
  public setEspecialidad(especialidad: string): void {
    this.especialidad = especialidad
  }

  public setFechaInicio(fechaInicio: Date): void {
    this.fechaInicio = fechaInicio
  }

  // Métodos útiles
  public override toString(): string {
    return `Cerrajero [ID=${this.getId()}, Name=${this.getName()}, Email=${this.getEmail()}, Age=${
      this.getAge() ?? "N/A"
    }, Especialidad=${this.especialidad}, FechaInicio=${this.fechaInicio.toISOString().split("T")[0]}]`
  }
}

export default Cerrajero
