import { randomUUID } from 'node:crypto';

export class Order {
  public id: string;
  public nameProdcut: string;
  public quantity: number;

  constructor(id?: string, nameProdcut: string, quantity: number) {
    this.id = id ?? randomUUID();
    this.nameProdcut = nameProdcut;
    this.quantity = quantity;
  }
}
