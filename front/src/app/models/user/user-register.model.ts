export class UserRegister {
  constructor(
    public pseudo: string,
    public firstname: string,
    public lastname: string,
    public email: string,
    public password: string,
    public requiredRole: string
  ) {}
}
