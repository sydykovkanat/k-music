import { cn } from '@/shared/lib/utils';
import { IMusic } from '@/shared/types/music-types';
import { Card } from '@/shared/components/ui';
import Image from 'next/image';
import { API_URL } from '@/shared/lib/constants';
import { MoreIcon, PlayCircleIcon, StarIcon } from '@/shared/icons';

interface Props {
  music: IMusic;
  className?: string;
}

export function MusicCard({ music, className }: Props) {
  return (
    <Card
      className={cn(
        'bg-transparent hover:bg-secondary border-0 shadow-none transition-colors duration-100 group cursor-pointer',
        className,
      )}
    >
      <div className={'p-1.5 pr-7 flex items-center justify-between'}>
        <div className={'flex items-center gap-2'}>
          <MusicImage music={music} />
          <MusicInfo music={music} />
        </div>

        <div className={'flex items-center gap-10'}>
          <MusicFavorite />

          <div className={'relative'}>
            <MusicDuration duration={music.duration} />
            <MusicMore />
          </div>
        </div>
      </div>
    </Card>
  );
}

function MusicImage({ music, className }: Props) {
  return (
    <div className={cn('relative', className)}>
      <Image src={`${API_URL}/${music.cover}`} alt={music.title} width={46} height={46} className={'rounded-lg'} />
      <button className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 hover:scale-110 transition-all duration-200 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto'>
        <PlayCircleIcon />
      </button>
    </div>
  );
}

function MusicInfo({ music, className }: Props) {
  return (
    <div className={cn(className)}>
      <p className={'font-semibold text-primary leading-none mb-1'}>{music.title}</p>
      <p className={'text-sm text-muted-foreground leading-none'}>{music.artist.name}</p>
    </div>
  );
}

function MusicDuration({ duration, className }: { duration: string; className?: string }) {
  return (
    <p
      className={cn(
        'absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-sm text-muted-foreground leading-none transition-opacity group-hover:opacity-0 group-hover:pointer-events-none',
        className,
      )}
    >
      {duration}
    </p>
  );
}

function MusicMore() {
  return (
    <MoreIcon
      className={
        'absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-muted-foreground size-9 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto hover:text-white transition-all duration-200'
      }
    />
  );
}

function MusicFavorite() {
  return (
    <button
      className={
        'text-muted-foreground opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto duration-200'
      }
    >
      <StarIcon className={'size-5 text-muted-foreground hover:text-white transition-colors'} />
    </button>
  );
}
