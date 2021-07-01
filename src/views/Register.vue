<template>
  <div>
    <form @submit.prevent="registerButtonPressed">
      <div>
        <label for="firstname">Firstname</label>
        <input
          type="text"
          name="firstname"
          id="firstname"
          v-model="firstname"
        />
      </div>
      <div>
        <label for="lastname">Lastname</label>
        <input type="text" name="lastname" id="lastname" v-model="lastname" />
      </div>
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

    <div v-if="errorMailAlreadyInUse == true">
      <span style="color: red"
        >Error : {{ this.email }} has already been used to create an
        account!</span
      >
    </div>
  </div>
</template>

<script>
import { db } from "@/firebase";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

export default {
  data() {
    return {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      errorMessage: "",
      errorMailAlreadyInUse: false,
    };
  },
  setup() {},
  created() {
    const auth = getAuth();
    if (auth.currentUser) {
      this.$router.push("/");
    }
  },
  methods: {
    async registerButtonPressed() {
      const auth = getAuth();

      this.errorMailAlreadyInUse = false;

      if (auth.currentUser) {
        this.$router.push("/");
      } else {
        createUserWithEmailAndPassword(auth, this.email, this.password)
          .then((userCredential) => {
            // Signed in            
            updateProfile(auth.currentUser, { displayName: this.lastname + this.firstname })
              .then(() => {
                // Profile updated!
              })
              .catch((error) => {
                // An error occurred
              });
            const user = userCredential.user;
            const docRef = setDoc(doc(db, "users", user.uid), {
              firstname: this.firstname,
              lastname: this.lastname,
              email: user.email,
            });

            this.$router.push("/");
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;

            switch (errorCode) {
              case "auth/email-already-in-use":
                this.errorMailAlreadyInUse = true;
                console.log("Adresse email déjà utilisée");
                break;

              default:
                console.log("errorMessage: " + errorMessage);
                break;
            }
          });
      }
    },
  },
};
</script>

<style>
</style> 