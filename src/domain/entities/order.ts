import { Entity } from '../core/entities/entity';
import { Optional } from '../core/types/optional';

interface OrderProps {
  deliverymanId: string;
  recipientId: string;
  product: string;
  status: string;
  createdAt: Date;
  updatedAt?: Date;
}

export class Order extends Entity<OrderProps> {
  static create(props: Optional<OrderProps, 'createdAt'>) {
    const order = new Order({
      ...props,
      createdAt: new Date(),
    });

    return order;
  }
}
