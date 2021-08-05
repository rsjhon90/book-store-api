export interface ICreateProfileRequest {
  name: string;
  userId: string;
  phone: string;
  address: string;
}

export interface IProfileResponse {
  name: string;
  phone: string;
  address: string;
  type: 'client' | 'author';
  email: string;
}
