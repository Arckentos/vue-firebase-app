<template>
    <div>
        <button @click="$router.push('/employee/create')">Create</button>
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
                <tr v-for="{ id, name, date } in employees" :key="id">
                <td>{{ name }}</td>
                <td>{{ date }}</td>
                <td>
                    <router-link :to="`/employee/edit/${id}`">
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
import { useLoadEmployees, deleteEmployee } from '@/firebase';
export default {
  setup() {
    const employees = useLoadEmployees();
    return { employees, deleteEmployee}
  }
};
</script>

<style>
</style> 