import { User } from '../../../domain/model/user/user.domain';
import { ID } from '../../../domain/core/type/ID.type';
import { UserRepository } from '../../../application/repository/user.repository';
import { UserDatasource } from '../../../infrastructure/user.datasource';
import { FirestoreSimple } from '@firestore-simple/admin';
import { FireStore } from '../../../infrastructure/gcp/firestore';

export class UserService {
    private readonly repository: UserRepository;
    constructor() {
        this.repository = new UserDatasource(FireStore.createSimple());
    }
    create = async (user: User): Promise<ID> => {
        return await this.repository.create(user);
    };
}
