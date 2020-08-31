import { Todo } from './todo.domain';
import { List } from '../../core/List.domain';

export class Todos extends List<Todo> {
    constructor(items: Array<Todo>) {
        super(items);
    }
}
