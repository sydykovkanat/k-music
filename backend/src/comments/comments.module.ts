import { Module } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CommentsController } from './comments.controller';
import { PrismaService } from '@/prisma/prisma.service';
import { MusicsService } from '@/musics/musics.service';
import { AlbumsService } from '@/albums/albums.service';

@Module({
  controllers: [CommentsController],
  providers: [CommentsService, PrismaService, MusicsService, AlbumsService],
})
export class CommentsModule {}
