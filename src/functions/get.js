//function getTodos(user.uid)

import { doc, getDocs, collection, getDoc, query, where} from "firebase/firestore"; 
import { db, todoCol } from "../firebase";

const getAll = async (colonne) =>{
  const querySnapshot = await getDocs(collection(db, colonne));
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data().text}`);
  });
}

const getTodoTask = async (todoId)=>{
  const q = query(collection(db, 'task'), where('todo', "==", todoId));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    console.log(doc.id, doc.data());
  }); 
}

const getById = async (id, colonne) => {
  const docRef = doc(db, colonne, id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
  } else {
    // docSnap.data() will be undefined in this case
    console.log("No such document!");
  }
}



export  {getAll, getTodoTask, getById}


