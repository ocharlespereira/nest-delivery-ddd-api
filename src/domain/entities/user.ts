import { randomUUID } from 'node:crypto';

class User {
  public id: string;
  public name: string;
  public email: string;
  public password: string;
  public rule: string;
  public createdAt?: Date;
  public updatedAt?: Date;

  constructor(
    name: string,
    email: string,
    password: string,
    rule: string,
    createdAt?: Date,
    updatedAt?: Date,
    id?: string
  ) {
    this.id = id ?? randomUUID();
    this.name = name;
    this.email = email;
    this.password = password;
    this.rule = rule;
    this.createdAt = createdAt ?? new Date();
    this.updatedAt = updatedAt ?? new Date();
  }
}
