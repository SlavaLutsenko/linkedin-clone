import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDNMs0BOGfdIZ86L-Ag-L3e_oiMzMH0TjQ",
  authDomain: "linkedin-clone-23ac3.firebaseapp.com",
  projectId: "linkedin-clone-23ac3",
  storageBucket: "linkedin-clone-23ac3.appspot.com",
  messagingSenderId: "419131475628",
  appId: "1:419131475628:web:517a04daaefba750fc8109",
};

const firebaseApp = initializeApp(firebaseConfig);
const storage = getStorage(firebaseApp);
const db = getFirestore();
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { auth, provider, storage };
export default db;
