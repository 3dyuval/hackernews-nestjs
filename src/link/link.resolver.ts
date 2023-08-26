import { Query, Args, Resolver, Mutation, Int, ResolveField, Parent } from '@nestjs/graphql';
import {LinkService} from './link.service'
import {Link} from './link.entity'
import { Comment } from '../comment/comment.entity'

@Resolver(of => Link)
export class LinkResolver {
    constructor(private linkService: LinkService) { }


    @Query(returns => Link, {name: 'link', nullable: true})
    async findLink(@Args('id', { type: () => Int}) id: number) {
        return await this.linkService.findLink(id);
    }

    @Mutation(returns => Link)
    async postLink(@Args('url') url: string, @Args('description') description: string) {
        return await this.linkService.postLink(url, description);
    }

    @ResolveField('comments', returns => [Comment])
    async getComments(@Parent() link: Link) {
        return await this.linkService.getCommentsParent(link);
    }

}
