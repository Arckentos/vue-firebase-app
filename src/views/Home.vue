<template>
  <div>
    <h3>This is the home page</h3>
    <div>
      <span>User: {{ user }}</span>
      <button v-if="user" @click="logout">Logout</button>
    </div>
  </div>
</template>

<script>
import { getAuth, signOut } from "firebase/auth";

export default {
  name: "Home",
  components: {},
  data() {
    return {
      user: "",
    };
  },
  mounted() {
    const auth = getAuth();
    const user = auth.currentUser;
    if (user) {
      this.user = user.email;
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      // ...
    } else {
      // No user is signed in.
      // this.user = "";
    }
  },
  methods: {
    async logout() {    
      const auth = getAuth();
      signOut(auth)
        .then(() => {
          // Sign-out successful.
          this.$router.go(0);
        })
        .catch((error) => {
          // An error happened.
        });
    },
  },
};
</script>

<style>
</style>
