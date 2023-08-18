import { TypeOrmModule } from '@nestjs/typeorm';
import { CommentEntity } from './comment.entity';
import { Module } from '@nestjs/common';
import { CommentService } from './comment.service';
@Module({
  imports: [TypeOrmModule.forFeature([CommentEntity])],
  providers: [CommentEntity, CommentService],
  exports: [CommentService],
})
export class CommentModule {}
