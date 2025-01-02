import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '@/prisma/prisma.service';
import { GetStaticMsg } from '@/lib/get-static-msg';
import { MusicDto } from '@/musics/dtos/music.dto';
import * as path from 'path';
import { AlbumsService } from '@/albums/albums.service';

@Injectable()
export class MusicsService {
  constructor(
    private prismaService: PrismaService,
    private albumService: AlbumsService,
  ) {}

  async getMusics() {
    return this.prismaService.music.findMany({
      include: {
        album: true,
        artist: true,
        comments: true,
        favoritedBy: true,
      },
    });
  }

  async getMusicById(id: string) {
    const music = await this.prismaService.music.findUnique({
      where: { id },
    });

    if (!music) {
      throw new NotFoundException(GetStaticMsg.notFoundMsg('Music'));
    }

    return music;
  }

  async createMusic(dto: MusicDto, cover: Express.Multer.File) {
    const uploadPath = path.join('uploads', 'musics', cover.filename);

    await this.albumService.getAlbumById(dto.albumId);

    return this.prismaService.music.create({
      data: {
        title: dto.title,
        duration: dto.duration,
        lyrics: dto.lyrics,
        year: dto.year,
        cover: uploadPath,
        artist: {
          connect: {
            id: dto.artistId,
          },
        },
        album: {
          connect: {
            id: dto.albumId,
          },
        },
      },
    });
  }

  async updateMusic(id: string, dto: MusicDto, cover: Express.Multer.File | null) {
    const music = await this.getMusicById(id);

    const uploadPath = cover ? path.join('uploads', 'musics', cover.filename) : music.cover;

    return this.prismaService.music.update({
      where: { id },
      data: {
        title: dto.title,
        duration: dto.duration,
        lyrics: dto.lyrics,
        year: dto.year,
        cover: uploadPath,
        artist: {
          connect: {
            id: dto.artistId,
          },
        },
        album: dto.albumId ? { connect: { id: dto.albumId } } : undefined,
      },
    });
  }

  async deleteMusic(id: string) {
    return this.prismaService.music.delete({
      where: { id },
    });
  }
}
