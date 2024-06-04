import { Order } from '../../enterprise/entities/order'
import { OrderRepository } from '../repositories/order-repository'

interface GetOrderStatusUseCaseRequest {
  orderId: string
  status: string
}

interface GetOrderStatusUseCaseResponse {
  order: Order
}

export class GetOrderStatusUseCase {
  constructor(private orderRepository: OrderRepository) {}

  async execute({
    orderId,
    status,
  }: GetOrderStatusUseCaseRequest): Promise<GetOrderStatusUseCaseResponse> {
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
