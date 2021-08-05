export interface ICreateUserDTO {
  id?: string;
  email: string;
  password: string;
  isAdmin?: boolean;
  isAuthor?: boolean;
}
