import { ConfigModule } from '@nestjs/config'
import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { LinkModule } from './link/link.module'
import { CommentModule } from './comment/comment.module'
import { FeedModule } from './feed/feed.module'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import * as path from 'path'
import { GraphQLModule } from '@nestjs/graphql'

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      url: `postgres://3dyuval:${process.env['DB_NEON_PASSWORD']}@ep-rapid-leaf-80187615.us-west-2.aws.neon.tech/hackernews?sslmode=require`,
      type: 'postgres' as any,
      autoLoadEntities: true,
      synchronize: false,
      logging: true,
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: path.join(process.cwd(), 'src', 'schema.gql'),
    }),
    LinkModule,
    CommentModule,
    FeedModule,
    ConfigModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
