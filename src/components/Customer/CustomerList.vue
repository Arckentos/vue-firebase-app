<template>
  <div>
    <button @click="$router.push('/customer/create')">Create</button>
  </div>

  <div style="margin-top: 10px">
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="customer in customers" :key="customer.id">
          <td>{{ customer.name }}</td>
          <td>{{ customer.date }}</td>
          <td>
            <router-link :to="`/customer/edit/${customer.id}`">
              <button>Edit</button>
            </router-link>
            <button @click="deleteDocument('customer', id)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { db } from "@/firebase";
import { collection, getDocs } from "firebase/firestore";

export default {
  data() {
    return {
      customers: [ ]
    }
  },
 created() { 
   this.customers = [];
 },
 async mounted() {
    const querySnapshot = await getDocs(collection(db, "customer"));
    querySnapshot.forEach((doc) => {
      var customer = doc.data();
      customer.id = doc.id;
      this.customers.push(customer);
    });
  },
};
</script>

<style>
</style> 