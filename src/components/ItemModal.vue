<template>
  <div class="overlay" @click.self="$emit('close')">
    <div class="modal">
      <div class="modal-header">
        <h3>{{ title }}</h3>
      </div>
      <div class="modal-body">
        <p>{{ desc }}</p>
        <p>{{ kind }}</p>
        <p>{{ referent }}</p>
        <p>{{ link }}</p>
      </div>
      <div class="modal-footer">
        <button class="close-button" @click="$emit('close')">Close</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    title: String,
    kind: String,
    desc: String,
    referent: String,
    pubDate: String,
    link: String,
  },
});
</script>
