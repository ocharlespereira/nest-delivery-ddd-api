import { Deliveryman } from '@/domain/delivery/enterprise/entities/deliveryman'

export abstract class DeliverymanRepository {
  abstract findById(deliverymanId: string): Promise<Deliveryman | undefined>
  abstract findByName(name: string): Promise<Deliveryman | undefined>
  abstract create(deliveryman: Deliveryman): Promise<void>
  abstract delete(deliveryman: Deliveryman): Promise<void>
}
