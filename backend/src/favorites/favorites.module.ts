import { Module } from '@nestjs/common';
import { FavoritesService } from '@/favorites/favorites.service';
import { FavoritesController } from '@/favorites/favorites.controller';
import { PrismaService } from '@/prisma/prisma.service';
import { MusicsService } from '@/musics/musics.service';
import { AlbumsService } from '@/albums/albums.service';

@Module({
  controllers: [FavoritesController],
  providers: [FavoritesService, PrismaService, MusicsService, AlbumsService],
})
export class FavoritesModule {}
