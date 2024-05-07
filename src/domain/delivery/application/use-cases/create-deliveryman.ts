import { Deliveryman } from '@domain/delivery/enterprise/entities/deliveryman'
import { DeliverymanRepository } from '@domain/delivery/application/repositories/deliveryman-repository'

interface CreateDeliverymanUseCaseRequest {
  name: string
  vehicle: string
  phoneNumber: string
}

interface CreateDeliverymanUseCaseResponse {
  deliveryman: Deliveryman
}

export class CreateDeliverymanUseCase {
  constructor(private deliverymanRepository: DeliverymanRepository) {}

  async execute({
    name,
    vehicle,
    phoneNumber,
  }: CreateDeliverymanUseCaseRequest): Promise<CreateDeliverymanUseCaseResponse> {
    const deliveryman = Deliveryman.create({
      name,
      vehicle,
      phoneNumber,
    })

    await this.deliverymanRepository.create(deliveryman)

    return { deliveryman }
  }
}
