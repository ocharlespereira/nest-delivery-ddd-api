import { Entity } from '../core/entities/entity';
import { Optional } from '../core/types/optional';

interface UserProps {
  name: string;
  email: string;
  password: string;
  rule: string;
  createdAt: Date;
  updatedAt?: Date;
}

class User extends Entity<UserProps> {
  static create(props: Optional<UserProps, 'createdAt'>) {
    const user = new User({
      ...props,
      createdAt: new Date(),
    });

    return user;
  }
}
