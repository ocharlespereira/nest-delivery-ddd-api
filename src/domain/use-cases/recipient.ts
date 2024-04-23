import { randomUUID } from 'node:crypto';

class Recipient {
  public id: string;
  public name: string;
  public address: string;

  constructor(id?: string, name: string, address: string) {
    this.id = id ?? randomUUID();
    this.name = name;
    this.address = address;
  }
}
