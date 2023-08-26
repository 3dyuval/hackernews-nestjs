import { Injectable } from '@nestjs/common'
import { Link } from './link.entity'
import { Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'
import { Comment } from 'src/comment/entities/comment.entity'

@Injectable()
export class LinkService {
  constructor(
    @InjectRepository(Link) private linkRepository: Repository<Link>
  ) {}

  async getAllLinks(): Promise<Link[]> {
    return this.linkRepository.find()
  }

  async findLink(id: number): Promise<Link | null> {
    return await this.linkRepository.findOne({
      where: { id },
      relations: ['comments'],
    })
  }

  async getCommentsParent(link: Link): Promise<Comment[]> {
    if (!link.comments.length) {
      return []
    }
    const { comments } = link
    return comments.map((comment) => {
      const { parentId } = comment
      if (typeof parentId === 'number') {
        comment.parent = comments.find(({ id }) => id === parentId)
      } else {
        comment.parent = link as Link
      }
      return comment
    })
  }

  async postLink(url: string, description: string): Promise<Link> {
    const link = this.linkRepository.create({ url, description })
    return this.linkRepository.save(link)
  }
}
