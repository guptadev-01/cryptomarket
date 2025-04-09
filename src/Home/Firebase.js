import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getFirestore, addDoc } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCA9tnsoS1gli-bnynfMiCNCMUfC0wxpL8",
  authDomain: "cryptomarket-a2a5f.firebaseapp.com",
  projectId: "cryptomarket-a2a5f",
  storageBucket: "cryptomarket-a2a5f.firebasestorage.app",
  messagingSenderId: "381463516468",
  appId: "1:381463516468:web:c3aa5f55380a411a564161",
  measurementId: "G-Z4FMJZD740"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)
const db = getFirestore(app);

const signUp = async (firstName, lastName, email, password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth,email,password);
        const user = res.user;
        await addDoc(collection(db, 'user', {
            uid: user.uid,
            firstName: '',
            lastName: '',
            authProvider: 'local',
            email: ''
        }))
    } catch (error) {
        console.log(error);
        error(error)
    }
}

const login = async (email, password) => {
    try {
        signInWithEmailAndPassword(auth,email,password)
    } catch (error) {
        console.log(error)
        error(error)
    }
}

const logout = () => {
    signOut(auth);
}

export {auth,db,login,logout,signUp}