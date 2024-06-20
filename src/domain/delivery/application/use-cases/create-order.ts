import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { Order } from '../../enterprise/entities/order'
import { OrderRepository } from '../repositories/order-repository'
import { DeliverymanRepository } from '../repositories/deliveryman-repository'
import { RecipientRepository } from '../repositories/recipient-repository'
import { Either, failure, success } from '@/core/either'

interface CreateOrderUserCaseRequest {
  deliverymanId: string
  recipientId: string
  product: string
  status: string
}

type CreateOrderUserCaseResponse = Either<
  {
    order: Order
  },
  {}
>
export class CreateOrderUserCase {
  constructor(
    private orderRepository: OrderRepository,
    private deliverymanRepository: DeliverymanRepository,
    private recipientRepository: RecipientRepository,
  ) {}

  async execute({
    deliverymanId,
    recipientId,
    product,
    status,
  }: CreateOrderUserCaseRequest): Promise<CreateOrderUserCaseResponse> {
    const deliveryman = await this.deliverymanRepository.findById(deliverymanId)
    const repicipient = await this.recipientRepository.findById(recipientId)

    if (!deliveryman) {
      return failure('Deliveryman not found')
    }

    if (!repicipient) {
      return failure('Recipient not found')
    }

    const order = Order.create({
      orderId: new UniqueEntityID(),
      deliverymanId: deliveryman.id,
      recipientId: repicipient.id,
      product,
      status,
    })

    await this.orderRepository.create(order)

    return success({ order })
  }
}
