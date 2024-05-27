import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { OrderRepository } from '../repositories/order-repository'

interface EditOrderUserCaseRequest {
  orderId: string
  product: string
  status: string
}

interface EditOrderUserCaseResponse {}

export class EditOrderUserCase {
  constructor(private orderRepository: OrderRepository) {}

  async execute({
    orderId,
    product,
    status,
  }: EditOrderUserCaseRequest): Promise<EditOrderUserCaseResponse> {
    const order = await this.orderRepository.findById(orderId)

    if (!order) {
      throw new Error('Order not found')
    }

    order.product = product
    order.status = status

    await this.orderRepository.save(order)

    return {}
  }
}
