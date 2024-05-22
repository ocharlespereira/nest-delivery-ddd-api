import { faker } from '@faker-js/faker'

import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import {
  Deliveryman,
  DeliverymanProps,
} from '@/domain/delivery/enterprise/entities/deliveryman'

export const makeDeliveryman = (
  data: Partial<DeliverymanProps> = {},
  id?: UniqueEntityID,
): Deliveryman => {
  const deliveryman = Deliveryman.create(
    {
      name: faker.name.fullName(),
      vehicle: faker.vehicle.vehicle(),
      phoneNumber: faker.phone.number(),
      ...data,
    },
    id,
  )

  return deliveryman
}
