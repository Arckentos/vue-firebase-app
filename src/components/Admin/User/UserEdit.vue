<template>
  <div>
    <h3>Edit user</h3>
    <div>
      <label for="firstname">Firstname</label>
      <input type="text" id="firstname" v-model="user.firstname"/>
    </div>
    <div>
      <label for="lastname">Lastname</label>
      <input type="text" id="lastname" v-model="user.lastname"/>
    </div>
    <div>
      <label for="email">Email</label>
      <input type="email" id="email" v-model="user.email"/>
    </div>
    <button @click="updateUser()">Save user</button>
    <div>{{ message }}</div>
  </div>
</template>

<script>
import { db } from "@/firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";

export default {
  data() {
    return {
      user: {
        id: "",
        firstname: "",
        lastname: "",
        email: "",
        // role: [],
      },
      message: ""
    };
  },
  async created() {
    try {
      const docSnap = await getDoc(doc(db, "users", this.$route.params.id));
      if (docSnap.exists()) {
        this.user.id = docSnap.data().id;
        this.user.firstname = docSnap.data().firstname;
        this.user.lastname = docSnap.data().lastname;
        this.user.email = docSnap.data().email;
      } else {
        this.message = "User does not exist!"
        throw "Document does not exist!";
      }
    } catch (e) {
      console.log("Transaction failed: ", e);
    }
    
  },
  methods: {
    async updateUser() {
      await updateDoc(doc(db, "users", this.$route.params.id), {
        firstname: this.user.firstname,
        lastname: this.user.lastname,
        email: this.user.email,
      });
      this.message = 'User has been updated!'
    }
  }
};
</script>

<style>
input {
  margin-left: 10px;
}
</style>