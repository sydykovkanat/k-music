import { Module } from '@nestjs/common';
import { UsersModule } from '@/users/users.module';
import { AuthModule } from '@/auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { ArtistsModule } from './artists/artists.module';
import { AlbumsModule } from './albums/albums.module';
import { MusicsModule } from './musics/musics.module';
import { CommentsModule } from './comments/comments.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    UsersModule,
    AuthModule,
    ArtistsModule,
    AlbumsModule,
    MusicsModule,
    CommentsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
