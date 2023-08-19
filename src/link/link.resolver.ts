import { Query, Args, Resolver, Mutation } from '@nestjs/graphql'
import { LinkService } from './link.service'
import { Link } from './link.entity'
import { UseGuards } from '@nestjs/common'
import { GQLAuthGuard } from 'src/auth/gql-auth.gurad'

@Resolver()
export class LinkResolver {
  constructor(private linkService: LinkService) {}

  @Query((returns) => Link, { name: 'link', nullable: true })
  async findLink(@Args('id') id: number) {
    return await this.linkService.findLink(id)
  }

  @UseGuards(GQLAuthGuard)
  @Mutation((returns) => Link)
  async postLink(
    @Args('url') url: string,
    @Args('description') description: string
  ) {
    return await this.linkService.postLink(url, description)
  }
}
