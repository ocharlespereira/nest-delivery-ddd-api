import { OrderRepository } from '@/domain/delivery/application/repositories/order-repository'
import { Order } from '@/domain/delivery/enterprise/entities/order'

export class InMemoryOrderRepository implements OrderRepository {
  public items: Order[] = []

  async findByProduct(product: string) {
    const order = this.items.find((order) => order.product === product)

    if (!order) {
      return null
    }

    return order
  }

  async create(order: Order) {
    this.items.push(order)
  }
}
