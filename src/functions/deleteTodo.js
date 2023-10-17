
import { doc, updateDoc, deleteField, getDoc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase";

const deleteTodo = async (id, colonne) => {
  const docRef = doc(db, colonne, id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    await deleteDoc(docRef)
    return 'Delete'
  } else {
    // docSnap.data() will be undefined in this case
    return 'erreur'
  }
}

export default deleteTodo