import { LinkService } from './../link/link.service';
import { Inject } from '@nestjs/common';
import { Link } from './../link/link.entity';
import { Resolver, Query } from '@nestjs/graphql';

@Resolver()
export class FeedResolver {

    constructor(private linkService: LinkService) { }
    
    @Query(() => [Link])
        
    async feed() {
        return this.linkService.getAllLinks();
    }
}
