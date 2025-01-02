import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '@/prisma/prisma.service';
import { CommentDto } from '@/comments/dtos/comment.dto';
import { MusicsService } from '@/musics/musics.service';
import { GetStaticMsg } from '@/lib/get-static-msg';

@Injectable()
export class CommentsService {
  constructor(
    private prismaService: PrismaService,
    private musicsService: MusicsService,
  ) {}

  async create(dto: CommentDto, userId: string) {
    await this.musicsService.getMusicById(dto.musicId);

    return this.prismaService.comment.create({
      data: {
        content: dto.content,
        music: { connect: { id: dto.musicId } },
        user: { connect: { id: userId } },
      },
    });
  }

  async delete(commentId: string, userId: string) {
    const comment = await this.prismaService.comment.findUnique({
      where: { id: commentId, userId },
    });

    if (!comment) {
      throw new NotFoundException(GetStaticMsg.notFoundMsg('Comment'));
    }

    return this.prismaService.comment.delete({
      where: { id: commentId },
    });
  }
}
