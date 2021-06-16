<template>
    <div>
        <button @click="$router.push('/employee')">Back</button>
    </div>

    <div>
        <form @submit.prevent="onSubmit">
            <div>
                <label for="name"></label>
                <input type="text" id="name" v-model="form.name" required>
            </div>

            <div>
                <label for="date"></label>
                <input type="date" id="date" v-model="form.date">
            </div>

            <button type="submit">Create employee</button>
        </form>
    </div>
</template>

<script>
import { createEmployee } from '@/firebase';
import { reactive } from 'vue';
export default {
    setup() {
        const form = reactive({ name: '', date: '' });
        const onSubmit = async () => {
            await createEmployee({ ... form });
            form.name = '';
            form.date = '';
        };
        return { form, onSubmit };
    },
}
</script> 