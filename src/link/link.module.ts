import { Module } from '@nestjs/common';
import { Link } from './link.entity';
import { LinkService } from './link.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LinkResolver } from './link.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Link])],
  providers: [LinkService, Link, LinkResolver],
  exports: [LinkService],
})
export class LinkModule {}
