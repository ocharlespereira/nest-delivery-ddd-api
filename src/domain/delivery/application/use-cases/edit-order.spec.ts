import { makeOrder } from 'test/factories/make-order'
import { EditOrderUserCase } from './edit-order'
import { InMemoryOrderRepository } from 'test/repositories/in-memory-order-repository'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'

let inMemoryOrderRepository: InMemoryOrderRepository
let sut: EditOrderUserCase

describe('Edit Order', () => {
  beforeEach(() => {
    inMemoryOrderRepository = new InMemoryOrderRepository()

    sut = new EditOrderUserCase(inMemoryOrderRepository)
  })

  it('should edit a order', async () => {
    const newOrder = makeOrder({ orderId: new UniqueEntityID('order-1') })

    await inMemoryOrderRepository.create(newOrder)

    const editOrder = makeOrder({}, new UniqueEntityID('order-1'))

    await inMemoryOrderRepository.save(editOrder)

    await sut.execute({
      orderId: newOrder.id.toString(),
      product: 'new-product',
      status: 'new-status',
    })

    expect(inMemoryOrderRepository.items[0]).toMatchObject({
      product: 'new-product',
      status: 'new-status',
    })
  })

  it('should throw an error when trying to edit a non-existent order', async () => {
    const nonExistentOrderId = 'non-existent-order';
  
    await expect(sut.execute({
      orderId: nonExistentOrderId,
      product: 'new-product',
      status: 'new-status',
    })).rejects.toThrow('Order not found');
  
    expect(inMemoryOrderRepository.items.length).toBe(0);
  })
})
