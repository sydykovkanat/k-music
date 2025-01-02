import { IArtist } from '@/shared/types/artist-types';

export interface IAlbum {
  id: string;
  createdAt: string;
  updatedAt: string;
  title: string;
  cover: string;
  year: number;
  artistId: string;
  artist: IArtist;
}
