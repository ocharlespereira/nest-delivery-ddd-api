import { makeOrder } from 'test/factories/make-order'
import { DeleteOrderUserCase } from './delete-order'
import { InMemoryOrderRepository } from 'test/repositories/in-memory-order-repository'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'

let inMemoryOrderRepository: InMemoryOrderRepository
let sut: DeleteOrderUserCase

describe('Delete Order', () => {
  beforeEach(() => {
    inMemoryOrderRepository = new InMemoryOrderRepository()

    sut = new DeleteOrderUserCase(inMemoryOrderRepository)
  })

  it('should delete a order', async () => {
    const newOrder = makeOrder({}, new UniqueEntityID('order-1'))

    await inMemoryOrderRepository.create(newOrder)

    await sut.execute({
      orderId: 'order-1',
    })

    expect(inMemoryOrderRepository.items.length).toBe(0)
  })
})
