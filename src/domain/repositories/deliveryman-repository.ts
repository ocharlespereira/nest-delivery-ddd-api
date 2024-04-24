import { Deliveryman } from '../entities/deliveryman';

export abstract class DeliverymanRepository {
  abstract create(deliveryman: Deliveryman): Promise<void>;
}
