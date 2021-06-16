<template>
  <div class="home">

     <table>
      <thead>
        <th>
          <td>Name</td>
          <td>Date</td>
        </th>
      </thead>
      <tbody>
        <tr v-for="{ id, name, date } in employees" :key="id">
          <td>{{ name }}</td>
          <td>{{ date }}</td>
          <td>
            <router-link :to="`/edit/${id}`">
              <button>Edit</button>
            </router-link>
            <button @click="deleteUser(id)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>

  </div>
</template>

<script>
import { useLoadEmployees, deleteEmployee } from "@/firebase";

export default {
  name: "Home",
  components: {},
  setup() {
    const employees = useLoadEmployees();
    return { employees, deleteEmployee };
  },
};
</script>
