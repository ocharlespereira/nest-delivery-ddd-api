import { Entity } from '../core/entities/entity';

interface OrderProps {
  deliverymanId: string;
  recipientId: string;
  product: string;
  status: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export class Order extends Entity<OrderProps> {}
