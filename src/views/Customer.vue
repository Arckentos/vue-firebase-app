<template>
  <div>
    <div style="display: flex; gap: 10px; align-items: center">
      <h1 v-if="user">Customer:{{ user.email }}</h1>
      <button @click="signout" style="width: max-content; height: max-content">Signout</button>
    </div>

<div style="margin-top: 10px"></div>
    <router-view />
  </div>
</template>

<script>
import firebase from 'firebase';
export default {
  data() {
    return {
      user: null,
    };
  },
  created() {
    var self = this;
    firebase.auth().onAuthStateChanged(function (user) {
      self.user = user;
    });
  },
  methods: {
    signout() {
      firebase
        .auth()
        .signOut()
        .then((user) => {
          // this.$store.commit("setUser", null);
          this.$router.push("/login");
        });
    },
  },
};
</script>

<style>
</style> 