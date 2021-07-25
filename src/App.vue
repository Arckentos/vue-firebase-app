<template>
  <nav id="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/register">Register</router-link>
    <router-link to="/login">Login</router-link>
    <router-link to="/customer">Customer</router-link>
    <router-link to="/contrat">Contrat</router-link>
    <router-link to="/admin">Admin</router-link>
    <!-- 
    <router-link to="/employee">Employee</router-link>
    <router-link to="/driver">Driver</router-link> 
    -->
  </nav>

  <div class="main">
    <router-view />
  </div>
</template>

<style>
body {
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}

#nav {
  padding: 30px 0px;
  justify-content: center;
  display: flex;
  gap: 10px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.main {
  padding: 20px;
}
</style>
