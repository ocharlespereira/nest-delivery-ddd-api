import { randomUUID } from 'node:crypto';

export class Entity<P> {
  private _id: string;

  protected props: P;

  get id() {
    return this._id;
  }

  constructor(props: P, id?: string) {
    this.props = props;
    this._id = id ?? randomUUID();
  }
}
