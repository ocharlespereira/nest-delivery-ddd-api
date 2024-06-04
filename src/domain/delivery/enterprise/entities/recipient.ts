import { Entity } from '@/core/entities/entity'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { Optional } from '@/core/types/optional'

export interface RecipientProps {
  recipientId?: UniqueEntityID
  name: string
  address: string
  phoneNumber: string
  createdAt: Date
  updatedAt?: Date
}

export class Recipient extends Entity<RecipientProps> {
  get recipientId() {
    return this.props.recipientId
  }

  // set recipientId(recipientId: string) {
  //   this.props.recipientId = recipientId
  //   this.touch()
  // }

  get name() {
    return this.props.name
  }

  set name(name: string) {
    this.props.name = name
    this.touch()
  }

  get address() {
    return this.props.address
  }

  set address(address: string) {
    this.props.address = address
    this.touch()
  }

  get phoneNumber() {
    return this.props.phoneNumber
  }

  set phoneNumber(phoneNumber: string) {
    this.props.phoneNumber = phoneNumber
    this.touch()
  }

  get createdAt() {
    return this.props.createdAt
  }

  get updatedAt() {
    return this.props.updatedAt
  }

  private touch() {
    this.props.updatedAt = new Date()
  }

  static create(
    props: Optional<RecipientProps, 'createdAt'>,
    id?: UniqueEntityID,
  ) {
    const recipient = new Recipient(
      {
        ...props,
        createdAt: new Date(),
      },
      id,
    )

    return recipient
  }
}
