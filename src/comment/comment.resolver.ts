import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { CommentService } from './comment.service';
import { Link } from 'src/link/link.entity';
import { Comment } from './comment.entity'


@Resolver(of => Comment)
export class CommentResolver {
    constructor(private commentService: CommentService) { }
    
}
