import { Body, Controller, Delete, Param, Post } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CommentDto } from '@/comments/dtos/comment.dto';
import { CurrentUser } from '@/utils/decorators/current-user.decorator';

@Controller('comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  @Post(':musicId')
  async createComment(@Param('musicId') musicId: string, @Body() dto: CommentDto, @CurrentUser('id') userId: string) {
    return this.commentsService.create(dto, userId);
  }

  @Delete(':commentId')
  async deleteComment(@Param('commentId') commentId: string, @CurrentUser('id') userId: string) {
    return this.commentsService.delete(commentId, userId);
  }
}
