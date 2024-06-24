import { Either, failure, success } from '@/core/either'
import { DeliverymanRepository } from '../repositories/deliveryman-repository'
import { ResourceNotFoundError } from './errors/resources-not-found-error'

interface DeleteDeliverymanUserCaseRequest {
  deliverymanId: string
}

type DeleteDeliverymanUserCaseResponse = Either<null, ResourceNotFoundError>

export class DeleteDeliverymanUserCase {
  constructor(private deliverymanRepository: DeliverymanRepository) {}

  async execute({
    deliverymanId,
  }: DeleteDeliverymanUserCaseRequest): Promise<DeleteDeliverymanUserCaseResponse> {
    const deliveryman = await this.deliverymanRepository.findById(deliverymanId)

    if (!deliveryman) {
      return failure(new ResourceNotFoundError('Deliveryman'))
    }

    await this.deliverymanRepository.delete(deliveryman)

    return success(null)
  }
}
