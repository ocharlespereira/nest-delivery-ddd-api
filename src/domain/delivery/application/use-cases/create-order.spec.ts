import { InMemoryDeliverymanRepository } from 'test/repositories/in-memory-deliveryman-repository'
import { CreateOrderUserCase } from './create-order'
import { InMemoryOrderRepository } from 'test/repositories/in-memory-order-repository'
import { InMemoryRecipientRepository } from 'test/repositories/in-memory-recipient-repository'
import { makeDeliveryman } from 'test/factories/make-deliveryman'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { makeRecipient } from 'test/factories/make-recipient'
import { ResourceNotFoundError } from './errors/resources-not-found-error'

let inMemoryOrderRepository: InMemoryOrderRepository
let inMemoryDeliverymanRepository: InMemoryDeliverymanRepository
let inMemoryRecipientRepository: InMemoryRecipientRepository
let sut: CreateOrderUserCase

describe('Create Order', () => {
  beforeEach(() => {
    inMemoryOrderRepository = new InMemoryOrderRepository()
    inMemoryDeliverymanRepository = new InMemoryDeliverymanRepository()
    inMemoryRecipientRepository = new InMemoryRecipientRepository()

    sut = new CreateOrderUserCase(
      inMemoryOrderRepository,
      inMemoryDeliverymanRepository,
      inMemoryRecipientRepository,
    )
  })

  it('should create a order', async () => {
    const newDeliveryman = makeDeliveryman({
      idUser: new UniqueEntityID('deliveryman-1'),
    })

    await inMemoryDeliverymanRepository.create(newDeliveryman)

    const newRecipient = makeRecipient({
      recipientId: new UniqueEntityID('recipient-1'),
    })

    await inMemoryRecipientRepository.create(newRecipient)

    const result = await sut.execute({
      deliverymanId: newDeliveryman.id.toString(),
      recipientId: newRecipient.id.toString(),
      product: 'Product',
      status: 'waiting',
    })

    expect(result.isSuccess()).toBeTruthy()
  })

  it('should throw an error if the deliveryman is not found', async () => {
    const nonExistentDeliverymanId = 'non-existent-deliveryman'

    const result = await sut.execute({
      deliverymanId: nonExistentDeliverymanId,
      recipientId: 'valid-recipient-id',
      product: 'product',
      status: 'status',
    })

    expect(result.isFailure()).toBeTruthy()
    expect(result.value).toBeInstanceOf(ResourceNotFoundError)
  })
})
