import { OrderRepository } from '@/domain/delivery/application/repositories/order-repository'
import { Order } from '@/domain/delivery/enterprise/entities/order'
import { InMemoryRecipientRepository } from './in-memory-recipient-repository'
import { InMemoryDeliverymanRepository } from './in-memory-deliveryman-repository'

// CRIAR RELAÇAO ENTRE REPOSITORIOS
export class InMemoryOrderRepository implements OrderRepository {
  public items: Order[] = []

  // constructor(
  //   private inMemoryDeliverymanRepository: InMemoryDeliverymanRepository,
  //   private inMemoryRecipientRepository: InMemoryRecipientRepository,
  // ) {}

  async findById(id: string) {
    const order = this.items.find((order) => order.id.toString() === id)

    if (!order) {
      return null
    }

    return order
  }

  async findByProduct(product: string) {
    const order = this.items.find((order) => order.product === product)

    if (!order) {
      return null
    }

    return order
  }

  async save(order: Order) {
    const itemIndex = this.items.findIndex((item) => item.id === order.id)

    if (!order) {
      throw new Error('Order not found')
    }

    this.items[itemIndex] = order
  }

  async create(order: Order) {
    this.items.push(order)
  }

  async delete(order: Order) {
    const itemIndex = this.items.findIndex((item) => item.id === order.id)

    this.items.splice(itemIndex, 1)
  }
}
