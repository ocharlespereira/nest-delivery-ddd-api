export class Success<T, E> {
  readonly value: T

  constructor(value: T) {
    this.value = value
  }

  isSuccess(): this is Success<T, E> {
    return true
  }

  isFailure(): this is Failure<T, E> {
    return false
  }
}
export class Failure<T, E> {
  readonly value: E

  constructor(value: E) {
    this.value = value
  }

  isSuccess(): this is Success<T, E> {
    return false
  }

  isFailure(): this is Failure<T, E> {
    return true
  }
}

export type Either<T, E> = Success<T, E> | Failure<T, E>

export const success = <T, E>(value: T): Either<T, E> => {
  return new Success(value)
}

export const failure = <T, E>(value: E): Either<T, E> => {
  return new Failure(value)
}
