import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ConfigModule } from '@nestjs/config';
import { LinkModule } from './link/link.module';
import { CommentModule } from './comment/comment.module';
import { FeedModule } from './feed/feed.module';
import * as path from 'path';
@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env['DB_POSTGRES_HOST'],
      port: Number.parseInt(process.env['DB_POSTGRES_PORT']),
      database: process.env['DB_POSTGRES_CLIENT_DATABASE_NAME'],
      username: process.env['DB_POSTGRES_USER'],
      password: process.env['DB_POSTGRES_PASSWORD'],
      autoLoadEntities: true,
      synchronize: true,
      logging: true,
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: path.join(process.cwd(), 'src', 'schema.gql'),
    }),
    LinkModule,
    CommentModule,
    FeedModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
