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
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  data() {
    return {
      email: "",
      password: "",
      errorMessage: "",
    };
  },
  created() {
    firebase.auth().onAuthStateChanged((userAuth) => {
      if (userAuth) {
        firebase
          .auth()
          .currentUser.getIdTokenResult()
          .then((tokenResult) => {
            console.log(tokenResult.claims);
          });
      }
    });
  },
  methods: {
    async loginButtonPressed() {
      try {
        const { user } = await firebase
          .auth()
          .signInWithEmailAndPassword(this.email, this.password)
          .then(() => {
            this.$router.push("/employee");
          });
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style>
</style> 