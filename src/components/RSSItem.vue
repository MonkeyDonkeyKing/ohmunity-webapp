<template>
  <div class="item-container">
    <div class="card">
      <p class="title">{{ title }}</p>
      <p class="date">{{ pubDate }}</p>
      <p class="event-desc">{{ desc }}</p>
      <p class="referent">{{ referent }}</p>
      <div class="cta-box">
        <a class="btn-more" @click="isOpen = true">Read more</a>
      </div>
    </div>
  </div>
  <div v-if="isOpen" class="overlay" @click="isOpen = false">
    <div class="modal" @click.stop>
      <div class="modal-header">
        <h3>{{ title }}</h3>
      </div>
      <div class="modal-body">
        <p>{{ desc }}</p>
        <strong>{{ kind }}</strong>
        <p>{{ referent }}</p>
        <a :href="link" target="_blank">{{ link }}</a>
        <button class="close-button" @click="isOpen = false">Close</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'RSSItem',
  data() {
    return {
      isOpen: false,
    };
  },
  props: {
    id: String,
    title: String,
    kind: String,
    desc: String,
    referent: String,
    pubDate: String,
    link: String,
    image: String,
  },
};
</script>

<style>
.item-container {
  background-color: var(--egg-light);
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
  max-height: 360px;
}

.title {
  height: 85px;
  font-size: 2.2rem;
  margin: 0;
  font-weight: bold;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.event-desc {
  max-height: 80px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.referent {
  max-height: 80px;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.cta-box {
  display: flex;
  align-self: end;
  margin-top: auto;
}
a.btn-more {
  padding: 4px 7px;
  background-color: var(--egg);
  color: var(--dark);
  border: 1px solid var(--dark);
  cursor: pointer;
  font-weight: bold;
  text-decoration: none;
}
a.btn-more:hover {
  background-color: var(--primary);
  color: #fff;
  border: 1px solid var(--secondary);
}
.overlay {
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  position: relative;
  z-index: 1000;
  background-color: #fff;
  max-width: 800px;
  padding: 2.125rem;
  border-radius: 0.25rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
}
.modal h3 {
  font-size: 1.7rem;
  margin-top: 0.5rem;
  margin-bottom: 1rem;
}
.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.modal-body {
  margin-bottom: 1rem;
  line-height: 1.4;
}

.modal-body p {
  margin-bottom: 0.5rem;
}

.close-button {
  background-color: var(--primary);
  border: none;
  cursor: pointer;
  color: #fff;
  font-size: 1rem;
  width: 25%;
  height: 2.5rem;
  margin-top: 1rem;
  min-width: 6rem;
  display: block;
  float: right;
}
</style>
