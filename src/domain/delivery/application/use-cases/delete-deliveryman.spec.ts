import { makeDeliveryman } from 'test/factories/make-deliveryman'
import { DeleteDeliverymanUserCase } from './delete-deliveryman'
import { InMemoryDeliverymanRepository } from 'test/repositories/in-memory-deliveryman-repository'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { ResourceNotFoundError } from './errors/resources-not-found-error'

let inMemoryDeliverymanRepository: InMemoryDeliverymanRepository
let sut: DeleteDeliverymanUserCase

describe('Delete Deliveryman', () => {
  beforeEach(() => {
    inMemoryDeliverymanRepository = new InMemoryDeliverymanRepository()

    sut = new DeleteDeliverymanUserCase(inMemoryDeliverymanRepository)
  })

  it('should delete a deliveryman', async () => {
    const newDeliveryman = makeDeliveryman(
      {},
      new UniqueEntityID('deliveryman-1'),
    )

    await inMemoryDeliverymanRepository.create(newDeliveryman)

    await sut.execute({
      deliverymanId: 'deliveryman-1',
    })

    expect(inMemoryDeliverymanRepository.items.length).toBe(0)
  })

  it('should throw an error when trying to delete a non-existent deliveryman', async () => {
    const nonExistentDeliverymanId = 'non-existent-deliveryman'

    const result = await sut.execute({
      deliverymanId: nonExistentDeliverymanId,
    })
    console.log('result :', result.value)

    expect(result.isFailure()).toBeTruthy()

    expect(result.value).toBeInstanceOf(ResourceNotFoundError)
  })
})
