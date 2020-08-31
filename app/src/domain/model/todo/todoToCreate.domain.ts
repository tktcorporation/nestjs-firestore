import { Users } from '../user/users.domain';
import { v4 as uuidv4 } from 'uuid';
import { ID } from '../../core/type/ID.type';
import { UsersOfTodo } from '../user/usersOfTodo.domain';

export class TodoToCreate {
    readonly id: ID;
    constructor(
        readonly title: string,
        readonly coverImage: string | null,
        readonly detail: string | null,
        readonly planedAt: Date,
        readonly expiredIn: number, // 1-60 minutes
        readonly startedAt: Date,
        readonly members: UsersOfTodo, // private readonly successRoom: Room, // private readonly failRoom: Room,
    ) {
        this.id = new ID();
    }
}
