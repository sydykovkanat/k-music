import { IsNotEmpty } from 'class-validator';

export class CreateArtistDto {
  @IsNotEmpty({ message: 'Имя не должно быть пустым' })
  name: string;
}
