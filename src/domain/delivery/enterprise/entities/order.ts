import { Entity } from '@/core/entities/entity'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { Optional } from '@/core/types/optional'

export interface OrderProps {
  deliverymanId: UniqueEntityID
  recipientId: UniqueEntityID
  product: string
  status: string
  createdAt: Date
  updatedAt?: Date
}

export class Order extends Entity<OrderProps> {
  get deliverymanId() {
    return this.props.deliverymanId
  }

  get recipientId() {
    return this.props.recipientId
  }

  get product() {
    return this.props.product
  }

  set product(product: string) {
    this.props.product = product
    this.touch()
  }

  get status() {
    return this.props.status
  }

  set status(status: string) {
    this.props.status = status
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

  static create(props: Optional<OrderProps, 'createdAt'>) {
    const order = new Order({
      ...props,
      createdAt: new Date(),
    })

    return order
  }
}
