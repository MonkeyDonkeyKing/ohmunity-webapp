<template>
  <nav class="navbar">
    <router-link class="navbar-item" to="/">
      <img class="logo" alt="logo" src="./assets/logo.png" loading="lazy" />
    </router-link>
    <div class="spanner"></div>
    <div class="navbar-menu">
      <hr />
      <div class="navbar-brand">
        <router-link class="navbar-item" to="/">Home</router-link>
      </div>
      <div class="navbar-end">
        <router-link class="navbar-item" to="/map">Campus map</router-link>
      </div>
    </div>
  </nav>
  <div class="container">
    <hr class="title-line" />
    <span class="title-container"></span>
    <h1 class="site-title">OhmUnity</h1>
    <h2>Übersicht der Events der Technischen Hochschule Ohm</h2>
  </div>
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
  --text: #000;
  --background: #e7e2e2;
  --egg: #fae5d4;
  --egg-light: #f2eae3;
  --primary: #29556d;
  --secondary: #487288;
  --ci-green: #174146;
  --ci-red: #dc5348;
  --dark: #032538;
}
body {
  margin: 0;
  background-color: var(--background);
  color: var(--text);
  font-family: Helvetica, Arial, sans-serif;
}

.container {
  position: relative;
}

.site-title {
  font-size: 3.5rem;
  color: var(--ci-green);
  margin-bottom: 1rem;
  position: relative;
  z-index: 5;
  margin-left: 0;
}
.title-container {
  background-color: var(--background);
  z-index: 1;
  position: absolute;
  display: block;
  width: 400px;
  height: 4rem;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
}
.title-line {
  top: 2rem;
  width: 1440px;
  max-width: 100%;
  left: 50%;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
  z-index: 0;
}

h2 {
  text-align: center;
}

a:link {
  color: var(--secondary);
}

a:visited {
  color: var(--primary);
}
.navbar {
  display: block;
  position: relative;
  padding: 0.5rem 1rem;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);
  background-color: var(--egg-light);
  justify-content: center;
  text-align: center;
}

.navbar > a {
  margin-right: 0;
  display: inline-block;
}

.navbar-menu {
  display: flex;
  justify-content: center;
  position: relative;
}

hr {
  position: absolute;
  border: 0;
  border-top: 2px solid var(--ci-red);
  width: 100%;
  z-index: 0;
  margin: 0;
  top: 15px;
}

.navbar img {
  height: 70px;
  margin-bottom: 0.5rem;
}

.navbar .spanner {
  width: 80%;
}

.navbar-brand {
  display: flex;
  align-items: center;
  position: relative;
  z-index: 1;
  background-color: var(--egg-light);
  padding-left: 1rem;
}

.navbar-end {
  position: relative;
  z-index: 1;
  background-color: var(--egg-light);
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
  color: var(--ci-red);
}

@media only screen and (max-width: 600px) {
  .navbar .spanner {
    width: 0%;
  }
}
</style>
