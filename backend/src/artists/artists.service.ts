import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '@/prisma/prisma.service';
import { CreateArtistDto } from '@/artists/dtos/create-artist.dto';
import * as path from 'path';

@Injectable()
export class ArtistsService {
  constructor(private prismaService: PrismaService) {}

  async getArtists() {
    return this.prismaService.artist.findMany({
      include: {
        albums: true,
        musics: true,
      },
    });
  }

  async getArtistById(id: string) {
    const artist = await this.prismaService.artist.findUnique({
      where: {
        id,
      },
      include: {
        albums: true,
        musics: true,
      },
    });

    if (!artist) {
      throw new NotFoundException('Artist not found');
    }

    return artist;
  }

  async create(dto: CreateArtistDto, avatar: Express.Multer.File) {
    const uploadPath = path.join('uploads', 'artists', avatar.filename);

    return this.prismaService.artist.create({
      data: {
        ...dto,
        avatar: uploadPath,
      },
    });
  }

  async update(id: string, dto: CreateArtistDto, avatar?: Express.Multer.File) {
    const artist = await this.getArtistById(id);

    const uploadPath = avatar ? path.join('uploads', 'artists', avatar.filename) : undefined;

    return this.prismaService.artist.update({
      where: {
        id,
      },
      data: {
        ...dto,
        avatar: avatar ? uploadPath : artist.avatar,
      },
    });
  }

  async delete(id: string) {
    return this.prismaService.artist.delete({
      where: {
        id,
      },
    });
  }
}
