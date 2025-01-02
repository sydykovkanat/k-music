import { IUser } from '@/shared/types/user-types';

export interface IComment {
  id: string;
  createdAt: string;
  updatedAt: string;
  content: string;
  musicId: string;
  userId: string;
  user: IUser;
}
