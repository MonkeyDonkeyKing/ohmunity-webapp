<template>
  <div class="container">
    <h1>RSS Feed Ohm</h1>
    <div v-if="isLoading" class="loader">
      <PulseLoader />
    </div>
    <section class="main-events">
      <RSSItem
        :link="item.link"
        :title="item.title"
        :desc="item.description"
        :kind="item.kind"
        :referent="item.referent"
        :pubDate="item.pubDate"
        :key="item.guid"
        v-for="item in items"
      ></RSSItem>
    </section>
  </div>
  <h1>RSS Feed Allgemein</h1>
  <div class="main-events">
    <RSSParser />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import RSSItem from '../components/RSSItem.vue';
import RSSParser from '../components/RSSParser.vue';
import { parseStringPromise } from 'xml2js';
import { RSSFeedItem } from '../models/RSSFeedItem';
import PulseLoader from 'vue-spinner/src/PulseLoader.vue';

export default defineComponent({
  name: 'app-home',
  data: function () {
    return {
      isLoading: true,
      items: [] as RSSFeedItem[],
    };
  },
  components: {
    RSSItem,
    PulseLoader,
    RSSParser,
  },
  async mounted() {
    const res = await fetch(
      'https://api.allorigins.win/get?url=https://www.th-nuernberg.de/veranstaltungen/calendarRSS.xml/'
    );
    const contents = await res.json();
    const feed = new window.DOMParser().parseFromString(
      contents.contents,
      'text/xml'
    );
    const items = feed.querySelectorAll('item');

    const parsedContent = this.parseXML(contents.contents);
    const itemDetails: RSSFeedItem[] = [];

    await parsedContent.then((res) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      res.rss.channel[0].item.forEach((item: any) => {
        const regexTags = /<[^>]+>/g;
        const output = item.description[0].replace(regexTags, '');

        const regexParts =
          /Beschreibung:\s*(.*)\s*Referent\*in:\s*(.*)\s*Art:\s*(.*)/s;
        const matches = output.match(regexParts);
        const description = matches[1].trim();
        const referent = matches[2].trim();
        let art = matches[3].trim();
        art = art.replace(/&nbsp;/g, '');

        itemDetails.push({
          description: description,
          kind: art,
          referent: referent,
        });
      });
    });

    this.items = [...items].map((el, index) => {
      return {
        link: 'https://www.th-nuernberg.de/veranstaltungen/',
        title: el?.querySelector('title')?.innerHTML,
        description: itemDetails[index].description,
        kind: itemDetails[index].kind,
        referent: itemDetails[index].referent,
        guid: el?.querySelector('guid')?.innerHTML,
        pubDate: el?.querySelector('pubDate')?.innerHTML,
      };
    });
    this.isLoading = false;
  },
  methods: {
    async parseXML(content: string) {
      const xmlString = content;

      try {
        const result = await parseStringPromise(xmlString);
        return result;
      } catch (error) {
        console.error(error);
      }
    },
  },
});
</script>

<style>
.container {
  width: 100%;
  margin-top: 2rem;
  color: var(--text);
}

.loader {
  width: 100%;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  scale: 1.5;
}

.main-events {
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(375px, 32%));
  grid-auto-rows: 450px;
  justify-content: center;
}
h1 {
  margin-left: 1rem;
  color: var(--ci-red);
  text-align: center;
  font-size: 2.5rem;
}

@media only screen and (max-width: 600px) {
  .main-events {
    grid-template-columns: repeat(auto-fill, minmax(375px, 100%));
  }
  .spanner {
    width: auto;
  }
}
</style>
