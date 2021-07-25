<template>
  <div>
    <button @click="$router.push('/contrat/create')">Create</button>
  </div>

  <div style="margin-top: 10px">
    <table>
      <thead>
        <tr>
          <th>Nom</th>
          <th>Lieu</th>
          <th>Date Debut</th>
          <th>Date Fin</th>
          <th>Commentaire</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="contrat in contrats" :key="contrat.id">
          <td>{{ contrat.nom }}</td>
          <td>{{ contrat.lieu }}</td>
          <td>{{ contrat.date_debut }}</td>
          <td>{{ contrat.date_fin }}</td>
          <td>{{ contrat.commentaire }}</td>
          <td>
            <router-link :to="`/contrat/edit/${contrat.id}`">
              <button>Edit</button>
            </router-link>
            <button @click="deleteDocument('contrat', id)">Delete</button>
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
      contrats: [ ]
    }
  },
 created() { 
   this.contrats = [];
 },
 async mounted() {
    const querySnapshot = await getDocs(collection(db, "contrats"));
    querySnapshot.forEach((doc) => {
      var contrat = doc.data();
      if (contrat.date_debut) {
        contrat.date_debut = doc.data().date_debut;
        contrat.date_fin = doc.data().date_fin;
      }
      contrat.id = doc.id;
      this.contrats.push(contrat);
    });
  },
};
</script>

<style>
</style> 