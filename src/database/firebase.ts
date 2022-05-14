import firebaseConfig from 'src/database/firebaseConfig';
import { initializeApp } from 'firebase/app';
import { getFirestore, doc, setDoc, getDoc } from 'firebase/firestore';
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  GithubAuthProvider,
  signOut,
  onIdTokenChanged,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { getDatabase } from 'firebase/database';

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const database = getDatabase(firebaseApp);
const db = getFirestore(firebaseApp);

const addDocumentAtFirestore = async (where: string, id: string, data: any) =>
  await setDoc(doc(db, where, id), data);

const getDocumentAtFirestore = async (where: string, id: string) => {
  const docRef = doc(db, where, id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data();
  }
};

export { addDocumentAtFirestore, getDocumentAtFirestore };
