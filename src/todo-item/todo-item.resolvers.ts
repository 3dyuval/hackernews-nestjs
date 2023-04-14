import { QueryService, InjectQueryService } from '@ptc-org/nestjs-query-core';
import { CRUDResolver } from '@ptc-org/nestjs-query-graphql';
import { Resolver, Query, Args } from '@nestjs/graphql';
import { TodoItemDTO } from './todo-item.dto';
import { TodoItemEntity } from './todo-item.entity';
import { TodoItemCreateDTO } from './todo-item.create.dto';

@Resolver(() => TodoItemDTO)
export class TodoItemResolver extends CRUDResolver(TodoItemDTO, {
    CreateDTOClass: TodoItemCreateDTO,
}) {
  constructor(
    @InjectQueryService(TodoItemEntity) readonly service: QueryService<TodoItemDTO>
  ) {
    super(service);
  }
}
