import { DeliverymanRepository } from '../repositories/deliveryman-repository'
import { Either, failure, success } from '@/core/either'
import { ResourceNotFoundError } from './errors/resources-not-found-error'

interface EditDeliverymanUserCaseRequest {
  deliverymanId: string
  name: string
  vehicle: string
  phoneNumber: string
}

type EditDeliverymanUserCaseResponse = Either<{}, ResourceNotFoundError>

export class EditDeliverymanUserCase {
  constructor(private deliverymanRepository: DeliverymanRepository) {}

  async execute({
    deliverymanId,
    name,
    vehicle,
    phoneNumber,
  }: EditDeliverymanUserCaseRequest): Promise<EditDeliverymanUserCaseResponse> {
    const deliveryman = await this.deliverymanRepository.findById(deliverymanId)

    if (!deliveryman) {
      return failure(new ResourceNotFoundError('Deliveryman'))
    }

    deliveryman.name = name
    deliveryman.vehicle = vehicle
    deliveryman.phoneNumber = phoneNumber

    await this.deliverymanRepository.save(deliveryman)

    return success({})
  }
}
