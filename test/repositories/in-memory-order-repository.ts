import { OrderRepository } from '@/domain/delivery/application/repositories/order-repository'
import { Order } from '@/domain/delivery/enterprise/entities/order'

export class InMemoryOrderRepository implements OrderRepository {
  public items: Order[] = []

  async create(order: Order) {
    this.items.push(order)
  }
}
