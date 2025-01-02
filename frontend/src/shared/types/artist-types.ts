import { IMusic } from '@/shared/types/music-types';

export interface IArtist {
  id: string;
  createdAt: string;
  updatedAt: string;
  name: string;
  avatar: string;
  albums: IArtist[];
  musics: IMusic[];
}
