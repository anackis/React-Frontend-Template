import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from 'firebase/auth';
import { app } from './firebaseConfig';

const auth = getAuth(app);

const signIn = (email: string, password: string) => signInWithEmailAndPassword(auth, email, password);
const signUp = (email: string, password: string) => createUserWithEmailAndPassword(auth, email, password);
const logOut = () => signOut(auth);

export { signIn, signUp, logOut, auth };
