import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { Order, OrderProps } from '@/domain/delivery/enterprise/entities/order'

export const makeOrder = (data: Partial<OrderProps> = {}): Order => {
  const order = Order.create({
    deliverymanId: new UniqueEntityID(),
    recipientId: new UniqueEntityID(),
    product: 'new product',
    status: 'Pending',
    ...data,
  })

  return order
}
