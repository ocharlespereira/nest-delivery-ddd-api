/* eslint-disable @typescript-eslint/no-explicit-any */
import { makeOrder } from 'test/factories/make-order'
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

  it('should to be able to order status waiting', async () => {
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

  it('should throw an error when the status is not valid', async () => {
    const newOrder = makeOrder({ orderId: new UniqueEntityID('order-1') })
  
    await inMemoryOrderRepository.create(newOrder)
  
    const editOrder = makeOrder({}, new UniqueEntityID('order-1'))
  
    await inMemoryOrderRepository.save(editOrder)
  
    const invalidStatus: any = 'invalid-status'; 
  
    await expect(sut.execute({
      orderId: newOrder.id.toString(),
      status: invalidStatus, 
    })).rejects.toThrowError('Invalid status'); 
  })
})
