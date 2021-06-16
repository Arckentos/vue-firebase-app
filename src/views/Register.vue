<template>
  <div>
    <form @submit.prevent="registerButtonPressed">
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
        <button @click="registerButtonPressed">Register</button>
      </div>

      <div class="errorMessage">{{ errorMessage }}</div>
    </form>

    <div>
      Have an account already?
      <router-link :to="{ name: 'Login' }">Login</router-link>
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
  setup() {},
  methods: {
    async registerButtonPressed() {
      try {
        // var { user } =
        await firebase
          .auth()
          .createUserWithEmailAndPassword(this.email, this.password)
          .then((userCredential) => {
            // Signed in
            // var user = userCredential.user;
            console.log(userCredential.user);
            // signout
            firebase
              .auth()
              .signOut()
              .then((/*user */) => {
                this.$router.push("/");
              });
          })
          .catch((error) => {
            var errorCode = error.code;
            this.errorMessage = error.message + "  " + error.code;
            // ..
          });
      } catch (error) {
        console.log(error.message);
        this.errorMessage = error.message + "  " + error.code;
      }
    },
  },
};
</script>

<style>
</style> 