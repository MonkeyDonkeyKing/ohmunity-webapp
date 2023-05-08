<template>
  <div v-for="item in feed" v-bind:key="item.guid" class="item-container">
    <section class="card">
      <h2 class="title">{{ item.title }}</h2>
      <p class="desc">{{ item.description }}</p>
      <a :href="item.link" target="_blank">{{ item.link }}</a>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { RSSFeedItem } from '@/models/RSSFeedItem';

export default defineComponent({
  data() {
    return {
      feed: [] as RSSFeedItem[],
    };
  },
  async mounted() {
    const parser = new DOMParser();
    const xml = await this.fetchXML('https://feeds.simplecast.com/54nAGcIl');

    const doc = parser.parseFromString(xml, 'text/xml');
    const items = doc.getElementsByTagName('item');

    for (let i = 0; i < 5 && i < items.length; i++) {
      const item = items[i];
      const title = item.getElementsByTagName('title')[0].textContent;
      const link = item.getElementsByTagName('link')[0].textContent;
      const descriptionHTML =
        item.getElementsByTagName('description')[0].textContent;
      let docDesc;
      let description;
      if (descriptionHTML != null) {
        docDesc = parser.parseFromString(descriptionHTML, 'text/html');
        description = docDesc.body.textContent;
      }
      const guid = item.getElementsByTagName('guid')[0].textContent;

      if (item && title && link && description && guid) {
        this.feed.push({ title, link, description, guid });
      }
    }
  },
  methods: {
    async fetchXML(url: string): Promise<string> {
      const res = await fetch(url);
      const data = await res.text();
      return data;
    },
  },
});
</script>

<style scoped>
.desc {
  display: -webkit-box;
  -webkit-line-clamp: 9;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
