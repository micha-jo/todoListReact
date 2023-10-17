// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { collection, getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC99lCAs0wje_G0Vwy2Wu250u5fSZEnMxs",
  authDomain: "todo-list-711b5.firebaseapp.com",
  projectId: "todo-list-711b5",
  storageBucket: "todo-list-711b5.appspot.com",
  messagingSenderId: "108712669247",
  appId: "1:108712669247:web:5aa462b17f16805dd0088a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
export const tacheCol = collection(db, "task");
export const todoCol = collection(db, "todo");

//const db = getFirestore();

// let users = [];
// getDocs(userCol)
//   .then((snapshot) => {
//     snapshot.docs.forEach((doc) => {
//       users.push({ ...doc.data(), id: doc.id });
//     });
//     console.log(users);
//   })
//   .catch((e) => console.log(e.message));

// addDoc(userCol, {
//   id: Date.now(),
//   name: "bill",
// });

// const docRef = doc(db, "users", users[0].id);
// deleteDoc(docRef);
