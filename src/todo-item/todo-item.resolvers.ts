import { QueryService, InjectQueryService, Filter } from '@ptc-org/nestjs-query-core';
import { CRUDResolver, ConnectionType } from '@ptc-org/nestjs-query-graphql';
import { Resolver, Query, Args } from '@nestjs/graphql';
import { TodoItemDTO } from './todo-item.dto';
import { TodoItemEntity } from './todo-item.entity';
import { TodoItemCreateDTO } from './todo-item.create.dto';
import { TodoItemConnection, TodoItemQuery } from './types';

@Resolver(() => TodoItemDTO)
export class TodoItemResolver {
  constructor(
    @InjectQueryService(TodoItemEntity) readonly service: QueryService<TodoItemDTO>
  ) {}

  @Query(() => TodoItemConnection)
  completedTodoItems(@Args() query: TodoItemQuery): Promise<ConnectionType<TodoItemDTO>> {
    const filter: Filter<TodoItemDTO> = {
      ...query.filter,
      ...{completed: {is: true}}
    }
    return TodoItemConnection.createFromPromise(q => this.service.query(q), {...query, ...{filter}})
  }
}
