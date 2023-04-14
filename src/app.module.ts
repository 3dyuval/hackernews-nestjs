import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoItemModule } from './todo-item/todo-item.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      database: 'gettingstarted',
      username: 'gettingstarted',
      autoLoadEntities: true,
      synchronize: true,
      logging: true
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
    }),
    TodoItemModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
