import { Deliveryman } from '@/domain/delivery/enterprise/entities/deliveryman'

export abstract class DeliverymanRepository {
  abstract create(deliveryman: Deliveryman): Promise<void>
}
