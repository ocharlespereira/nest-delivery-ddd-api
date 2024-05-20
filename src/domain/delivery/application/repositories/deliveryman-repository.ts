import { Deliveryman } from '@/domain/delivery/enterprise/entities/deliveryman'

export abstract class DeliverymanRepository {
  abstract findById(id: string): Promise<Deliveryman | null>
  abstract create(deliveryman: Deliveryman): Promise<void>
  abstract delete(deliveryman: Deliveryman): Promise<void>
}
