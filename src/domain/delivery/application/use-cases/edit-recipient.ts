import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { RecipientRepository } from '../repositories/recipient-repository'

interface EditRecipientUserCaseRequest {
  recipientId: string
  name: string
  address: string
  phoneNumber: string
}

interface EditRecipientUserCaseResponse {}

export class EditRecipientUserCase {
  constructor(private recipientRepository: RecipientRepository) {}

  async execute({
    recipientId,
    name,
    address,
    phoneNumber,
  }: EditRecipientUserCaseRequest): Promise<EditRecipientUserCaseResponse> {
    const recipient = await this.recipientRepository.findById(recipientId)

    if (!recipient) {
      throw new Error('Recipient not found')
    }

    recipient.name = name
    recipient.address = address
    recipient.phoneNumber = phoneNumber

    await this.recipientRepository.save(recipient)

    return {}
  }
}
