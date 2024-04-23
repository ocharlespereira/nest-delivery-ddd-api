import { randomUUID } from 'node:crypto';

export class Order {
  public id: string;

  public deliverymanId: string;
  public recipientId: string;
  public product: string;
  public status: string;
  public createdAt: Date;
  public updatedAt: Date;

  constructor(
    id?: string,
    deliverymanId: string,
    recipientId: string,
    product: string,
    status: string,
    createdAt?: Date,
    updatedAt?: Date
  ) {
    this.id = id ?? randomUUID();
    this.deliverymanId = deliverymanId;
    this.recipientId = recipientId;
    this.product = product;
    this.status = status;
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }
}
