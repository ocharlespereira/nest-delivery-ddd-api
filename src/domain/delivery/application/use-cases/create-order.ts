import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { Order } from '../../enterprise/entities/order'
import { OrderRepository } from '../repositories/order-repository'

interface CreateOrderUserCaseRequest {
  orderId: string
  deliverymanId: string
  recipientId: string
  product: string
  status: string
}

interface CreateOrderUserCaseResponse {
  order: Order
}

export class CreateOrderUserCase {
  constructor(private orderRepository: OrderRepository) {}

  async execute({
    orderId,
    deliverymanId,
    recipientId,
    product,
    status,
  }: CreateOrderUserCaseRequest): Promise<CreateOrderUserCaseResponse> {
    const order = Order.create({
      orderId: new UniqueEntityID(),
      deliverymanId: new UniqueEntityID(),
      recipientId: new UniqueEntityID(),
      product,
      status,
    })

    await this.orderRepository.create(order)

    return {
      order,
    }
  }
}
