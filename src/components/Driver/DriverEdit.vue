<template>
    <div>
        <form @submit.prevent="update">
            <div>
                <label for="name"></label>
                <input type="text" id="name" v-model="form.name" required>
            </div>

            <div>
                <label for="date"></label>
                <input type="date" id="date" v-model="form.date">
            </div>

            <button type="submit">Update employee</button>
        </form>
    </div>
</template>

<script>
import { reactive, computed, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { getEmployee, updateEmployee } from '@/firebase';
export default {
    setup() {
        const router = useRouter();
        const route = useRoute();
        const employeeId = computed(() => route.params.id);
        const form = reactive({ name: '', date: '' });
        onMounted(async () => {
            const employee = await getEmployee(employeeId.value);
            form.name = employee.name;
            form.date = employee.date;
        });
        
        const update = async () => {
            await updateEmployee(employeeId.value, { ... form });
            router.push('/');
            form.name = '';
            form.date = '';
        };
        return { form, update };
    },
}
</script> 