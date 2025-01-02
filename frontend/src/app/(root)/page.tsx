import { getMusics } from '@/actions/music-actions';
import { AlbumCard, ArtistCard, MusicCard } from '@/shared/components/shared';
import { getAlbums } from '@/actions/album-actions';
import { ScrollArea, ScrollBar } from '@/shared/components/ui';
import { getArtists } from '@/actions/artists-actions';

export default async function Home() {
  const { data: musics } = await getMusics();
  const { data: albums } = await getAlbums();
  const { data: artists } = await getArtists();

  return (
    <div className={'space-y-10'}>
      <section>
        <h3 className={'text-2xl font-bold ml-1.5 mb-2'}>Популярные треки 2023 года</h3>

        {musics?.map((item) => <MusicCard music={item} key={item.id} />)}
      </section>

      <section>
        <h3 className={'text-2xl font-bold mb-2'}>Популярные альбомы 2023 года</h3>

        <ScrollArea
          className={'pb-3'}
          style={{
            width: 'calc(100vw - 288px)',
          }}
        >
          <div className={'flex items-center gap-4'}>
            {albums?.map((item) => <AlbumCard album={item} key={item.id} />)}
          </div>
          <ScrollBar orientation={'horizontal'} className={'hidden'} />
        </ScrollArea>
      </section>

      <section>
        <h3 className={'text-2xl font-bold mb-2'}>Популярные артисты 2023 года</h3>

        <ScrollArea
          className={'pb-3'}
          style={{
            width: 'calc(100vw - 288px)',
          }}
        >
          <div className={'flex items-center gap-4'}>
            {artists?.map((item) => <ArtistCard artist={item} key={item.id} />)}
          </div>
          <ScrollBar orientation={'horizontal'} className={'hidden'} />
        </ScrollArea>
      </section>
    </div>
  );
}
