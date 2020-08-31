import { ID } from '../../core/type/ID.type';

export class UserOfTodo {
    constructor(private readonly id: ID, private readonly done: boolean) {}
    toJson = () => ({
        id: this.id.toString(),
        done: this.done,
    });
}
