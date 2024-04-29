import { Entity } from '../core/entities/entity';

interface RecipientProps {
  name: string;
  address: string;
  phoneNumber: string;
  createdAt: Date;
  updatedAt?: Date;
}

class Recipient extends Entity<RecipientProps> {}
