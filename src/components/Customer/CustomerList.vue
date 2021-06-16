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
        <tr v-for="{ id, name, date } in customers" :key="id">
          <td>{{ name }}</td>
          <td>{{ date }}</td>
          <td>
            <router-link :to="`/customer/edit/${id}`">
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
import { getAllDocuments, deleteDocument } from '@/firebase';

export default {
 setup() {
     const customers = getAllDocuments('customer');
    return { customers, deleteDocument}
 }
};
</script>

<style>
</style> 