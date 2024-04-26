import { UniqueEntityID } from './unique-entity-id';

export class Entity<P> {
  private _id: UniqueEntityID;

  protected props: P;

  get id() {
    return this._id;
  }

  constructor(props: P, id?: string) {
    this.props = props;
    this._id = new UniqueEntityID();
  }
}
