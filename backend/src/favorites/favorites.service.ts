import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/prisma/prisma.service';
import { MusicsService } from '@/musics/musics.service';

@Injectable()
export class FavoritesService {
  constructor(
    private prismaService: PrismaService,
    private musicService: MusicsService,
  ) {}

  async getFavorites(userId: string) {
    const musics = await this.prismaService.user.findUnique({
      where: { id: userId },
      select: {
        favoriteMusics: true,
      },
    });

    return musics['favoriteMusics'];
  }

  async toggleFavorite(userId: string, musicId: string) {
    await this.musicService.getMusicById(musicId);

    const userFavorite = await this.prismaService.user.findUnique({
      where: { id: userId },
      select: {
        favoriteMusics: {
          where: { id: musicId },
        },
      },
    });

    if (userFavorite.favoriteMusics.length > 0) {
      return this.prismaService.user.update({
        where: { id: userId },
        data: {
          favoriteMusics: {
            disconnect: { id: musicId },
          },
        },
      });
    } else {
      return this.prismaService.user.update({
        where: { id: userId },
        data: {
          favoriteMusics: {
            connect: { id: musicId },
          },
        },
      });
    }
  }
}
