<template>
  <nav class="navbar">
    <img alt="logo" src="./assets/logo.png" />
    <div class="spanner"></div>
    <div class="navbar-brand">
      <router-link class="navbar-item" to="/">Home</router-link>
    </div>
    <div class="navbar-menu">
      <div class="navbar-end">
        <router-link class="navbar-item" to="/map">Kampusmap</router-link>
      </div>
    </div>
  </nav>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ohmunity-webapp',
  data: function () {
    return {};
  },
});
</script>
<style>
body {
  margin: 0;
}
.navbar {
  background-color: #fafafa;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 0.5rem 1rem;
}

.navbar img {
  height: 2rem;
}

.navbar .spanner {
  width: 80%;
}

.navbar-brand {
  display: flex;
  align-items: center;
}

.navbar-brand .navbar-item {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

.navbar-item {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  margin-right: 1rem;
  transition: color 0.2s ease-in-out;
  font-size: 1.5rem;
}

.navbar-item:hover {
  color: #e67e22;
}
</style>
