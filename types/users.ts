export interface IUser {
  id: string;
  name: string;
  email: string;
  phone: string;
  type: string;
  experience: string;
  status: 'ACTIVE' | 'INACTIVE';
  avatar: string;
}