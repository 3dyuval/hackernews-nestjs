import { Module } from '@nestjs/common';
import { Link } from './link.entity';
import { LinkService } from './link.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Link])],
  providers: [LinkService, Link],
  exports: [LinkService],
})
export class LinkModule {}
