import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Link } from 'src/link/link.entity';
import { Repository } from 'typeorm';
import { CommentParent, Comment } from './entities/comment.entity';
import { CommentInput } from './entities/comment-input.entity';

@Injectable()
export class CommentService {
    constructor(@InjectRepository(Comment) private commentRepository: Repository<Comment>) { }
    
    async postComment(args: CommentInput): Promise<Comment> {
        const comment = this.commentRepository.create(args)
        return this.commentRepository.save(comment)
    }
    
}