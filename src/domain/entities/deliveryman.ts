import { Entity } from '../core/entities/entity';

interface DeliverymanProps {
  idUser?: string;
  name: string;
  vehicle: string;
  phoneNumber: string;
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

  constructor(props: DeliverymanProps, id?: string) {
    super(props, id);
  }
}
