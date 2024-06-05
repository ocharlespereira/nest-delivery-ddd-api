import { Order } from '../../enterprise/entities/order'
import { OrderRepository } from '../repositories/order-repository'

interface OrderStatusUseCaseRequest {
  orderId: string
  status: 'waiting' | 'in-transit' | 'delivered' | 'canceled'
}

interface OrderStatusUseCaseResponse {
  order: Order
}

export class OrderStatusUseCase {
  constructor(private orderRepository: OrderRepository) {}

  async execute({
    orderId,
    status,
  }: OrderStatusUseCaseRequest): Promise<OrderStatusUseCaseResponse> {
    const order = await this.orderRepository.findById(orderId)

    if (!order) {
      throw new Error('Order not found')
    }

    order.status = status

    await this.orderRepository.save(order)

    return {
      order,
    }
  }
}
