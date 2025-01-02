import { IMusic } from '@/shared/types/music-types';

export interface IUser {
  id: string;
  createdAt: string;
  updatedAt: string;
  email: string;
  password: string;
  displayName: string;
  favoriteMusics: IMusic[];
}
