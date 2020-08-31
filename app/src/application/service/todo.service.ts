import { TodoToCreate } from '../../domain/model/todo/todoToCreate.domain';
import { TodoRepository } from '../repository/todo.repository';
import { ID } from './../../domain/core/type/ID.type';
import { TodoDatasource } from './../../infrastructure/todo.datasource';
import { FireStore } from './../../infrastructure/gcp/firestore';
import { Todo } from 'src/domain/model/todo/todo.domain';

export class TodoService {
    constructor(
        private readonly repository: TodoRepository = new TodoDatasource(
            FireStore.createSimple(),
        ),
    ) {}
    create = async (todo: TodoToCreate): Promise<ID> => {
        return await this.repository.create(todo);
    };
    replace = async (todo: Todo): Promise<ID> => {
        return await this.repository.replace(todo);
    };
}
