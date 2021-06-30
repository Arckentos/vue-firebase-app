// import firebase from "firebase";
import { initializeApp } from "firebase/app"

import { config } from '@/firebaseApiKey';
import { ref, onUnmounted } from 'vue';

// const firebaseApp = firebase.initializeApp(config);
const firebaseApp = initializeApp(config);


// export const db = firebaseApp.firestore();


// export const createDocument = (collection, document) => {
//     return db.collection(collection).add(document);
// }

// export const getDocumentById = async (collection, id) => {
//     const employee = await  db.collection(collection).doc(id).get();
//     return employee.exists ? employee.data() : null;
// }

// export const updateDocument = (collection, id, document) => {
//     return db.collection(collection).doc(id).update(document);
// }

// export const deleteDocument = (collection, id) => {
//     return db.collection(collection).doc(id).delete();
// }

// export const getAllDocuments = (collection) => {
//     const documents = ref([]);
//     const close = db.collection(collection).onSnapshot(snapshot => {
//         documents.value = snapshot.docs.map(doc => ({ id : doc.id, ... doc.data() }))
//     });
//     onUnmounted(close);
//     return documents;
// }






// const employeeCollection = db.collection("employee");

// export const createEmployee = employee => {
//     return employeeCollection.add(employee);
// }

// export const getEmployee = async id => {
//     const employee = await employeeCollection.doc(id).get();
//     return employee.exists ? employee.data() : null;
// }

// export const updateEmployee = (id, employee) => {
//     return employeeCollection.doc(id).update(employee);
// }

// export const deleteEmployee = id => {
//     return employeeCollection.doc(id).delete();
// }

// export const useLoadEmployees = () => {
//     const employees = ref([]);
//     const close = employeeCollection.onSnapshot(snapshot => {
//         employees.value = snapshot.docs.map(doc => ({ id : doc.id, ... doc.data() }))
//     });
//     onUnmounted(close);
//     return employees;
// }

