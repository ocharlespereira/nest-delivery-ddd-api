import { Entity } from '../core/entities/entity';

interface UserProps {
  name: string;
  email: string;
  password: string;
  rule: string;
  createdAt?: Date;
  updatedAt?: Date;
}

class User extends Entity<UserProps> {
  constructor(props: UserProps, id?: string) {
    super(props, id);
  }
}
