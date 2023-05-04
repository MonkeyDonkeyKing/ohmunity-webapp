<template>
  <div v-for="item in feed" v-bind:key="item.guid">
    <h2>{{ item.title }}</h2>
    <ul>
      <li>
        <a>{{ item.link }}</a>
        <p>{{ item.description }}</p>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { RSSFeedItem } from '@/models/RSSFeedItem';

export default defineComponent({
  data() {
    return {
      feed: [
        {
          guid: '1',
          link: 'Testlink',
          title: 'Testtitle',
        },
      ] as RSSFeedItem[],
    };
  },
  async created() {
    const res = await fetch(
      'https://api.allorigins.win/get?url=https://feeds.simplecast.com/54nAGcIl'
    );
    const contents = await res.json();
    console.log(contents);
  },
});
</script>
