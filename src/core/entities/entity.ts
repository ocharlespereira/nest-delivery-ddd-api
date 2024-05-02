import { UniqueEntityID } from './unique-entity-id';

export class Entity<P> {
  private _id: UniqueEntityID;

  protected props: P;

  get id() {
    return this._id;
  }

  protected constructor(props: P, id?: UniqueEntityID) {
    this.props = props;
    this._id = id ?? new UniqueEntityID();
  }
}
