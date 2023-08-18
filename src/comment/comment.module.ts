import { TypeOrmModule } from '@nestjs/typeorm';
import { Comment } from './comment.entity';
import { Module } from '@nestjs/common';
import { CommentService } from './comment.service';
@Module({
  imports: [TypeOrmModule.forFeature([Comment])],
  providers: [Comment, CommentService],
  exports: [CommentService],
})
export class CommentModule {}
