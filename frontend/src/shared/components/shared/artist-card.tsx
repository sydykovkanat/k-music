import { cn } from '@/shared/lib/utils';
import { IArtist } from '@/shared/types/artist-types';
import Image from 'next/image';
import { API_URL } from '@/shared/lib/constants';

interface Props {
  artist: IArtist;
  className?: string;
}

export function ArtistCard({ artist, className }: Props) {
  const imageUrl = new URL(artist.avatar, API_URL).toString();

  return (
    <div className={cn('w-[200px]', className)}>
      <Image
        src={imageUrl}
        alt={artist.name}
        width={200}
        height={200}
        className='rounded-full shadow-lg border size-[200px] object-cover'
        priority
      />
      <h5 className='text-center font-semibold'>{artist.name}</h5>
    </div>
  );
}
