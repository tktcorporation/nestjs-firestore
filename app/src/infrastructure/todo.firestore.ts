// // import serviceAccount from './gcp/firebase_secret.json' // prepare your firebase secret json before exec example
// import { FirestoreSimple, Collection } from '@firestore-simple/admin';
// import { Config } from './../app.config';
// import { TodoRepository } from './../application/repository/todo.repository';
// import { TodoToCreate } from './../domain/model/todoToCreate.domain';

// interface TodoToStore {
//     title: string;
//     detail: string | null;
//     planedAt: Date;
//     expiredIn: number;
//     startedAt: Date;
//     // member: Users;
// }

// export class TodoFireStore implements TodoRepository {
//     static path = `todo`;
//     private readonly collection: FirebaseFirestore.CollectionReference<
//         FirebaseFirestore.DocumentData
//     >;
//     constructor(firestore: FirebaseFirestore.Firestore) {
//         this.collection = firestore.collection(TodoFireStore.path);
//     }
//     create = async (todo: TodoToCreate) => {
//         const store: TodoToStore = {
//             title: todo.title,
//             detail: todo.detail,
//             planedAt: todo.planedAt,
//             expiredIn: todo.expiredIn,
//             startedAt: todo.startedAt,
//         };
//         const doc = this.collection.doc(todo.id);
//         const result = await doc.set(store);
//         return result.writeTime.seconds.toString();
//     };
// }
