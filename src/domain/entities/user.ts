import { randomUUID } from 'node:crypto';

class User {
  public id: string;
  public name: string;
  public email: string;
  public password: string;
  public rule: string;
  public createdAt?: string;
  public updatedAt?: string;

  constructor(
    id?: string,
    name: string,
    email: string,
    password: string,
    rule: string,
    createdAt?: string,
    updatedAt?: string
  ) {
    this.id = id ?? randomUUID();
    this.name = name;
    this.email = email;
    this.password = password;
    this.rule = rule;
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }
}
