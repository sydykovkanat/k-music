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
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { AlbumsService } from './albums.service';
import { AlbumDto } from '@/albums/dtos/album.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { JwtAccessGuard } from '@/auth/guards/jwt-access.guard';

@UseGuards(JwtAccessGuard)
@Controller('albums')
export class AlbumsController {
  constructor(private readonly albumsService: AlbumsService) {}

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

    return this.albumsService.createAlbum(dto, cover);
  }

  @Put(':id')
  @UseInterceptors(FileInterceptor('cover'))
  async updateAlbum(@Param('id') id: string, @Body() dto: AlbumDto, @UploadedFile() cover?: Express.Multer.File) {
    return this.albumsService.updateAlbum(id, dto, cover);
  }

  @Delete(':id')
  async deleteAlbum(@Param('id') id: string) {
    return this.albumsService.deleteAlbum(id);
  }
}
