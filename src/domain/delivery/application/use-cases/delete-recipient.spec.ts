import { makeRecipient } from 'test/factories/make-recipient'
import { DeleteRecipientUserCase } from './delete-recipient'
import { InMemoryRecipientRepository } from 'test/repositories/in-memory-recipient-repository'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'

let inMemoryRecipientRepository: InMemoryRecipientRepository
let sut: DeleteRecipientUserCase

describe('Delete Recipient', () => {
  beforeEach(() => {
    inMemoryRecipientRepository = new InMemoryRecipientRepository()

    sut = new DeleteRecipientUserCase(inMemoryRecipientRepository)
  })

  it('should delete a recipient', async () => {
    const newRecipient = makeRecipient({}, new UniqueEntityID('recipient-1'))

    await inMemoryRecipientRepository.create(newRecipient)

    await sut.execute({
      recipientId: 'recipient-1',
    })

    expect(inMemoryRecipientRepository.items.length).toBe(0)
  })
})
