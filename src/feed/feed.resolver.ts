import { CommentService } from './../comment/comment.service'
import { LinkService } from './../link/link.service'
import { Inject } from '@nestjs/common'
import { Link } from './../link/link.entity'
import { Resolver, Query, Field } from '@nestjs/graphql'

@Resolver()
export class FeedResolver {
  constructor(
    private linkService: LinkService,
    private CommentService: CommentService
  ) {}

  @Query((returns) => [Link])
  async feed() {
    return this.linkService.getAllLinks()
  }

  @Query((returns) => String)
  info() {
    return 'Hackernews Clone'
  }
}
