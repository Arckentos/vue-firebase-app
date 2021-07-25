<template>
  <div>
    <button @click="$router.push('/contrat')">Back</button>
  </div>

  <div>
    <form @submit.prevent="update">
      <div>
        <label for="nom"></label>
        <input type="text" id="nom" v-model="form.nom" required />
      </div>

      <div>
        <label for="lieu"></label>
        <input type="text" id="lieu" v-model="form.lieu" />
      </div>

      <div>
        <label for="date_debut"></label>
        <input type="date" id="date_debut" v-model="form.date_debut" />
      </div>

      <div>
        <label for="date_fin"></label>
        <input type="date" id="date_fin" v-model="form.date_fin" />
      </div>

      <div>
        <label for="commentaire"></label>
        <input type="text" id="commentaire" v-model="form.commentaire" />
      </div>

      <button type="submit">Update contrat</button>
    </form>
  </div>
</template>

<script>
import { reactive, computed, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { db } from "@/firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";

export default {
  setup() {
    const router = useRouter();
    const route = useRoute();
    const customerId = computed(() => route.params.id);
    const form = reactive({ nom: "", lieu: "", date_debut: "", date_fin: "", commentaire: "" });

    onMounted(async () => {
      const docSnap = await getDoc(doc(db, "contrats", customerId.value));
      if (docSnap.exists()) {
        form.nom = docSnap.data().nom;
        form.lieu = docSnap.data().lieu;
        form.date_debut = docSnap.data().date_debut;
        form.date_fin = docSnap.data().date_fin;
        form.commentaire = docSnap.data().commentaire;
      }
    });

    const update = async () => {
      await updateDoc(doc(db, "contrats", customerId.value), { ...form });
      router.push("/contrat");
      form.nom = "";
      form.lieu = "";
      form.date_debut = "";
      form.date_fin = "";
      form.commentaire = "";
    };
    return { form, update };
  },
};
</script>