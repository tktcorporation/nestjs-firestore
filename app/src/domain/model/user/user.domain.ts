import { ID } from '../../core/type/ID.type';

export class User {
    constructor(
        private readonly id: ID,
        private readonly nickname: string | null,
        private readonly introduction: string | null,
    ) {}
    toJson = () => ({
        id: this.id.toString(),
        nickname: this.nickname,
        introduction: this.introduction,
    });
}
