<template>
  <div class="container">
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

export default defineComponent({
  name: 'app-home',
  data: function () {
    return {
      items: [
        {
          title: 'Große VA 1',
          description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque, fuga?',
          kind: 'Vorlesung',
          referent: 'Prof. Dr. Max Mustermann',
          guid: '1',
          link: 'https://www.google.com',
          pubDate: 'Heute',
        },
      ] as RSSFeedItem[],
    };
  },
  components: {
    RSSItem,
  },
  async mounted() {
    const res = await fetch(
      'https://api.allorigins.win/get?url=https://www.th-nuernberg.de/veranstaltungen/calendarRSS.xml/?tx_calendarize_calendar%5Bhmac%5D=c0569a82c2f7bf5c6b9baecdbe33b9daedad34bc&cHash=ab3a728eae761411bc509110ae70b0fe'
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
        itemDetails.push({
          description: description,
          kind: art,
          referent: referent,
        });
      });
    });

    this.items = [...items].map((el, index) => {
      return {
        link: el?.querySelector('link')?.innerHTML,
        title: el?.querySelector('title')?.innerHTML,
        description: itemDetails[index].description,
        kind: itemDetails[index].kind,
        referent: itemDetails[index].referent,
        guid: el?.querySelector('guid')?.innerHTML,
        pubDate: el?.querySelector('pubDate')?.innerHTML,
      };
    });
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

<style scoped>
.container {
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
}
.main-events {
  display: flex;
  justify-content: space-between;
}
</style>
