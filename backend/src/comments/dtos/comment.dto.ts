import { IsString } from 'class-validator';
import { GetStaticMsg } from '@/lib/get-static-msg';

export class CommentDto {
  @IsString({ message: GetStaticMsg.requiredMsg('content') })
  content: string;

  @IsString({ message: GetStaticMsg.requiredMsg('musicId') })
  musicId: string;
}
