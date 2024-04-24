import { Deliveryman } from '../entities/deliveryman';
import { DeliverymanRepository } from '../repositories/deliveryman-repository';

interface CreateDeliverymanUseCaseRequest {
  name: string;
  vehicle: string;
  phoneNumber: string;
}

export class CreateDeliverymanUseCase {
  constructor(private deliverymanRepository: DeliverymanRepository) {}

  execute({ name, vehicle, phoneNumber }: CreateDeliverymanUseCaseRequest) {
    const deliveryman = new Deliveryman({ name, vehicle, phoneNumber });

    this.deliverymanRepository.create(deliveryman);

    return deliveryman;
  }
}
