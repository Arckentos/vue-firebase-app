<template>
  <div>
    <span>This is the home page</span>
<div>
    <span>User: {{ user }}</span>
</div>
  </div>
</template>

<script>
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default {
  name: "Home",
  components: {},
  data() {
    return {
      user: "",
    };
  },
  created() {
    const auth = getAuth();
    const user = auth.currentUser;

    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      // ...
    } else {
      // No user is signed in.
      this.user = "";
    }
  },
};
</script>

<style>
</style>
