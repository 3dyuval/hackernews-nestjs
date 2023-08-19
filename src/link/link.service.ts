import { Injectable } from '@nestjs/common';
import { Link } from './link.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class LinkService {

    constructor(@InjectRepository(Link) private linkRepository: Repository<Link>) { }


    async getAllLinks(): Promise<Link[]> {
        return this.linkRepository.find();
    }

    async findLink(id: number): Promise<Link | null> {
        return this.linkRepository.findOneBy({ id });
    }

    async postLink(url: string, description: string): Promise<Link> {
        const link = this.linkRepository.create({ url, description });
        return this.linkRepository.save(link);
    }
}
