import { Order } from '../../enterprise/entities/order'
import { OrderRepository } from '../repositories/order-repository'

interface GetOrderByProductUserCaseRequest {
  product: string
}

interface GetOrderByProductUserCaseResponse {
  order: Order
}

export class GetOrderByProductUserCase {
  constructor(private orderRepository: OrderRepository) {}

  async execute({
    product,
  }: GetOrderByProductUserCaseRequest): Promise<GetOrderByProductUserCaseResponse> {
    const order = await this.orderRepository.findByProduct(product)

    if (!order) {
      throw new Error('Order not found')
    }

    return {
      order,
    }
  }
}
