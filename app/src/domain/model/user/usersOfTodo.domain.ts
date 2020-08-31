import { ID } from '../../core/type/ID.type';
import { List } from './../../../domain/core/List.domain';
import { UserOfTodo } from './userOfTodo.domain';

export class UsersOfTodo extends List<UserOfTodo> {
    constructor(users: UserOfTodo[]) {
        super(users);
    }
    toJson = () => this.toArray().map(v => v.toJson());
}
