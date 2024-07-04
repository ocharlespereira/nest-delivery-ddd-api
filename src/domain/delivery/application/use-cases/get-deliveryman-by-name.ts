import { Either, failure, success } from '@/core/either'
import { Deliveryman } from '../../enterprise/entities/deliveryman'
import { DeliverymanRepository } from '../repositories/deliveryman-repository'
import { ResourceNotFoundError } from './errors/resources-not-found-error'

interface GetDeliverymanByNameUserCaseRequest {
  name: string
}

type GetDeliverymanByNameUserCaseResponse = Either<
  {
    deliveryman: Deliveryman
  },
  ResourceNotFoundError
>

export class GetDeliverymanByNameUserCase {
  constructor(private deliverymanRepository: DeliverymanRepository) {}

  async execute({
    name,
  }: GetDeliverymanByNameUserCaseRequest): Promise<GetDeliverymanByNameUserCaseResponse> {
    const deliveryman = await this.deliverymanRepository.findByName(name)

    if (!deliveryman) {
      return failure(new ResourceNotFoundError('Deliveryman not found'))
    }

    return success({
      deliveryman,
    })
  }
}
