import { Order } from '../../enterprise/entities/order'

export abstract class OrderRepository {
  abstract create(orderman: Order): Promise<void>
}
