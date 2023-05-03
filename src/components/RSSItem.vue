<template>
  <div class="item-container">
    <div class="card">
      <p class="title">{{ title }}</p>
      <p class="date">{{ pubDate }}</p>
      <!--      <p>{{ id }}</p>-->
      <p class="event-desc">{{ desc }}</p>
      <p class="event-type">{{ kind }}</p>
      <p class="referent">{{ referent }}</p>
      <div class="cta-box">
        <a :href="link" class="btn-more">Read more</a>
      </div>
    </div>
  </div>
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
.item-container {
  width: 32%;
  max-height: 400px;
  height: 400px;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  margin: 15px;
  overflow: hidden;
  transition-duration: 0.3s;
}
.item-container:hover {
  scale: 1.0045;
  box-shadow: 0 8px 10px rgba(0, 0, 0, 0.6);
  transition-duration: 0.175s;
}
.card {
  display: flex;
  flex-direction: column;
  padding: 20px;
  height: 100%;
}

.title {
  font-size: 1.2rem;
  margin: 0;
}

.event-desc {
  max-height: 80px;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.cta-box {
  display: flex;
  align-self: end;
}
a.btn-more {
  padding: 4px 7px;
  background-color: #fff;
  color: #0077cc;
  border: 1px solid #0077cc;
  cursor: pointer;
  font-weight: bold;
  text-decoration: none;
}
a.btn-more:hover {
  background-color: #0077cc;
  color: #fff;
  border: 1px solid #0077cc;
}
</style>
