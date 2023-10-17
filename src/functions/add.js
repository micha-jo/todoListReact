//addToDo({todo.id : string, todo.completed : bool, todo.text : string, user.uid: string})

import { addDoc, collection } from "firebase/firestore"; 
import {  db } from "../firebase";

const add = async (data, colonne) =>{
  try {
    const docRef = await addDoc(collection(db, colonne),data);
    return docRef.id;
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

export default add

