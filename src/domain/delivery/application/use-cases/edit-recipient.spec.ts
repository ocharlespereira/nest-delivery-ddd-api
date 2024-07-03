import { makeRecipient } from 'test/factories/make-recipient'
import { EditRecipientUserCase } from './edit-recipient'
import { InMemoryRecipientRepository } from 'test/repositories/in-memory-recipient-repository'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { ResourceNotFoundError } from './errors/resources-not-found-error'

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

  it('should throw an error when trying to edit a non-existent recipient', async () => {
    const nonExistentRecipientId = 'non-existent-recipient'

    const result = await sut.execute({
      recipientId: nonExistentRecipientId,
      name: 'new-name',
      phoneNumber: 'new-phone-number',
      address: 'new-address',
    })

    expect(result.isFailure()).toBeTruthy()
    expect(result.value).toBeInstanceOf(ResourceNotFoundError)
  })
})
