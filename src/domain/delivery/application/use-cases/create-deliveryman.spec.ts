import { CreateDeliverymanUseCase } from './create-deliveryman'
import { InMemoryDeliverymanRepository } from 'test/repositories/in-memory-deliveryman-repository'

let inMemoryDeliverymanRepository: InMemoryDeliverymanRepository
let sut: CreateDeliverymanUseCase

describe('Create Deliveryman', () => {
  beforeEach(() => {
    inMemoryDeliverymanRepository = new InMemoryDeliverymanRepository()

    sut = new CreateDeliverymanUseCase(inMemoryDeliverymanRepository)
  })

  it('should create a deliveryman', async () => {
    const { deliveryman } = await sut.execute({
      name: 'John Doe',
      vehicle: 'Car',
      phoneNumber: '123456789',
    })
    console.log('deliveryman :', deliveryman)

    expect(deliveryman.id).toBeTruthy()
  })
})
