import { Users } from '../user/users.domain';
import { User } from '../user/user.domain';
import { ID } from '../../core/type/ID.type';
import { UserOfTodo } from '../user/userOfTodo.domain';
import { UsersOfTodo } from '../user/usersOfTodo.domain';

export class Todo {
    constructor(
        readonly id: ID,
        readonly title: string,
        readonly coverImage: string | null,
        readonly detail: string | null,
        readonly planedAt: Date,
        readonly expiredIn: number, // 1-60 minutes
        readonly startedAt: Date,
        readonly members: UsersOfTodo, // private readonly successRoom: Room, // private readonly failRoom: Room,
    ) {}
    assign = (user: UserOfTodo) => {
        this.members.push(user);
    };
    isExpired = () => Date.now() < this.expiredIn;
}
