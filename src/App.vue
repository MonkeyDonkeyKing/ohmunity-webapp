<template>
  <img alt="logo" src="./assets/logo.png" />
  <RSSItem
    :link="item.link"
    :title="item.title"
    :desc="item.description"
    :pubDate="item.pubDate"
    :key="item.guid"
    v-for="item in items"
  ></RSSItem>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import RSSItem from "./components/RSSItem.vue";
import { RSSFeedItem } from "./models/RSSFeedItem";

export default defineComponent({
  name: "ohmunity-webapp",
  data: function () {
    return {
      items: [
        {
          title: "Große VA 1",
          description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque, fuga?",
          guid: "1",
          link: "https://www.google.com",
          pubDate: "Heute",
        },
        {
          title: "Große VA 2",
          description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque, fuga?",
          guid: "2",
          link: "https://www.google.com",
          pubDate: "Heute",
        },
      ] as RSSFeedItem[],
    };
  },
  components: {
    RSSItem,
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
