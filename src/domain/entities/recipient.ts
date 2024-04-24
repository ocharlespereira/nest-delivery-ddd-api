import { randomUUID } from 'node:crypto';

interface RecipientProps {
  name: string;
  address: string;
  phoneNumber: string;
}

class Recipient {
  public id: string;
  public name: string;
  public address: string;
  public phoneNumber: string;

  constructor(props: RecipientProps, id?: string) {
    this.id = id ?? randomUUID();
    this.name = props.name;
    this.address = props.address;
    this.phoneNumber = props.phoneNumber;
  }
}
