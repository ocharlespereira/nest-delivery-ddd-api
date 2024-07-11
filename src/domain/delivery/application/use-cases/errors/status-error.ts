import { UseCaseError } from '@/core/errors/use-case-error'

export class StatusError extends Error implements UseCaseError {
  constructor() {
    super('Invalid status')
  }
}
