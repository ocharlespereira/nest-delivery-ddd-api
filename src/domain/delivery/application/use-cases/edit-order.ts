import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { OrderRepository } from '../repositories/order-repository'
import { Either, failure } from '@/core/either'
import { ResourceNotFoundError } from './errors/resources-not-found-error'

interface EditOrderUserCaseRequest {
  orderId: string
  product: string
  status: string
}

type EditOrderUserCaseResponse = Either< {}, ResourceNotFoundError>

export class EditOrderUserCase {
  constructor(private orderRepository: OrderRepository) {}

  async execute({
    orderId,
    product,
    status,
  }: EditOrderUserCaseRequest): Promise<EditOrderUserCaseResponse> {
    const order = await this.orderRepository.findById(orderId)

    if (!order) {
      return failure(new ResourceNotFoundError('Order'))
    }

    order.product = product
    order.status = status

    await this.orderRepository.save(order)

    return success({})
  }
}
