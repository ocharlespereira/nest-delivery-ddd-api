import { Recipient } from '../../enterprise/entities/recipient'
import { RecipientRepository } from '../repositories/recipient-repository'

interface GetRecipientByNameUserCaseRequest {
  name: string
}

interface GetRecipientByNameUserCaseResponse {
  recipient: Recipient
}

export class GetRecipientByNameUserCase {
  constructor(private recipientRepository: RecipientRepository) {}

  async execute({
    name,
  }: GetRecipientByNameUserCaseRequest): Promise<GetRecipientByNameUserCaseResponse> {
    const recipient = await this.recipientRepository.findByName(name)

    if (!recipient) {
      throw new Error('Recipient not found')
    }

    return {
      recipient,
    }
  }
}
