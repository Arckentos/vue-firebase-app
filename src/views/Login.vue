<template>
  <div>
    <form @submit.prevent="loginButtonPressed">
      <div>
        <label for="email">Email</label>
        <input type="email" name="email" id="email" v-model="email" />
      </div>
      <div>
        <label for="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          v-model="password"
        />
      </div>
      <div>
        <button @click="registerButtonPressed">Login</button>
      </div>

      <div class="errorMessage">{{ errorMessage }}</div>
    </form>

    <div>
      Don't have an account?
      <router-link :to="{ name: 'Register' }">Register</router-link>
    </div>

    <div v-if="errorBadPassword == true">
      <span style="color: red"
        >Error : the email and the password don't match!</span
      >
    </div>
  </div>
</template>

<script>
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

export default {
  data() {
    return {
      email: "",
      password: "",
      errorMessage: "",
      errorBadPassword: false,
    };
  },
  created() {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
      } else {
        // User is signed out
      }
    });
  },
  methods: {
    async loginButtonPressed() {
      this.errorBadPassword = false;
      const auth = getAuth();
      signInWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          this.$router.push("/");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;

          switch (errorCode) {
            case "auth/wrong-password":
              console.log("Erreur, mauvais mot de passe");
              this.errorBadPassword = true;
              break;
            case "auth/too-many-requests":
              console.log("Trop de tentatives");
              break;

            default:
              console.log("errorMessage: " + errorMessage);
              break;
          }
        });
    },
  },
};
</script>

<style>
</style> 