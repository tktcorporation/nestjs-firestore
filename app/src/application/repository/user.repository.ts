import { Todo } from '../../domain/model/todo/todo.domain';
import { User } from 'src/domain/model/user/user.domain';
import { ID } from 'src/domain/core/type/ID.type';

export interface UserRepository {
    create(todo: User): Promise<ID>;
    // update(todo: Todo): Promise<void>;
    // findOneById(id: string): Promise<Todo>;
    // find(): Promise<Todos>;
}
