import { DeliverymanRepository } from '@/domain/delivery/application/repositories/deliveryman-repository'
import { Deliveryman } from '@/domain/delivery/enterprise/entities/deliveryman'

export class InMemoryDeliverymanRepository implements DeliverymanRepository {
  public items: Deliveryman[] = []

  async findById(deliverymanId: string): Promise<Deliveryman | undefined> {
    const deliveryman = this.items.find(
      (item) => item.id.toString() === deliverymanId,
    )

    if (!deliveryman) {
      return undefined
    }

    return deliveryman
  }

  async create(deliveryman: Deliveryman) {
    this.items.push(deliveryman)
  }

  async delete(deliveryman: Deliveryman) {
    this.items = this.items.filter((item) => item.id !== deliveryman.id)
  }
}
