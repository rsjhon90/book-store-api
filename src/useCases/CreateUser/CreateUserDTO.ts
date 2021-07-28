export interface ICreateUserDTO {
  email: string;
  password: string;
  isAdmin?: boolean;
  isAuthor?: boolean;
}
