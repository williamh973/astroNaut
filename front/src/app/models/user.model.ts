export class User {
  constructor(
    public firstname: string,
    public lastname: string,
    public pseudo: string,
    public email: string,
    public blocked: boolean,
    public role: 'ROLE_USER' | 'ROLE_ADMIN',
    public id?: number
  ) {}
}
