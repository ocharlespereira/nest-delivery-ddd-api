import { Order } from '../../enterprise/entities/order'
import { GetOrderByProductUserCase } from './get-order-by-product'
import { InMemoryOrderRepository } from 'test/repositories/in-memory-order-repository'

let inMemoryOrderRepository: InMemoryOrderRepository
let sut: GetOrderByProductUserCase

describe('Create Order', () => {
  beforeEach(() => {
    inMemoryOrderRepository = new InMemoryOrderRepository()

    sut = new GetOrderByProductUserCase(inMemoryOrderRepository)
  })

  it('should be able to get a product by order', async () => {
    const newOrder = Order.create({
      deliverymanId: '1',
      recipientId: '2',
      product: 'new product',
      status: 'Pending',
    })

    inMemoryOrderRepository.create(newOrder)

    const { order } = await sut.execute({
      product: 'new product',
    })

    expect(order.id).toBeTruthy()
  })
})
