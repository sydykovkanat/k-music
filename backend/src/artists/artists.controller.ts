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
import { ArtistsService } from '@/artists/artists.service';
import { ArtistDto } from '@/artists/dtos/artist.dto';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('artists')
export class ArtistsController {
  constructor(private readonly artistsService: ArtistsService) {}

  @Get()
  async getArtists() {
    return this.artistsService.getArtists();
  }

  @Get(':id')
  async getArtistById(@Param('id') id: string) {
    return this.artistsService.getArtistById(id);
  }

  @Post()
  @UseInterceptors(FileInterceptor('avatar'))
  async createArtist(@Body() dto: ArtistDto, @UploadedFile() avatar: Express.Multer.File) {
    if (!avatar) {
      throw new BadRequestException('Аватар обязателен');
    }

    return this.artistsService.create(dto, avatar);
  }

  @Put(':id')
  @UseInterceptors(FileInterceptor('avatar'))
  async updateArtist(@Param('id') id: string, @Body() dto: ArtistDto, @UploadedFile() avatar?: Express.Multer.File) {
    return this.artistsService.update(id, dto, avatar);
  }

  @Delete(':id')
  async deleteArtist(@Param('id') id: string) {
    return this.artistsService.delete(id);
  }
}
