// import serviceAccount from './gcp/firebase_secret.json' // prepare your firebase secret json before exec example
import { FirestoreSimple, Collection } from '@firestore-simple/admin';
import { Config } from './../app.config';
import { User } from '../domain/model/user/user.domain';
import { UserRepository } from './../../src/application/repository/user.repository';
import { ID } from './../domain/core/type/ID.type';

export interface UserToStore {
    id: string;
    nickname: string | null;
    introduction: string | null;
}

export class UserDatasource implements UserRepository {
    static path = `${Config.FIRESTORE_ROOT_PATH}_user`;
    private readonly dao: Collection<
        UserToStore,
        Pick<UserToStore, 'id' | 'nickname' | 'introduction'>
    >;
    constructor(firestoreSimple: FirestoreSimple) {
        this.dao = firestoreSimple.collection<UserToStore>({
            path: UserDatasource.path,
        });
    }
    create = async (user: User) => {
        const store: UserToStore = user.toJson();
        return new ID(await this.dao.add(store));
    };
}
