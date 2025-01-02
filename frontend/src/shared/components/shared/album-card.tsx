import { cn } from '@/shared/lib/utils';
import { IAlbum } from '@/shared/types/album-types';
import { Card } from '@/shared/components/ui';
import Image from 'next/image';
import { API_URL } from '@/shared/lib/constants';

interface Props {
  album: IAlbum;
  className?: string;
}

export function AlbumCard({ album, className }: Props) {
  return (
    <Card className={cn('bg-transparent w-52 border-none shadow-none', className)}>
      <Image
        src={`${API_URL}/${album.cover}`}
        alt={album.title}
        width={208}
        height={208}
        className={'rounded-md w-full mb-0.5'}
      />

      <h4 className={'font-semibold leading-[1.3]'}>{album.title}</h4>
      <h4 className={'font-semibold text-muted-foreground leading-[1.3]'}>{album.artist.name}</h4>
      <h4 className={'font-semibold text-muted-foreground leading-[1.3]'}>{album.year}</h4>
    </Card>
  );
}
