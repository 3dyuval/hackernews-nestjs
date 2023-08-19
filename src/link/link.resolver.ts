import { Query, Args, Resolver } from '@nestjs/graphql';
import {LinkService} from './link.service'
import {Link} from './link.entity'

@Resolver()
export class LinkResolver {
    constructor(private linkService: LinkService) { }


    @Query(returns => Link, {name: 'link', nullable: true})
    async findLink(@Args('id') id: number) {
        return await this.linkService.findLink(id);
    }
        

}
