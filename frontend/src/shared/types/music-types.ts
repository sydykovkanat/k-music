import { IComment } from '@/shared/types/comment-types';
import { IAlbum } from '@/shared/types/album-types';
import { IArtist } from '@/shared/types/artist-types';
import { IUser } from '@/shared/types/user-types';

export interface IMusic {
  id: string;
  createdAt: string;
  updatedAt: string;
  title: string;
  duration: string;
  cover: string;
  lyrics: string | null;
  year: number;
  views: number;
  likes: number;
  artistId: string;
  albumId: string;
  album: IAlbum;
  artist: IArtist;
  comments: IComment[];
  favoritedBy: IUser[];
}
