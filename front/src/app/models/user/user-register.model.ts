export class UserRegister {
  constructor(
    public pseudo: string,
    public email: string,
    public password: string,
    public requiredRole: string
  ) {}
}
