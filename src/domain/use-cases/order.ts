import { Order } from '../entities/order';

interface OrderUseCaseRequest {
  id: string;
  nameProduct: string;
  quantity: number;
}

interface OrderUseCaseResponse {}

export class OrderUseCase {
  execute({ id, nameProduct, quantity }: OrderUseCaseRequest) {
    const order = new Order(id, nameProduct, quantity);

    return { order };
  }
}
