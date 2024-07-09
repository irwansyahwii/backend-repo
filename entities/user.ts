export class User {
  id: string | null = null;
  firstName: string = "";
  lastName: string = "";
  role: string = "";
  email: string = "";

  constructor(id: string | null, firstName: string, lastName: string, role: string, email: string){
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.role = role;
    this.email = email;
  }

  public get Id(): string | null{
    return this.id;
  }

  public get FirstName(): string {
    return this.firstName;
  }
  public get LastName(): string {
    return this.lastName;
  }
  public get Role(): string {
    return this.role;
  }
  public get Email(): string {
    return this.email;
  }

}