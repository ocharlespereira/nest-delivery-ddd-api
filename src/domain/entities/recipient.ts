import { Entity } from '../core/entities/entity';
import { Optional } from '../core/types/optional';

interface RecipientProps {
  name: string;
  address: string;
  phoneNumber: string;
  createdAt: Date;
  updatedAt?: Date;
}

class Recipient extends Entity<RecipientProps> {
  static create(props: Optional<RecipientProps, 'createdAt'>) {
    const recipient = new Recipient({
      ...props,
      createdAt: new Date(),
    });

    return recipient;
  }
}
