import { TypeOrmModule } from '@nestjs/typeorm';
import { Comment } from './comment.entity';
import { Module } from '@nestjs/common';
import { CommentService } from './comment.service';
import { CommentResolver } from './comment.resolver';
@Module({
  imports: [TypeOrmModule.forFeature([Comment])],
  providers: [CommentService, CommentResolver],
  exports: [CommentService],
})
export class CommentModule {}
