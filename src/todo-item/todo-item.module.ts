import { Module } from '@nestjs/common';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { TodoItemEntity } from './todo-item.entity';
import { TodoItemDTO } from './todo-item.dto';
import { TodoItemCreateDTO } from './todo-item.create.dto';
import { TodoItemResolver } from './todo-item.resolvers';

@Module({
    providers: [TodoItemResolver],
    imports: [
        NestjsQueryGraphQLModule.forFeature({
            imports: [NestjsQueryTypeOrmModule.forFeature([TodoItemEntity])],
            dtos: [{DTOClass: TodoItemDTO}],
        })
    ],
    
})
export class TodoItemModule {}
