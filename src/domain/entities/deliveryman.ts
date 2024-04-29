import { Entity } from '../core/entities/entity';
import { UniqueEntityID } from '../core/entities/unique-entity-id';
import { Optional } from '../core/types/optional';

interface DeliverymanProps {
  idUser?: string;
  name: string;
  vehicle: string;
  phoneNumber: string;
  createdAt: Date;
  updatedAt?: Date;
}

export class Deliveryman extends Entity<DeliverymanProps> {
  get idUser() {
    return this.props.idUser;
  }

  get name() {
    return this.props.name;
  }

  get vehicle() {
    return this.props.vehicle;
  }

  get phoneNumber() {
    return this.props.phoneNumber;
  }

  static create(
    props: Optional<DeliverymanProps, 'createdAt'>,
    id?: UniqueEntityID
  ) {
    const deliveryman = new Deliveryman(
      {
        ...props,
        createdAt: new Date(),
      },
      id
    );

    return deliveryman;
  }
}
