import { IAlbum } from '@/shared/types/album-types';
import { fetcher } from '@/shared/lib/fetcher';

export const getAlbums = async () => {
  return await fetcher<IAlbum[]>('/albums');
};
