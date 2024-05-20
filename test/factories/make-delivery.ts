import { faker } from '@faker-js/faker'

import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import {
  Recipient,
  RecipientProps,
} from '@/domain/delivery/enterprise/entities/recipient'

export const makeRecipient = (
  data: Partial<RecipientProps> = {},
  id?: UniqueEntityID,
): Recipient => {
  const recipient = Recipient.create(
    {
      name: faker.name.fullName(),
      address: faker.address.streetAddress(),
      phoneNumber: faker.phone.number(),
      ...data,
    },
    id,
  )

  return recipient
}
