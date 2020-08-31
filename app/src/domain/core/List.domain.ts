export class List<T> {
    constructor(private readonly items: Array<T>) {}
    push = (item: T) => this.items.push(item);
    protected toArray = () => this.items;
}
