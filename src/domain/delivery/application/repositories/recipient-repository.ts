import { Recipient } from '../../enterprise/entities/recipient'

export abstract class RecipientRepository {
  abstract findById(id: string): Promise<Recipient | null>
  abstract create(recipientman: Recipient): Promise<void>
  abstract delete(recipientman: Recipient): Promise<void>
}
