// TypeScript
import { EditDeliverymanUserCase } from './edit-deliveryman'
import { DeliverymanRepository } from '../repositories/deliveryman-repository'
import { ResourceNotFoundError } from './errors/resources-not-found-error'
import { InMemoryDeliverymanRepository } from 'test/repositories/in-memory-deliveryman-repository'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { makeDeliveryman } from 'test/factories/make-deliveryman'

describe('EditDeliverymanUserCase', () => {
  let inMemoryDeliverymanRepository: InMemoryDeliverymanRepository
  let sut: EditDeliverymanUserCase

  beforeEach(() => {
    inMemoryDeliverymanRepository = new InMemoryDeliverymanRepository()
    sut = new EditDeliverymanUserCase(inMemoryDeliverymanRepository)
  })

  it('should edit a deliveryman successfully', async () => {
    const createDeliveryman = makeDeliveryman(
      {},
      new UniqueEntityID('deliveryman-1'),
    )

    await inMemoryDeliverymanRepository.create(createDeliveryman)

    const updatedDeliveryman = await sut.execute({
      deliverymanId: createDeliveryman.id.toString(),
      name: 'new-name',
      vehicle: 'new-vehicle',
      phoneNumber: 'new-phoneNumber',
    })

    expect(updatedDeliveryman.isSuccess()).toBe(true)
  })

  it('should return failure if the deliveryman is not found', async () => {
    const nonExistentDeliverymanId = 'non-existent-deliveryman'

    const result = await sut.execute({
      deliverymanId: nonExistentDeliverymanId,
      name: 'new-name',
      vehicle: 'new-vehicle',
      phoneNumber: 'new-phoneNumber',
    })

    expect(result.isFailure()).toBe(true)
    expect(result.value).toBeInstanceOf(ResourceNotFoundError)
  })
})
