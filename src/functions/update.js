import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";

const updateTask = async (colonne, id, taskCompleted) => {
    const docRef = doc(db, colonne, id);
    await updateDoc(docRef, {
        completed: taskCompleted
    });
};

export default updateTask;