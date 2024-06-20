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

    await expect(
      sut.execute({
        recipientId: nonExistentRecipientId,
        name: 'new-name',
        address: 'new-address',
      }),
    ).rejects.toThrow('Recipient not found')

    expect(inMemoryRecipientRepository.items.length).toBe(0)
  })

  it('should throw an error if the recipient is not found', async () => {
    const nonExistentRecipientId = 'non-existent-recipient'

    await expect(
      sut.execute({
        deliverymanId: 'valid-deliveryman-id',
        recipientId: nonExistentRecipientId,
        product: 'product',
        status: 'status',
      }),
    ).rejects.toThrow('Recipient not found')
  })
})
