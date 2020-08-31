import { TodoService } from './todo.service';
import { TodoDatasource } from '../../../src/infrastructure/todo.datasource';
import { FireStore } from '../../../src/infrastructure/gcp/firestore';
import { TodoToCreate } from '../../domain/model/todo/todoToCreate.domain';
import { Users } from '../../domain/model/user/users.domain';
import { FirestoreSimple } from '@firestore-simple/admin';
import { User } from '../../domain/model/user/user.domain';
import { ID } from '../../domain/core/type/ID.type';
import { UserOfTodo } from './../../domain/model/user/userOfTodo.domain';
import { UsersOfTodo } from './../../domain/model/user/usersOfTodo.domain';
// import { TodoFireStore } from '../../../src/infrastructure/todo.firestore';

describe('TodoService', () => {
    it('create', async () => {
        const service = new TodoService(
            new TodoDatasource(FireStore.createSimple()),
        );
        const todo = new TodoToCreate(
            'はやおき',
            null,
            null,
            new Date(),
            Date.now(),
            new Date(),
            new UsersOfTodo([
                new UserOfTodo(new ID('deadbeaf'), false),
                new UserOfTodo(new ID('deadbeafdead'), false),
            ]),
        );
        const result = await service.create(todo);
        expect(typeof result.toString()).toBe('string');
    });
});
