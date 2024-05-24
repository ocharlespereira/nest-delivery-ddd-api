import { Deliveryman } from '../../enterprise/entities/deliveryman'
import { DeliverymanRepository } from '../repositories/deliveryman-repository'

interface GetDeliverymanByNameUserCaseRequest {
  name: string
}

interface GetDeliverymanByNameUserCaseResponse {
  deliveryman: Deliveryman
}

export class GetDeliverymanByNameUserCase {
  constructor(private deliverymanRepository: DeliverymanRepository) {}

  async execute({
    name,
  }: GetDeliverymanByNameUserCaseRequest): Promise<GetDeliverymanByNameUserCaseResponse> {
    const deliveryman = await this.deliverymanRepository.findByName(name)

    if (!deliveryman) {
      throw new Error('Deliveryman not found')
    }

    return {
      deliveryman,
    }
  }
}
