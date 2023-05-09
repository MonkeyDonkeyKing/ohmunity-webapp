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
      <span class="btn-hide-list" @click="hideList">X</span>
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
    hideList() {
      this.listOpen = false;
    },
  },
});
</script>

<style scoped>
.map-container {
  width: 65%;
}

.map-list-wrapper {
  display: flex;
  overflow: hidden;
}

.list {
  width: 30%;
  z-index: 500;
  height: 45rem;
  overflow-y: scroll;
  padding-top: 2rem;
  position: relative;
}
.btn-hide-list {
  position: absolute;
  right: 1.5rem;
  top: 0;
  font-size: 2rem;
}

#campus-map {
  scale: 0.35;
  transform: translate(-90%, -90%);
  filter: grayscale();
}

map area {
  cursor: pointer;
}

@media only screen and (max-width: 1440px) {
  #campus-map {
    transform: translate(-195%, -190%);
    scale: 0.2;
  }
  .map-container {
    width: 55%;
  }
  .list {
    margin-top: 2rem;
    width: 45%;
  }
}
@media only screen and (max-width: 767px) {
  #campus-map {
    transform: translate(-195%, -190%);
    scale: 0.2;
  }
  .list {
    margin-top: 2rem;
    position: absolute;
    right: 1rem;
    width: 80%;
    background: var(--background);
  }
}

@media only screen and (max-width: 520px) {
  #campus-map {
    transform: translate(-285%, -281%);
    scale: 0.15;
  }
  .list {
    margin-top: 0;
    position: absolute;
    right: 0;
    width: 100%;
    background: var(--background);
  }
}

@media only screen and (max-width: 400px) {
  #campus-map {
    transform: translate(-364%, -364%);
    scale: 0.12;
  }
}
/*@media only screen and (max-width: 600px) {*/

/*  .map-container {*/
/*    height: 42vh;*/
/*  }*/
/*  .map-list-wrapper {*/
/*    flex-direction: column;*/
/*  }*/
/*  .list {*/
/*    width: auto;*/
/*    margin-top: 2rem;*/
/*  }*/
/*}*/
</style>
