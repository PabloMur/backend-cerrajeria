import User from "./User"
class Admin extends User {
  private role: string
  private permissions: string[]
  private lastLogin?: Date
  private active: boolean

  constructor(
    name: string,
    email: string,
    role: string = "admin",
    permissions: string[] = [],
    age?: number
  ) {
    super(name, email, age)
    this.role = role
    this.permissions = permissions
    this.active = true
  }

  public getRole(): string {
    return this.role
  }

  public getPermissions(): string[] {
    return this.permissions
  }

  public setPermissions(permissions: string[]): void {
    this.permissions = permissions
  }

  public getLastLogin(): Date | undefined {
    return this.lastLogin
  }

  public setLastLogin(date: Date): void {
    this.lastLogin = date
  }

  public deactivate(): void {
    this.active = false
  }

  public activate(): void {
    this.active = true
  }

  public isActive(): boolean {
    return this.active
  }

  public override toString(): string {
    return `Admin [ID=${this.getId()}, Name=${this.getName()}, Email=${this.getEmail()}, Role=${this.role}, Active=${this.active}]`
  }
}
