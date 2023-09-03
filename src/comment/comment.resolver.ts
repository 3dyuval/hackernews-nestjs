import {
  Args,
  Int,
  Mutation,
  Parent,
  ResolveField,
  Resolver,
} from '@nestjs/graphql'
import { CommentService } from './comment.service'
import { Link } from 'src/link/link.entity'
import { Comment } from './entities/comment.entity'
import { CommentInput } from './entities/comment-input.entity'

@Resolver((of) => Comment)
export class CommentResolver {
  constructor(private commentService: CommentService) {}

  @Mutation((returns) => Comment)
  async postComment(
    @Args('CommentInput') args: CommentInput
  ): Promise<Comment> {
    return this.commentService.postComment(args)
  }
}
