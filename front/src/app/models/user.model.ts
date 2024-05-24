export class User {
  constructor(
    public pseudo: string,
    public email: string,
    public role: 'ROLE_USER' | 'ROLE_ADMIN',
    public blocked: boolean,
    public id?: number
  ) {}
}
