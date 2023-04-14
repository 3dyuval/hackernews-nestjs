import { Module } from '@nestjs/common';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { TodoItemEntity } from './todo-item.entity';
import { TodoItemDTO } from './todo-item.dto';
import { TodoItemCreateDTO } from './todo-item.create.dto';

@Module({
    imports: [
        NestjsQueryGraphQLModule.forFeature({
            imports: [NestjsQueryTypeOrmModule.forFeature([TodoItemEntity])],
            resolvers: [{
                EntityClass: TodoItemEntity,
                DTOClass: TodoItemDTO,
                CreateDTOClass: TodoItemCreateDTO
            }]
        })
    ]
})
export class TodoItemModule {}
