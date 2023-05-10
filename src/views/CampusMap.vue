<template>
  <h1>Campus map</h1>
  <p>
    Die markierten runden Bereiche auf der Karte sind klickbar und zeigen Euch,
    welche Events dort stattfinden.
  </p>
  <div class="map-list-wrapper">
    <section class="map-container">
      <img
        ref="mapImage"
        src="./../assets/CampusMap.png"
        usemap="#image-map"
        id="campus-map"
      />
      <map name="image-map" id="image-map">
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
      <span class="btn-hide-list" title="Schließen" @click="hideList">X</span>
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
      resizeTimeout: null as ReturnType<typeof setTimeout> | null,
    };
  },
  methods: {
    adjustCoordinates() {
      if (this.resizeTimeout) {
        clearTimeout(this.resizeTimeout);
      }

      this.resizeTimeout = setTimeout(() => {
        const image = this.$refs.mapImage as HTMLImageElement;
        const map = document.getElementById('image-map') as HTMLMapElement;

        const scaleFactorWidth = image.offsetWidth / image.naturalWidth;
        const scaleFactorHeight = image.offsetHeight / image.naturalHeight;

        const areas = map.getElementsByTagName('area');
        for (let i = 0; i < areas.length; i++) {
          const area = areas[i];
          const coords = area.getAttribute('coords')?.split(',') || [];

          for (let j = 0; j < coords.length; j++) {
            if (j % 2 === 0) {
              coords[j] = String(
                Math.round(parseFloat(coords[j]) * scaleFactorWidth)
              );
            } else {
              coords[j] = String(
                Math.round(parseFloat(coords[j]) * scaleFactorHeight)
              );
            }
          }

          area.setAttribute('coords', coords.join(','));
        }
      }, 200);
    },
    calculateScaleFactor() {
      const image = this.$refs.mapImage as HTMLImageElement;
      const originalWidth = image.naturalWidth;
      const scaledWidth = image.clientWidth;
      const scaleFactor = scaledWidth / originalWidth;
      console.log(scaleFactor);
      return scaleFactor;
    },
    scaleCoordinates(scaleFactor: number) {
      const image = this.$refs.mapImage as HTMLImageElement;
      const areas = image.nextElementSibling?.getElementsByTagName(
        'area'
      ) as HTMLCollectionOf<HTMLAreaElement>;

      for (let i = 0; i < areas.length; i++) {
        const originalCoords = areas[i]
          .getAttribute('coords')!
          .split(',') as string[];
        const scaledCoords = originalCoords.map((coord) =>
          Math.round(parseInt(coord, 10) * scaleFactor)
        );
        areas[i].setAttribute('coords', scaledCoords.join(','));
      }
    },
    toggleList() {
      this.listOpen = !this.listOpen;
      console.log('CLICK');
    },
    hideList() {
      this.listOpen = false;
    },
  },
  mounted() {
    this.adjustCoordinates();
    window.addEventListener('resize', this.adjustCoordinates);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.adjustCoordinates);
  },
});
</script>

<style scoped>
p {
  text-align: center;
}
/*.map-container {*/
/*  width: 65%;*/
/*}*/

.map-list-wrapper {
  display: flex;
}

.list {
  width: 30%;
  z-index: 500;
  height: 45rem;
  overflow-y: scroll;
  padding-top: 2rem;
  position: absolute;
  right: 0;
}
.btn-hide-list {
  position: absolute;
  right: 1.5rem;
  top: 0;
  font-size: 2rem;
  cursor: pointer;
}

map area {
  cursor: pointer;
}

map area:hover {
  cursor: zoom-in;
}

@media only screen and (max-width: 767px) {
  .list {
    margin-top: 2rem;
    position: absolute;
    right: 1rem;
    width: 80%;
    background: var(--background);
  }
}

@media only screen and (max-width: 520px) {
  .list {
    margin-top: 0;
    position: absolute;
    right: 0;
    width: 100%;
    background: var(--background);
  }
}

.map-container {
  overflow-x: auto;
}

.map-container img {
  display: block;
  max-width: 70%;
  height: auto;
}
</style>
