import { makeRecipient } from 'test/factories/make-recipient'
import { EditRecipientUserCase } from './edit-recipient'
import { InMemoryRecipientRepository } from 'test/repositories/in-memory-recipient-repository'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'

let inMemoryRecipientRepository: InMemoryRecipientRepository
let sut: EditRecipientUserCase

describe('Edit Recipient', () => {
  beforeEach(() => {
    inMemoryRecipientRepository = new InMemoryRecipientRepository()

    sut = new EditRecipientUserCase(inMemoryRecipientRepository)
  })

  it('should edit a recipient', async () => {
    const newRecipient = makeRecipient({ recipientId: 'recipient-1' })

    await inMemoryRecipientRepository.create(newRecipient)

    const editRecipient = makeRecipient({}, new UniqueEntityID('recipient-1'))
    console.log('editRecipient :', editRecipient)

    await inMemoryRecipientRepository.save(editRecipient)

    await sut.execute({
      recipientId: newRecipient.id.toString(),
      name: 'new-name',
      address: 'new-address',
      phoneNumber: 'new-phone-number',
    })

    expect(inMemoryRecipientRepository.items[0]).toMatchObject({
      name: 'new-name',
      address: 'new-address',
      phoneNumber: 'new-phone-number',
    })
  })
})
