import { Either, failure, success } from '@/core/either'
import { Recipient } from '../../enterprise/entities/recipient'
import { RecipientRepository } from '../repositories/recipient-repository'
import { ResourceNotFoundError } from './errors/resources-not-found-error'

interface GetRecipientByNameUserCaseRequest {
  name: string
}

type GetRecipientByNameUserCaseResponse = Either<
  {
    recipient: Recipient
  },
  ResourceNotFoundError
>

export class GetRecipientByNameUserCase {
  constructor(private recipientRepository: RecipientRepository) {}

  async execute({
    name,
  }: GetRecipientByNameUserCaseRequest): Promise<GetRecipientByNameUserCaseResponse> {
    const recipient = await this.recipientRepository.findByName(name)

    if (!recipient) {
      return failure(new ResourceNotFoundError('Recipient not found'))
    }

    return success({
      recipient,
    })
  }
}
