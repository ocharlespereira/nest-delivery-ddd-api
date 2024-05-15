import { Order } from '../../enterprise/entities/order'

export abstract class OrderRepository {
  abstract findByProduct(product: string): Promise<Order | null>
  abstract create(orderman: Order): Promise<void>
}
