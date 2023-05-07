<template>
  <div>
    <h2>CAMPUS MAP</h2>
    <section class="map-container">
      <img src="./../assets/CampusMap.png" usemap="#image-map" />
      <map name="image-map">
        <area
          target=""
          alt="K"
          title="K"
          href=""
          coords="1436,1398,281"
          shape="circle"
        />
        <area
          target=""
          alt="B"
          title="B"
          href=""
          coords="1702,2147,189"
          shape="circle"
        />
        <area
          target=""
          alt="W"
          title="W"
          href=""
          coords="1892,1269,186"
          shape="circle"
        />
        <area
          target=""
          alt="SP"
          title="SP"
          href=""
          coords="677,926,132"
          shape="circle"
        />
        <area
          target=""
          alt="H"
          title="H"
          href=""
          coords="2574,132,133"
          shape="circle"
        />
        <area
          target=""
          alt="SG"
          title="SG"
          href=""
          coords="430,708,134"
          shape="circle"
        />
      </map>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'app-map',
  data: function () {
    return {};
  },
});
</script>

<style scoped>
map area {
  cursor: pointer;
}
</style>
