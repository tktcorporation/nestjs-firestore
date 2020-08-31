import { Todo } from '../../domain/model/todo/todo.domain';
import { Todos } from '../../domain/model/todo/todos.domain';
import { TodoToCreate } from '../../domain/model/todo/todoToCreate.domain';
import { ID } from 'src/domain/core/type/ID.type';

export interface TodoRepository {
    create(todo: TodoToCreate): Promise<ID>;
    replace(todo: Todo): Promise<ID>;
    // findOneById(id: string): Promise<Todo>;
    // find(): Promise<Todos>;
}
