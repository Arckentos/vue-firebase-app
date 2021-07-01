<template>
  <div>
    <h3>Edit user</h3>
    <div>
      <label for="firstname">Firstname</label>
      <input type="text" id="firstname" v-model="user.firstname" />
    </div>
    <div>
      <label for="lastname">Lastname</label>
      <input type="text" id="lastname" v-model="user.lastname" />
    </div>
    <div>
      <label for="email">Email</label>
      <input type="email" id="email" v-model="user.email" />
    </div>
    {{user.id}}
  </div>
</template>

<script>
import { db } from "@/firebase";
import { doc, getDoc } from "firebase/firestore";

export default {
  setup() {
    return {
      user: {
        id: "",
        firstname: "",
        lastname: "",
        email: "",
        // role: [],
      },
    };
  },
  async mounted() {
    const docSnap = await getDoc(doc(db, "users", this.$route.params.id));
    if (docSnap.exists()) {
    //   console.log("Document data:", docSnap.data());
      this.user.id = docSnap.id;
    //   this.user.firstname = docSnap.data().firstname;
    //   this.user.lastname = docSnap.data().lastname;
    //   this.user.email = docSnap.data().email;
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  },
};
</script>

<style>
input {
  margin-left: 10px;
}
</style>