import { Either, failure, success } from '@/core/either'
import { OrderRepository } from '../repositories/order-repository'
import { ResourceNotFoundError } from './errors/resources-not-found-error'

interface DeleteOrderUserCaseRequest {
  orderId: string
}

type DeleteOrderUserCaseResponse = Either<{}, ResourceNotFoundError>

export class DeleteOrderUserCase {
  constructor(private orderRepository: OrderRepository) {}

  async execute({
    orderId,
  }: DeleteOrderUserCaseRequest): Promise<DeleteOrderUserCaseResponse> {
    const order = await this.orderRepository.findById(orderId)

    if (!order) {
      return failure(new ResourceNotFoundError('Order'))
    }

    await this.orderRepository.delete(order)

    return success({})
  }
}
