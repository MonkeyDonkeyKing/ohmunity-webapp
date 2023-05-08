<template>
  <h1>Campus map</h1>
  <div class="map-list-wrapper">
    <section class="map-container">
      <img
        ref="mapImage"
        src="./../assets/CampusMap.png"
        usemap="#image-map"
        id="campus-map"
      />
      <map name="image-map">
        <area
          alt="K"
          title="K"
          coords="1436,1398,281"
          shape="circle"
          @click="toggleList"
        />
        <area
          alt="B"
          title="B"
          coords="1702,2147,189"
          shape="circle"
          @click="toggleList"
        />
        <area
          alt="W"
          title="W"
          coords="1892,1269,186"
          shape="circle"
          @click="toggleList"
        />
        <area
          alt="SP"
          title="SP"
          coords="677,926,132"
          shape="circle"
          @click="toggleList"
        />
        <area
          alt="H"
          title="H"
          coords="2574,132,133"
          shape="circle"
          @click="toggleList"
        />
        <area
          alt="SG"
          title="SG"
          coords="430,708,134"
          shape="circle"
          @click="toggleList"
        />
      </map>
    </section>
    <div v-if="listOpen" class="list">
      <div class="item-container" v-for="event in events" :key="event.id">
        <div class="card">
          <p class="title">{{ event.name }}</p>
          <p class="date">{{ event.pubDate }}</p>
          <p class="event-desc">{{ event.desc }}</p>
          <p class="referent">{{ event.referent }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'app-map',
  data() {
    return {
      listOpen: false,
      events: [
        {
          id: 1,
          name: 'Test event 1',
          desc: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem',
          pubDate: '08.05.2023',
          referent: 'Prof. Dr. Sommer',
        },
        {
          id: 2,
          name: 'Test event 1',
          desc: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem',
          pubDate: '08.05.2023',
          referent: 'Prof. Dr. Sommer',
        },
        {
          id: 3,
          name: 'Test event 1',
          desc: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem',
          pubDate: '08.05.2023',
          referent: 'Prof. Dr. Sommer',
        },
        {
          id: 4,
          name: 'Test event 1',
          desc: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem',
          pubDate: '08.05.2023',
          referent: 'Prof. Dr. Sommer',
        },
      ],
    };
  },
  methods: {
    toggleList() {
      this.listOpen = !this.listOpen;
    },
  },
});
</script>

<style scoped>
.map-container {
  height: 100vh;
  width: 50%;
}

.map-list-wrapper {
  display: flex;
}

.list {
  width: 50%;
}

#campus-map {
  scale: 0.4;
  position: absolute;
  transform: translate(-73%, -73%);
  filter: grayscale();
}

map area {
  cursor: pointer;
}
/* not working */
map area:hover {
  transform: scale(1.2);
  transition: transform 0.3s ease;
}

@media only screen and (max-width: 600px) {
  #campus-map {
    transform: translate(-290%, -280%);
    scale: 0.15;
  }
  .map-container {
    height: 42vh;
  }
  .map-list-wrapper {
    flex-direction: column;
  }
  .list {
    width: auto;
  }
}
</style>
