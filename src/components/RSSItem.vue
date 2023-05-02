<template>
  <section>
    <div>
      <h2>{{ title }}</h2>
      <p>{{ pubDate }}</p>
      <p>{{ id }}</p>
      <p>{{ desc }}</p>
      <p>{{ kind }}</p>
      <p>{{ referent }}</p>
      <a :href="link">Read more</a>
    </div>
  </section>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

defineProps({
  id: String,
  title: String,
  desc: String,
  kind: String,
  referent: String,
  pubDate: String,
  link: String,
  image: String,
});
</script>

<style scoped>
section {
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  overflow: hidden;
}

div {
  padding: 20px;
}

h2 {
  font-size: 1.2rem;
  margin: 0;
}

p {
  font-size: 0.9rem;
  color: #444;
  margin: 10px 0;
}

a {
  color: #0077cc;
  font-weight: bold;
  text-decoration: none;
}
</style>
