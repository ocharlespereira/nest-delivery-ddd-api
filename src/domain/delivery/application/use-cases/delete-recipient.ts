import { Either, failure, success } from '@/core/either'
import { RecipientRepository } from '../repositories/recipient-repository'
import { ResourceNotFoundError } from './errors/resources-not-found-error'

interface DeleteRecipientUserCaseRequest {
  recipientId: string
}

type DeleteRecipientUserCaseResponse = Either<{}, ResourceNotFoundError>

export class DeleteRecipientUserCase {
  constructor(private recipientRepository: RecipientRepository) {}

  async execute({
    recipientId,
  }: DeleteRecipientUserCaseRequest): Promise<DeleteRecipientUserCaseResponse> {
    const recipient = await this.recipientRepository.findById(recipientId)

    if (!recipient) {
      return failure(new ResourceNotFoundError('Recipient'))
    }

    await this.recipientRepository.delete(recipient)

    return success({})
  }
}
