import { makeOrder } from 'test/factories/make-order'
import { GetOrderByProductUserCase } from './get-order-by-product'
import { InMemoryOrderRepository } from 'test/repositories/in-memory-order-repository'

let inMemoryOrderRepository: InMemoryOrderRepository
let sut: GetOrderByProductUserCase

describe('Get Order', () => {
  beforeEach(() => {
    inMemoryOrderRepository = new InMemoryOrderRepository()

    sut = new GetOrderByProductUserCase(inMemoryOrderRepository)
  })

  it('should be able to get a product by order', async () => {
    const newOrder = makeOrder({ product: 'new product' })

    await inMemoryOrderRepository.create(newOrder)

    const { order } = await sut.execute({
      product: 'new product',
    })

    expect(order.id).toBeTruthy()
  })

  it('should throw an error if the order is not found', async () => {
    await expect(
      sut.execute({
        product: 'nonexistent product',
      }),
    ).rejects.toThrow('Order not found')
  })
})
