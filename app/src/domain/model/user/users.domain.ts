import { User } from './user.domain';
import { List } from '../../core/List.domain';

export class Users extends List<User> {
    constructor(items: Array<User>) {
        super(items);
    }
    toJson = () => this.toArray().map(v => v.toJson());
}
