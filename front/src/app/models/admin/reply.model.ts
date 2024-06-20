import { User } from '../user.model';

export class Reply {
  constructor(
    public subject: string,
    public content: string,
    public timestamp: Date,
    public user: User,
    public receiver: User,
    public id?: number
  ) {}
}
