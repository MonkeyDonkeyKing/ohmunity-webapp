<template>
  <div>
    <h1>{{ text }}</h1>
  </div>
</template>
<script>
export default {
  name: 'demo-banner',
  data: function () {
    return {
      text: 'This is a demo application',
    };
  },
};
</script>
<style scoped>
div {
  position: sticky;
  bottom: 0;
  transform: translateY(-2rem);
  background-color: black;
  overflow: hidden;
}
div h1 {
  color: white;
  text-align: center;
  animation: marquee 9s linear infinite;
  white-space: nowrap;
}

@keyframes marquee {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
}
</style>
