import { RecipientRepository } from '../repositories/recipient-repository'

interface DeleteRecipientUserCaseRequest {
  recipientId: string
}

interface DeleteRecipientUserCaseResponse {}

export class DeleteRecipientUserCase {
  constructor(private recipientRepository: RecipientRepository) {}

  async execute({
    recipientId,
  }: DeleteRecipientUserCaseRequest): Promise<DeleteRecipientUserCaseResponse> {
    const recipient = await this.recipientRepository.findById(recipientId)

    if (!recipient) {
      throw new Error('Recipient not found')
    }

    await this.recipientRepository.delete(recipient)

    return {}
  }
}
