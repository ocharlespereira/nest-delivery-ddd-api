import { Either, failure, success } from '@/core/either'
import { Order } from '../../enterprise/entities/order'
import { OrderRepository } from '../repositories/order-repository'
import { StatusError } from './errors/status-error'

interface OrderStatusUseCaseRequest {
  orderId: string
  status: 'waiting' | 'in-transit' | 'delivered' | 'canceled'
}

type OrderStatusUseCaseResponse = Either<
  {
    order: Order
  },
  StatusError
>

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

    const validStatuses = ['waiting', 'in-transit', 'delivered', 'canceled']

    if (!validStatuses.includes(status)) {
      return failure(new StatusError())
    }

    order.status = status

    await this.orderRepository.save(order)

    return success({
      order,
    })
  }
}
