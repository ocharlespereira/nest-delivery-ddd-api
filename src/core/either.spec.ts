import { Either, failure, success } from './either'

function doSomething(shouldSucess: boolean): Either<number, string> {
  if (shouldSucess) {
    return success(42)
  } else {
    return failure('Error')
  }
}

describe('Either, Success | Failure', () => {
  it('should return a success Either with value 42 when shouldSucess is true', () => {
    const result = doSomething(true)
    expect(result.isSuccess()).toBe(true)
    expect(result.value).toBe(42)
  })

  it('should return a failure Either with value "Error" when shouldSucess is false', () => {
    const result = doSomething(false)
    expect(result.isFailure()).toBe(true)
    expect(result.value).toBe('Error')
  })
})
