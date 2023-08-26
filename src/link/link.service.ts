import { Injectable } from '@nestjs/common'
import { Link } from './link.entity'
import { Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'
import { Comment } from 'src/comment/comment.entity'

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
    if (link.comments.length) {
      let { comments } = link
      comments = await Promise.all(
        comments.map((comment) => {
          const { parentId } = comment
          if (typeof parentId === 'number') {
            comment.parent = link.comments.find(({ id }) => id === parentId)
          } else {
            comment.parent = link
          }
          return comment
        })
      )
      return comments
    }
    return []
  }

  async postLink(url: string, description: string): Promise<Link> {
    const link = this.linkRepository.create({ url, description })
    return this.linkRepository.save(link)
  }
}
