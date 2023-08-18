import { Module } from '@nestjs/common';
import { LinkEntity } from './link.entity';
import { LinkService } from './link.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([LinkEntity])],
  providers: [LinkService, LinkEntity],
  exports: [LinkService],
})
export class LinkModule {}
