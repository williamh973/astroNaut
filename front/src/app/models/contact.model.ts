import { User } from './user.model';

export class Contact {
  constructor(
    public name: string,
    public email: string,
    public subject: string,
    public content: string,
    public timestamp: Date,
    public user: User,
    public id?: number
  ) {}
}
