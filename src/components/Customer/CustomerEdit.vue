<template>
  <div>
    <button @click="$router.push('/customer')">Back</button>
  </div>

  <div>
    <form @submit.prevent="update">
      <div>
        <label for="name"></label>
        <input type="text" id="name" v-model="form.name" required />
      </div>

      <div>
        <label for="date"></label>
        <input type="date" id="date" v-model="form.date" />
      </div>

      <button type="submit">Update customer</button>
    </form>
  </div>
</template>

<script>
import { reactive, computed, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { getDocumentById, updateDocument } from "@/firebase";

export default {
  setup() {
    const router = useRouter();
    const route = useRoute();
    const customerId = computed(() => route.params.id);
    const form = reactive({ name: "", date: "" });
    onMounted(async () => {
      const customer = await getDocumentById("customer", customerId.value);
      form.name = customer.name;
      form.date = customer.date;
    });

    const update = async () => {
      await updateDocument("customer", customerId.value, { ...form });
      router.push("/customer");
      form.name = "";
      form.date = "";
    };
    return { form, update };
  },
};
</script>