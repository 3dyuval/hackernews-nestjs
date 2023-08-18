import { Module } from '@nestjs/common';
import { FeedResolver } from './feed.resolver';
import { LinkModule } from 'src/link/link.module';
import { CommentModule } from 'src/comment/comment.module';

@Module({
  imports: [LinkModule, CommentModule],
  providers: [FeedResolver]
})
export class FeedModule {}
