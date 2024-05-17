import { Order } from '../../enterprise/entities/order'

export abstract class OrderRepository {
  abstract findById(id: string): Promise<Order | null>
  abstract findByProduct(product: string): Promise<Order | null>
  abstract create(orderman: Order): Promise<void>
  abstract delete(order: Order): Promise<void>
}
