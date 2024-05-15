import { CreateOrderUserCase } from './create-order'
import { InMemoryOrderRepository } from 'test/repositories/in-memory-order-repository'

let inMemoryOrderRepository: InMemoryOrderRepository
let sut: CreateOrderUserCase

describe('Create Order', () => {
  beforeEach(() => {
    inMemoryOrderRepository = new InMemoryOrderRepository()

    sut = new CreateOrderUserCase(inMemoryOrderRepository)
  })

  it('should create a order', async () => {
    const { order } = await sut.execute({
      deliverymanId: '1',
      recipientId: '2',
      product: 'Product',
      status: 'Pending',
    })

    expect(order.id).toBeTruthy()
  })
})
