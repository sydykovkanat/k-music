import { IsNumber, IsString } from 'class-validator';
import { GetStaticMsg } from '@/lib/get-static-msg';
import { Type } from 'class-transformer';

export class AlbumDto {
  @IsString({ message: GetStaticMsg.requiredMsg('title') })
  title: string;

  @IsString({ message: GetStaticMsg.requiredMsg('artistId') })
  artistId: string;

  @IsNumber({}, { message: GetStaticMsg.numberMsg('year') })
  @Type(() => Number)
  year: number;
}
