import { config } from '@/firebaseApiKey';
import { initializeApp } from "firebase/app"
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage, ref } from "firebase/storage";

import store from '@/store'

// import { ref, onUnmounted } from 'vue';

// Init Firebase
export const firebaseApp = initializeApp(config);

// Firebase auth
const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  store.dispatch("fetchUser", user);
});

// Firebase cloud firestore
export const db = getFirestore();


// Firebase storage
const storage = getStorage(firebaseApp);

// export const storageRef = ref(storage);