import { v4 as uuidv4 } from 'uuid';
export class ID {
    private readonly value: string;
    constructor(uuid?: string) {
        this.value = uuid ?? uuidv4();
    }
    toString = (): string => this.value;
}
