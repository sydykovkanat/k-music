'use server';

import { fetcher } from '@/shared/lib/fetcher';
import { IMusic } from '@/shared/types/music-types';

export const getMusics = async () => {
  return await fetcher<IMusic[]>('/musics');
};
