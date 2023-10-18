//function getTodos(user.uid)

import { doc, getDocs, collection, getDoc, query, where } from "firebase/firestore";
import { db, todoCol } from "../firebase";

const getAllLists = async (colonne, userId) => {
  const q = query(collection(db, colonne), where("users", "array-contains-any", [userId]));
  const querySnapshot = await getDocs(q);
  const results = [];
  querySnapshot.forEach((doc) => {
    const list = { ...doc.data(), id: doc.id };
    results.push(list);
  });
  return results;
};

const getTodoTask = async (todoId)=>{
  let data = []
  const q = query(collection(db, 'task'), where('todo', "==", todoId));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    data=[...data, {
      id: doc.id, 
      ...doc.data()
    }]
  });
  return data
}

const getById = async (id, colonne) => {
  const docRef = doc(db, colonne, id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data()
  } else {
    // docSnap.data() will be undefined in this case
    console.log("No such document!");
  }
};



export { getAllLists, getTodoTask, getById }


