import { makeDeliveryman } from 'test/factories/make-deliveryman'
import { GetDeliverymanByNameUserCase } from './get-deliveryman-by-name'
import { InMemoryDeliverymanRepository } from 'test/repositories/in-memory-deliveryman-repository'

let inMemoryDeliverymanRepository: InMemoryDeliverymanRepository
let sut: GetDeliverymanByNameUserCase

describe('Get Deliveryman', () => {
  beforeEach(() => {
    inMemoryDeliverymanRepository = new InMemoryDeliverymanRepository()

    sut = new GetDeliverymanByNameUserCase(inMemoryDeliverymanRepository)
  })

  it('should be able to get a name by deliveryman', async () => {
    const newDeliveryman = makeDeliveryman({ name: 'new name' })

    await inMemoryDeliverymanRepository.create(newDeliveryman)

    const { deliveryman } = await sut.execute({
      name: 'new name',
    })

    expect(deliveryman.id).toBeTruthy()
  })

  it('should throw an error if the deliveryman is not found', async () => {
    await expect(
      sut.execute({
        name: 'nonexistent name',
      }),
    ).rejects.toThrow('Deliveryman not found')
  })
})
