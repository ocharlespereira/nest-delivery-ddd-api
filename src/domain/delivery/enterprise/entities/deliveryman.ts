import { Entity } from '@/core/entities/entity'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { Optional } from '@/core/types/optional'

export interface DeliverymanProps {
  idUser?: string
  name: string
  vehicle: string
  phoneNumber: string
  createdAt: Date
  updatedAt?: Date
}

export class Deliveryman extends Entity<DeliverymanProps> {
  get idUser() {
    return this.props.idUser
  }

  get name() {
    return this.props.name
  }

  set name(name: string) {
    this.props.name = name
    this.touch()
  }

  get vehicle() {
    return this.props.vehicle
  }

  set vehicle(vehicle: string) {
    this.props.vehicle = vehicle
    this.touch()
  }

  get phoneNumber() {
    return this.props.phoneNumber
  }

  set phoneNumber(phoneNumber: string) {
    this.props.phoneNumber = phoneNumber
    this.touch()
  }

  private touch() {
    this.props.updatedAt = new Date()
  }

  static create(
    props: Optional<DeliverymanProps, 'createdAt'>,
    id?: UniqueEntityID,
  ) {
    const deliveryman = new Deliveryman(
      {
        ...props,
        createdAt: new Date(),
      },
      id,
    )

    return deliveryman
  }
}
