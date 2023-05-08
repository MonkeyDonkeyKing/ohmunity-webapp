<template>
  <nav class="navbar">
    <router-link class="navbar-item" to="/">
      <img alt="logo" src="./assets/logo.png" />
    </router-link>
    <div class="spanner"></div>
    <div class="navbar-brand">
      <router-link class="navbar-item" to="/">Home</router-link>
    </div>
    <div class="navbar-menu">
      <div class="navbar-end">
        <router-link class="navbar-item" to="/map">Campus map</router-link>
      </div>
    </div>
  </nav>
  <router-view />
  <demo-banner></demo-banner>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import DemoBanner from './components/DemoBanner.vue';

export default defineComponent({
  name: 'ohmunity-webapp',
  data: function () {
    return {};
  },
  components: {
    DemoBanner,
  },
});
</script>
<style>
:root {
  --text: white;
  --background: #29556d;
  --egg: #123c53;
  --primary: #7092a4;
  --secondary: #487288;
  --other: #032538;
}
body {
  margin: 0;
  background-color: var(--background);
  color: var(--text);
}
a:link {
  color: var(--secondary);
}

a:visited {
  color: var(--primary);
}
.navbar {
  background-color: var(--secondary);
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
  color: var(--primary);
  text-decoration: none;
}

.navbar-item {
  font-weight: bold;
  color: var(--primary);
  text-decoration: none;
  margin-right: 1rem;
  transition: color 0.2s ease-in-out;
  font-size: 1.5rem;
}

.navbar-item:hover {
  color: var(--egg);
}

@media only screen and (max-width: 600px) {
  .navbar .spanner {
    width: 0%;
  }
}
</style>
