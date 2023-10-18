
import { doc, getDoc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase";

const delTodo = async (id) => {
  const docRef = doc(db, 'task', id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    await deleteDoc(docRef)
    return 1
  } else {
    // docSnap.data() will be undefined in this case
    return 0
  }
}

export default delTodo