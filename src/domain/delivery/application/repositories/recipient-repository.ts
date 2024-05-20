import { Recipient } from '../../enterprise/entities/recipient'

export abstract class RecipientRepository {
  abstract create(recipientman: Recipient): Promise<void>
}
