import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { DeliverymanRepository } from '../repositories/deliveryman-repository'

interface EditDeliverymanUserCaseRequest {
  idUser: string
  name: string
  vehicle: string
  phoneNumber: string
}

interface EditDeliverymanUserCaseResponse {}

export class EditDeliverymanUserCase {
  constructor(private deliverymanRepository: DeliverymanRepository) {}

  async execute({
    idUser,
    name,
    vehicle,
    phoneNumber,
  }: EditDeliverymanUserCaseRequest): Promise<EditDeliverymanUserCaseResponse> {
    const deliveryman = await this.deliverymanRepository.findById(idUser)

    if (!deliveryman) {
      throw new Error('Deliveryman not found')
    }

    deliveryman.name = name
    deliveryman.vehicle = vehicle
    deliveryman.phoneNumber = phoneNumber

    await this.deliverymanRepository.save(deliveryman)

    return {}
  }
}
