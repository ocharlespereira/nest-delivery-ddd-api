import { CreateRecipientUseCase } from './create-recipient'
import { InMemoryRecipientRepository } from 'test/repositories/in-memory-recipient-repository'

let inMemoryRecipientRepository: InMemoryRecipientRepository
let sut: CreateRecipientUseCase

describe('Create Recipient', () => {
  beforeEach(() => {
    inMemoryRecipientRepository = new InMemoryRecipientRepository()

    sut = new CreateRecipientUseCase(inMemoryRecipientRepository)
  })

  it('should create a recipient', async () => {
    const { recipient } = await sut.execute({
      address: 'Address ',
      name: 'Name',
      phoneNumber: 'Phone Number',
    })

    expect(recipient.id).toBeTruthy()
  })
})
