import { randomUUID } from 'node:crypto';

interface OrderProps {
  deliverymanId: string;
  recipientId: string;
  product: string;
  status: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export class Order {
  public id: string;
  public deliverymanId: string;
  public recipientId: string;
  public product: string;
  public status: string;
  public createdAt: Date;
  public updatedAt: Date;

  constructor(props: OrderProps, id?: string) {
    this.id = id ?? randomUUID();
    this.deliverymanId = props.deliverymanId;
    this.recipientId = props.recipientId;
    this.product = props.product;
    this.status = props.status;
    this.createdAt = props.createdAt ?? new Date();
    this.updatedAt = props.updatedAt ?? new Date();
  }
}
