<template>
  <div>
    <table class="ui celled table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Edit</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td data-label="Name">{{ user.firstname }} {{ user.lastname }}</td>
          <td data-label="Email">{{ user.email }}</td>
          <td><button @click="goToEdit(user.id)">Edit</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { db } from "@/firebase";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import { collection, getDocs } from "firebase/firestore";

export default {
 data() {
    return {
      users: [],
      user: null,
    };
  },
  created() {
    // const auth = getAuth();
    // onAuthStateChanged(auth, (user) => {
    //   if (user) {
    //     const uid = user.uid;
    //   } else {
    //     // User is signed out
    //   }
    // });
    this.users = [];
  },
  async mounted() {
    const querySnapshot = await getDocs(collection(db, "users"));
    querySnapshot.forEach((doc) => {
      if (doc.data().email) {
        // doc.data() is never undefined for query doc snapshots
        // console.log(doc.id, " => ", doc.data());
        var user = doc.data();
        user.id = doc.id;
        // if (!user.role.admin)
        this.users.push(user);
      }
    });
  },
  methods: {
    async logout() {
      const auth = getAuth();
      signOut(auth)
        .then(() => {
          // Sign-out successful.
          this.$router.push("/");
        })
        .catch((error) => {
          // An error happened.
        });
    },
    goToEdit(userId) {
      this.$router.push({ name: "AdminUserEdit", params: { id: userId } });
    },
  },
};
</script>

<style>
</style>