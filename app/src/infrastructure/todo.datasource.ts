// import serviceAccount from './gcp/firebase_secret.json' // prepare your firebase secret json before exec example
import { FirestoreSimple, Collection } from '@firestore-simple/admin';
import { Config } from './../app.config';
import { TodoRepository } from './../application/repository/todo.repository';
import { TodoToCreate } from '../domain/model/todo/todoToCreate.domain';
import { UserToStore } from './user.datasource';
import { ID } from './../domain/core/type/ID.type';
import { Todo } from 'src/domain/model/todo/todo.domain';

interface UserOfTodoToStore {
    id: string;
    done: boolean;
}

interface TodoToStore {
    id: string;
    title: string;
    coverImage: string | null;
    detail: string | null;
    planedAt: Date;
    expiredIn: number; // 1-60 minutes
    startedAt: Date;
    member: UserOfTodoToStore[]; // private readonly successRoom: Room, // private readonly failRoom: Room,
}

export class TodoDatasource implements TodoRepository {
    static path = `${Config.FIRESTORE_ROOT_PATH}_todo`;
    private readonly dao: Collection<
        TodoToStore,
        Pick<
            TodoToStore,
            'title' | 'detail' | 'planedAt' | 'expiredIn' | 'startedAt'
        >
    >;
    constructor(firestoreSimple: FirestoreSimple) {
        this.dao = firestoreSimple.collection<TodoToStore>({
            path: TodoDatasource.path,
        });
    }
    create = async (todo: TodoToCreate) => {
        const store: TodoToStore = {
            id: todo.id.toString(),
            title: todo.title,
            coverImage: todo.coverImage,
            detail: todo.detail,
            planedAt: todo.planedAt,
            expiredIn: todo.expiredIn,
            startedAt: todo.startedAt,
            member: todo.members.toJson(),
        };
        return new ID(await this.dao.add(store));
    };
    replace = async (todo: Todo) => {
        const store: TodoToStore = {
            id: todo.id.toString(),
            title: todo.title,
            coverImage: todo.coverImage,
            detail: todo.detail,
            planedAt: todo.planedAt,
            expiredIn: todo.expiredIn,
            startedAt: todo.startedAt,
            member: todo.members.toJson(),
        };
        return new ID(await this.dao.update(store));
    };
}
