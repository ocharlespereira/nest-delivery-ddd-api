import { Entity } from '@/core/entities/entity';
import { Optional } from '@/core/types/optional';

interface RecipientProps {
  name: string;
  address: string;
  phoneNumber: string;
  createdAt: Date;
  updatedAt?: Date;
}

class Recipient extends Entity<RecipientProps> {
  get name() {
    return this.props.name;
  }

  set name(name: string) {
    this.props.name = name;
    this.touch();
  }

  get address() {
    return this.props.address;
  }

  set address(address: string) {
    this.props.address = address;
    this.touch();
  }

  get phoneNumber() {
    return this.props.phoneNumber;
  }

  set phoneNumber(phoneNumber: string) {
    this.props.phoneNumber = phoneNumber;
    this.touch();
  }

  get createdAt() {
    return this.props.createdAt;
  }

  get updatedAt() {
    return this.props.updatedAt;
  }

  private touch() {
    this.props.updatedAt = new Date();
  }

  static create(props: Optional<RecipientProps, 'createdAt'>) {
    const recipient = new Recipient({
      ...props,
      createdAt: new Date(),
    });

    return recipient;
  }
}
