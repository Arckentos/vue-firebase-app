<template>
  <div>
    <div style="display: flex; gap: 10px; align-items: center">
      <h2 v-if="user">Customer:{{ user }}</h2>
      <button @click="signout" style="width: max-content; height: max-content">Signout</button>
    </div>

    <div style="margin-top: 10px">
      <router-view />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      // user: null,
    };
  },
  computed: {
    ...mapGetters({
      user: "user",
    })
  },
};
</script>

<style>
</style> 