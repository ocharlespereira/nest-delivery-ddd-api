import { makeRecipient } from 'test/factories/make-recipient'
import { GetRecipientByNameUserCase } from './get-recipient-by-name'
import { InMemoryRecipientRepository } from 'test/repositories/in-memory-recipient-repository'

let inMemoryRecipientRepository: InMemoryRecipientRepository
let sut: GetRecipientByNameUserCase

describe('Get Recipient', () => {
  beforeEach(() => {
    inMemoryRecipientRepository = new InMemoryRecipientRepository()

    sut = new GetRecipientByNameUserCase(inMemoryRecipientRepository)
  })

  it('should be able to get a name by recipient', async () => {
    const newRecipient = makeRecipient({ name: 'new name' })

    await inMemoryRecipientRepository.create(newRecipient)

    const { recipient } = await sut.execute({
      name: 'new name',
    })

    expect(recipient.id).toBeTruthy()
  })

  it('should throw an error if the recipient is not found', async () => {
    await expect(
      sut.execute({
        name: 'nonexistent name',
      }),
    ).rejects.toThrow('Recipient not found')
  })
})
