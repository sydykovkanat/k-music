import { cn } from '@/shared/lib/utils';
import { IArtist } from '@/shared/types/artist-types';
import Image from 'next/image';
import { API_URL } from '@/shared/lib/constants';

interface Props {
  artist: IArtist;
  className?: string;
}

export function ArtistCard({ artist, className }: Props) {
  return (
    <div className={cn(className)}>
      <Image
        src={`${API_URL}/${artist.avatar}`}
        alt={artist.name}
        width={200}
        height={200}
        className={'rounded-full shadow-lg border'}
      />
      <h5 className={'text-center font-semibold'}>{artist.name}</h5>
    </div>
  );
}
