import { makeOrder } from 'test/factories/make-order'
import { EditOrderUserCase } from './edit-order'
import { InMemoryOrderRepository } from 'test/repositories/in-memory-order-repository'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { OrderStatusUseCase } from './order-status-waiting'

let inMemoryOrderRepository: InMemoryOrderRepository
let sut: OrderStatusUseCase

describe('Order Modify status delivery', () => {
  beforeEach(() => {
    inMemoryOrderRepository = new InMemoryOrderRepository()

    sut = new OrderStatusUseCase(inMemoryOrderRepository)
  })

  it('should order status waiting', async () => {
    const newOrder = makeOrder({ orderId: new UniqueEntityID('order-1') })

    await inMemoryOrderRepository.create(newOrder)

    const editOrder = makeOrder({}, new UniqueEntityID('order-1'))

    await inMemoryOrderRepository.save(editOrder)

    await sut.execute({
      orderId: newOrder.id.toString(),
      status: 'waiting',
    })

    expect(inMemoryOrderRepository.items[0]).toMatchObject({
      status: 'waiting',
    })
  })
})
