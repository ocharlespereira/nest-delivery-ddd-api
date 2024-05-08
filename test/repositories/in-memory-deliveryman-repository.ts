import { DeliverymanRepository } from '@domain/delivery/application/repositories/deliveryman-repository'
import { Deliveryman } from '@domain/delivery/enterprise/entities/deliveryman'

export class InMemoryDeliverymanRepository implements DeliverymanRepository {
  public items: Deliveryman[] = []

  async create(deliveryman: Deliveryman) {
    this.items.push(deliveryman)
  }
}
