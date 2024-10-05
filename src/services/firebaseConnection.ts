import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyA_LiAq9ZYLrg1y1fpuJrEn2yzSbP_e09k",
    authDomain: "webcarros-b2fc6.firebaseapp.com",
    projectId: "webcarros-b2fc6",
    storageBucket: "webcarros-b2fc6.appspot.com",
    messagingSenderId: "825024126145",
    appId: "1:825024126145:web:45eae969525b27c10b4840"
};

const app = initializeApp(firebaseConfig);


const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { db, auth, storage }