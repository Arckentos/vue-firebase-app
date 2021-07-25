<template>
  <div>
    <div style="display: flex; gap: 10px; align-items: center">
      <!-- <h1 v-if="user">Customer:{{ user.email }}</h1> -->
      <button @click="signout" style="width: max-content; height: max-content">Signout</button>
    </div>

    <div style="margin-top: 10px">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: null,
    };
  },
};
</script>

<style>
</style> 