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
import { MusicsService } from './musics.service';
import { MusicDto } from '@/musics/dtos/music.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { GetStaticMsg } from '@/lib/get-static-msg';

@Controller('musics')
export class MusicsController {
  constructor(private readonly musicsService: MusicsService) {}

  @Get()
  async getMusics() {
    return this.musicsService.getMusics();
  }

  @Get(':id')
  async getMusicById(@Param('id') id: string) {
    return this.musicsService.getMusicById(id);
  }

  @Post()
  @UseInterceptors(FileInterceptor('cover'))
  async createMusic(@Body() dto: MusicDto, @UploadedFile() cover?: Express.Multer.File) {
    if (!cover) {
      throw new BadRequestException(GetStaticMsg.requiredMsg('cover'));
    }

    return this.musicsService.createMusic(dto, cover ? cover : null);
  }

  @Put(':id')
  @UseInterceptors(FileInterceptor('cover'))
  async updateMusic(@Param('id') id: string, @Body() dto: MusicDto, @UploadedFile() cover?: Express.Multer.File) {
    return this.musicsService.updateMusic(id, dto, cover ? cover : null);
  }

  @Delete(':id')
  async deleteMusic(@Param('id') id: string) {
    return this.musicsService.deleteMusic(id);
  }
}
