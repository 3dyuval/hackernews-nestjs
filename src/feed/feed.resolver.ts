import { LinkService } from './../link/link.service';
import { Inject } from '@nestjs/common';
import { Link } from './../link/link.entity';
import { Resolver, Query, Field } from '@nestjs/graphql';

@Resolver()
export class FeedResolver {

    constructor(private linkService: LinkService) { }
    
    @Query(returns => [Link])
    async feed() {
        return this.linkService.getAllLinks();
    }

    @Query(returns => String)
    async info() {
        return 'Hackernews Clone';
    }

}
