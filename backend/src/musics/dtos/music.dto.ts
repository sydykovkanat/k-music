import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { GetStaticMsg } from '@/lib/get-static-msg';
import { Type } from 'class-transformer';

export class MusicDto {
  @IsString({ message: GetStaticMsg.requiredMsg('title') })
  title: string;

  @IsNotEmpty({ message: GetStaticMsg.requiredMsg('duration') })
  duration: string;

  @IsOptional()
  lyrics?: string;

  @IsNumber({}, { message: GetStaticMsg.numberMsg('year') })
  @Type(() => Number)
  year: number;

  @IsNotEmpty({ message: GetStaticMsg.requiredMsg('artistId') })
  artistId: string;

  @IsOptional()
  albumId?: string;
}
