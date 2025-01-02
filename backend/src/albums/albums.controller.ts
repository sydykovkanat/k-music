import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { AlbumsService } from './albums.service';
import { AlbumDto } from '@/albums/dtos/album.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { ArtistsService } from '@/artists/artists.service';

@Controller('albums')
export class AlbumsController {
  constructor(
    private readonly albumsService: AlbumsService,
    private readonly artistsService: ArtistsService,
  ) {}

  @Get()
  async getAlbums() {
    return this.albumsService.getAlbums();
  }

  @Get(':id')
  async getAlbumById(@Param('id') id: string) {
    return this.albumsService.getAlbumById(id);
  }

  @Post()
  @UseInterceptors(FileInterceptor('cover'))
  async createAlbum(@Body() dto: AlbumDto, @UploadedFile() cover: Express.Multer.File) {
    if (!cover) {
      throw new BadRequestException('Обложка обязательна');
    }

    const year = Number(dto.year);

    if (isNaN(year)) {
      throw new BadRequestException('Год должен быть числом');
    }

    await this.artistsService.getArtistById(dto.artistId);

    return this.albumsService.createAlbum(
      {
        title: dto.title,
        year,
        artistId: dto.artistId,
      },
      cover,
    );
  }

  @Put(':id')
  @UseInterceptors(FileInterceptor('cover'))
  async updateAlbum(@Param('id') id: string, @Body() dto: AlbumDto, @UploadedFile() cover?: Express.Multer.File) {
    const year = Number(dto.year);

    if (isNaN(year)) {
      throw new BadRequestException('Год должен быть числом');
    }

    if (dto.artistId) {
      await this.artistsService.getArtistById(dto.artistId);
    }

    return this.albumsService.updateAlbum(
      id,
      {
        title: dto.title,
        year,
        artistId: dto.artistId,
      },
      cover,
    );
  }

  @Delete(':id')
  async deleteAlbum(@Param('id') id: string) {
    return this.albumsService.deleteAlbum(id);
  }
}
