import { randomUUID } from 'node:crypto';

class Recipient {
  public id: string;
  public name: string;
  public vehicle: string;
  public phoneNumber: string;

  constructor(id?: string, name: string, vehicle: string, phoneNumber: string) {
    this.id = id ?? randomUUID();
    this.name = name;
    this.vehicle = vehicle;
    this.phoneNumber = phoneNumber;
  }
}
