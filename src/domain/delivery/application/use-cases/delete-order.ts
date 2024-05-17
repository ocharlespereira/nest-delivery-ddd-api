import { OrderRepository } from '../repositories/order-repository'

interface DeleteOrderUserCaseRequest {
  orderId: string
}

interface DeleteOrderUserCaseResponse {}

export class DeleteOrderUserCase {
  constructor(private orderRepository: OrderRepository) {}

  async execute({
    orderId,
  }: DeleteOrderUserCaseRequest): Promise<DeleteOrderUserCaseResponse> {
    const order = await this.orderRepository.findById(orderId)

    if (!order) {
      throw new Error('Order not found')
    }

    await this.orderRepository.delete(order)

    return {}
  }
}
