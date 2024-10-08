import { makeRecipient } from 'test/factories/make-recipient'
import { DeleteRecipientUserCase } from './delete-recipient'
import { InMemoryRecipientRepository } from 'test/repositories/in-memory-recipient-repository'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { ResourceNotFoundError } from './errors/resources-not-found-error'

let inMemoryRecipientRepository: InMemoryRecipientRepository
let sut: DeleteRecipientUserCase

describe('Delete Recipient', () => {
  beforeEach(() => {
    inMemoryRecipientRepository = new InMemoryRecipientRepository()

    sut = new DeleteRecipientUserCase(inMemoryRecipientRepository)
  })

  it('should be able delete a recipient', async () => {
    const newRecipient = makeRecipient({}, new UniqueEntityID('recipient-1'))

    await inMemoryRecipientRepository.create(newRecipient)

    await sut.execute({
      recipientId: 'recipient-1',
    })

    expect(inMemoryRecipientRepository.items.length).toBe(0)
  })

  it('should throw an error when trying to delete a non-existent recipient', async () => {
    const result = await sut.execute({
      recipientId: 'non-existent-recipient',
    })

    expect(result.isFailure()).toBeTruthy()

    expect(result.value).toBeInstanceOf(ResourceNotFoundError)
  })
})
