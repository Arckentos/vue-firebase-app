<template>
  <section>
    <div class="ui middle aligned center aligned grid">
      <div class="column">
        <h1>Admin</h1>
        <!-- <p>User:{{ user.email }}</p> -->
        <button class="ui pink submit button" @click="logout">Signout</button>

        <div style="margin-top: 10px">
          <router-view />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  setup() {},
};
</script>

<style>
</style> 