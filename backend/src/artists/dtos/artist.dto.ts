import { IsNotEmpty } from 'class-validator';

export class ArtistDto {
  @IsNotEmpty({ message: 'Имя не должно быть пустым' })
  name: string;
}
