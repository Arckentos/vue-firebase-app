import firebase from "firebase";
import { config } from '@/firebaseApiKey';
import { ref, onUnmounted } from 'vue';

const firebaseApp = firebase.initializeApp(config);

const db = firebaseApp.firestore();
const employeeCollection = db.collection("employee");

export const createEmployee = employee => {
    return employeeCollection.add(employee);
}

export const getEmployee = async id => {
    const employee = await employeeCollection.doc(id).get();
    return employee.exists ? employee.data() : null;
}

export const updateEmployee = (id, employee) => {
    return employeeCollection.doc(id).update(employee);
}

export const deleteEmployee = id => {
    return employeeCollection.doc(id).delete();
}

export const useLoadEmployees = () => {
    const employees = ref([]);
    const close = employeeCollection.onSnapshot(snapshot => {
        employees.value = snapshot.docs.map(doc => ({ id : doc.id, ... doc.data() }))
    });
    onUnmounted(close);
    return employees;
}

