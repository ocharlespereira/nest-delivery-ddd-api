class User {
  public email: string;
  public name: string;
  public password: string;
  public isAdmin: boolean;

  constructor(
    email: string,
    name: string,
    password: string,
    isAdmin: boolean = false
  ) {
    this.email = email;
    this.name = name;
    this.password = password;
    this.isAdmin = isAdmin;
  }
}
