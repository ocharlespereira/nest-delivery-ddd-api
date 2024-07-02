import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { RecipientRepository } from '../repositories/recipient-repository'
import { Either, failure, success } from '@/core/either'
import { ResourceNotFoundError } from './errors/resources-not-found-error'

interface EditRecipientUserCaseRequest {
  recipientId: string
  name: string
  address: string
  phoneNumber: string
}

type EditRecipientUserCaseResponse = Either< {}, ResourceNotFoundError>

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
      return failure(new ResourceNotFoundError('Recipient'))
    }

    recipient.name = name
    recipient.address = address
    recipient.phoneNumber = phoneNumber

    await this.recipientRepository.save(recipient)

    return success({})
  }
}
