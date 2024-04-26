import { Entity } from '../core/entities/entity';

interface RecipientProps {
  name: string;
  address: string;
  phoneNumber: string;
}

class Recipient extends Entity<RecipientProps> {}
