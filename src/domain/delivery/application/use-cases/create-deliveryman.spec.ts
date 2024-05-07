import { Deliveryman } from '@domain/delivery/enterprise/entities/deliveryman'
import { DeliverymanRepository } from '../repositories/deliveryman-repository'
import { CreateDeliverymanUseCase } from './create-deliveryman'

const fakeDeliverymanRepository: DeliverymanRepository = {
  create: async (deliveryman: Deliveryman) => {},
}

test('should create a deliveryman', async () => {
  const sut = new CreateDeliverymanUseCase(fakeDeliverymanRepository)

  const { deliveryman } = await sut.execute({
    name: 'John Doe',
    vehicle: 'Car',
    phoneNumber: '123456789',
  })
  console.log('deliveryman :', deliveryman)

  expect(deliveryman.id).toBeTruthy()
})
