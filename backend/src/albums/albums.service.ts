import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '@/prisma/prisma.service';
import { AlbumDto } from '@/albums/dtos/album.dto';
import * as path from 'path';

@Injectable()
export class AlbumsService {
  constructor(private prismaService: PrismaService) {}

  async getAlbums() {
    return this.prismaService.album.findMany();
  }

  async getAlbumById(id: string) {
    const album = await this.prismaService.album.findUnique({
      where: {
        id,
      },
    });

    if (!album) {
      throw new NotFoundException('Album not found');
    }

    return album;
  }

  async createAlbum(dto: AlbumDto, cover: Express.Multer.File) {
    const uploadPath = path.join('uploads', 'albums', cover.filename);

    return this.prismaService.album.create({
      data: {
        title: dto.title,
        year: dto.year,
        cover: uploadPath,
        artist: {
          connect: {
            id: dto.artistId,
          },
        },
      },
    });
  }

  async updateAlbum(id: string, dto: AlbumDto, cover?: Express.Multer.File) {
    const album = await this.getAlbumById(id);

    const uploadPath = cover ? path.join('uploads', 'albums', cover.filename) : undefined;

    return this.prismaService.album.update({
      where: {
        id,
      },
      data: {
        title: dto.title,
        year: dto.year,
        cover: cover ? uploadPath : album.cover,
      },
    });
  }

  async deleteAlbum(id: string) {
    return this.prismaService.album.delete({
      where: {
        id,
      },
    });
  }
}
