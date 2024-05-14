import { Recipient } from '../../enterprise/entities/recipient'
import { RecipientRepository } from '../repositories/recipient-repository'

// criar class constructor com typagem request e response
interface CreateRecipientUseCaseRequest {
  name: string
  address: string
  phoneNumber: string
}

interface CreateRecipientUseCaseResponse {
  recipient: Recipient
}

export class CreateRecipientUseCase {
  constructor(private recipientRepository: RecipientRepository) {}

  async execute({
    name,
    address,
    phoneNumber,
  }: CreateRecipientUseCaseRequest): Promise<CreateRecipientUseCaseResponse> {
    const recipient = Recipient.create({ name, address, phoneNumber })

    await this.recipientRepository.create(recipient)

    return { recipient }
  }
}
