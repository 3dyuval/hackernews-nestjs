import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Link } from 'src/link/link.entity';
import { Repository } from 'typeorm';
import { CommentParent, Comment } from './comment.entity';

@Injectable()
export class CommentService {
    constructor(@InjectRepository(Comment) private commentRepository: Repository<Comment>) { }
    
        
    
}