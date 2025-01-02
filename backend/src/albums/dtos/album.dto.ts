import { IsNotEmpty, IsString } from 'class-validator';

export class AlbumDto {
  @IsString({ message: 'Заголовок обязателен' })
  title: string;

  @IsString({ message: 'Идентификатор исполнителя обязателен' })
  artistId: string;

  @IsNotEmpty({ message: 'Год обязателен' })
  year: number;
}
