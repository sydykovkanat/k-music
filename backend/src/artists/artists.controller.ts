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
import { ArtistsService } from '@/artists/artists.service';
import { ArtistDto } from '@/artists/dtos/artist.dto';
import { JwtAccessGuard } from '@/auth/guards/jwt-access.guard';
import { FileInterceptor } from '@nestjs/platform-express';

@UseGuards(JwtAccessGuard)
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
