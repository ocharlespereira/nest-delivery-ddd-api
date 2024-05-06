import { Entity } from '@/core/entities/entity';
import { Optional } from '@/core/types/optional';

interface UserProps {
  name: string;
  email: string;
  password: string;
  rule: string;
  createdAt: Date;
  updatedAt?: Date;
}

export class User extends Entity<UserProps> {
  get name() {
    return this.props.name;
  }

  set name(name: string) {
    this.props.name = name;
    this.touch();
  }

  get email() {
    return this.props.email;
  }

  set email(email: string) {
    this.props.email = email;
    this.touch();
  }

  get password() {
    return this.props.password;
  }

  get rule() {
    return this.props.rule;
  }

  set rule(rule: string) {
    this.props.rule = rule;
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

  static create(props: Optional<UserProps, 'createdAt'>) {
    const user = new User({
      ...props,
      createdAt: new Date(),
    });

    return user;
  }
}
