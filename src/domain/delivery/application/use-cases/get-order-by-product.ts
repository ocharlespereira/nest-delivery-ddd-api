import { Either, failure, success } from '@/core/either'
import { Order } from '../../enterprise/entities/order'
import { OrderRepository } from '../repositories/order-repository'
import { ResourceNotFoundError } from './errors/resources-not-found-error'

interface GetOrderByProductUserCaseRequest {
  product: string
}

type GetOrderByProductUserCaseResponse = Either<
  {
    order: Order
  },
  ResourceNotFoundError
>

export class GetOrderByProductUserCase {
  constructor(private orderRepository: OrderRepository) {}

  async execute({
    product,
  }: GetOrderByProductUserCaseRequest): Promise<GetOrderByProductUserCaseResponse> {
    const order = await this.orderRepository.findByProduct(product)

    if (!order) {
      return failure(new ResourceNotFoundError('Order not found'))
    }

    return success({
      order,
    })
  }
}
