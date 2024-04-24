import { randomUUID } from 'node:crypto';

interface DeliverymanProps {
  idUser?: string;
  name: string;
  vehicle: string;
  phoneNumber: string;
}

export class Deliveryman {
  public id: string;
  public idUser: string;
  public name: string;
  public vehicle: string;
  public phoneNumber: string;

  constructor(props: DeliverymanProps, id?: string) {
    this.id = id ?? randomUUID();
    this.idUser = props.idUser ?? randomUUID();
    this.name = props.name;
    this.vehicle = props.vehicle;
    this.phoneNumber = props.phoneNumber;
  }
}
