import { DeliverymanRepository } from '../repositories/deliveryman-repository'

interface DeleteDeliverymanUserCaseRequest {
  deliverymanId: string
}

interface DeleteDeliverymanUserCaseResponse {}

export class DeleteDeliverymanUserCase {
  constructor(private deliverymanRepository: DeliverymanRepository) {}

  async execute({
    deliverymanId,
  }: DeleteDeliverymanUserCaseRequest): Promise<DeleteDeliverymanUserCaseResponse> {
    const deliveryman = await this.deliverymanRepository.findById(deliverymanId)

    if (!deliveryman) {
      throw new Error('Deliveryman not found')
    }

    await this.deliverymanRepository.delete(deliveryman)

    return {}
  }
}
