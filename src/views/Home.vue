<template>
  <div class="container">
    <h1>RSS Feed von Ohm</h1>
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
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import RSSItem from '../components/RSSItem.vue';
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

    // Content ist abgeholt aber noch nicht geparst
    const parsedContent = this.parseXML(contents.contents);
    let itemDetails: RSSFeedItem[] = [];

    await parsedContent.then((res) => {
      res.rss.channel[0].item.forEach((item: any) => {
        // Bereinigung der HTML Tags
        const regexTags = /<[^>]+>/g;
        const output = item.description[0].replace(regexTags, '');

        // Bereinigung des Textes
        const regexParts =
          /Beschreibung:\s*(.*)\s*Referent\*in:\s*(.*)\s*Art:\s*(.*)/s;
        let matches = output.match(regexParts);
        let description = matches[1].trim();
        let referent = matches[2].trim();
        let art = matches[3].trim();
        art = art.replace(/&nbsp;/g, '');

        itemDetails.push({
          description: description,
          kind: art,
          referent: referent,
        });
      });
    });

    let baseLink = 'https://www.th-nuernberg.de/veranstaltungen/';
    let test: string | undefined;
    this.items = [...items].map((el, index) => {
      let guid = el?.querySelector('link')?.innerHTML;
      if (baseLink != undefined && guid != undefined) {
        test = baseLink + guid[index];
      }
      return {
        link: test,
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
}

.loader {
  width: 100%;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  scale: 1.5;
}

.container h1 {
  margin-left: 2rem;
}

.main-events {
  display: flex;
  justify-content: space-between;
}

@media only screen and (max-width: 600px) {
  .main-events {
    flex-direction: column;
  }
}
</style>
