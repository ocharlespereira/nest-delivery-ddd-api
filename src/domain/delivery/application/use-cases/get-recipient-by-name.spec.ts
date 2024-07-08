import { makeRecipient } from 'test/factories/make-recipient'
import { GetRecipientByNameUserCase } from './get-recipient-by-name'
import { InMemoryRecipientRepository } from 'test/repositories/in-memory-recipient-repository'
import { ResourceNotFoundError } from './errors/resources-not-found-error'

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

    const result = await sut.execute({
      name: 'new name',
    })

    expect(result.isSuccess).toBeTruthy()
  })

  it('should throw an error if the recipient is not found', async () => {
    const result = await sut.execute({
      name: 'nonexistent name',
    })

    expect(result.isFailure).toBeTruthy()
    expect(result.value).toBeInstanceOf(ResourceNotFoundError)
  })
})
