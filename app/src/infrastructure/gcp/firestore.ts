import * as admin from 'firebase-admin';
import { FirestoreSimple } from '@firestore-simple/admin';
import serviceAccount from './../../infrastructure/gcp/firebase_secret';

export class FireStore {
    private static app?: admin.app.App;
    static createSimple = (): FirestoreSimple => {
        return new FirestoreSimple(FireStore.create());
    };
    static create = (): FirebaseFirestore.Firestore => {
        if (FireStore.app) return admin.firestore(FireStore.app);
        FireStore.app = admin.initializeApp({
            credential:
                process.env.NODE_ENV === 'production'
                    ? admin.credential.applicationDefault()
                    : admin.credential.cert(
                          serviceAccount as admin.ServiceAccount,
                      ),
        });
        return admin.firestore();
    };
}
