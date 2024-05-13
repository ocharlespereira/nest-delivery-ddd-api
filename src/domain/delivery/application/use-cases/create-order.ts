import { Order } from '../../enterprise/entities/order'
import { OrderRepository } from '../repositories/order-repository'

interface CreateOrderUserCaseRequest {
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
    deliverymanId,
    recipientId,
    product,
    status,
  }: CreateOrderUserCaseRequest): Promise<CreateOrderUserCaseResponse> {
    const order = Order.create({
      deliverymanId,
      recipientId,
      product,
      status,
    })

    await this.orderRepository.create(order)

    return {
      order,
    }
  }
}
