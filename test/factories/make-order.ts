import { faker } from '@faker-js/faker'

import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { Order, OrderProps } from '@/domain/delivery/enterprise/entities/order'

export const makeOrder = (
  data: Partial<OrderProps> = {},
  id?: UniqueEntityID,
): Order => {
  const order = Order.create(
    {
      deliverymanId: new UniqueEntityID(),
      recipientId: new UniqueEntityID(),
      product: faker.commerce.product(),
      status: 'Pending',
      ...data,
    },
    id,
  )

  return order
}
