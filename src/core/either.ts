export class Success<T> {
  readonly value: T

  constructor(value: T) {
    this.value = value
  }
}
export class Failure<E> {
  readonly value: E

  constructor(value: E) {
    this.value = value
  }
}

export type Either<T, E> = Success<T> | Failure<E>

export const success = <T, E>(value: T): Either<T, E> => {
  return new Success(value)
}

export const failure = <T, E>(value: E): Either<T, E> => {
  return new Failure(value)
}
