import { fetcher } from '@/shared/lib/fetcher';
import { IArtist } from '@/shared/types/artist-types';

export const getArtists = async () => {
  return await fetcher<IArtist[]>('/artists');
};
