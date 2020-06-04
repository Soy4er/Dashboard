<template>
  <div id="app">
    <Header />
    <Sidebar />
    <nuxt class="content-wrapper" />
  </div>
</template>

<script>
import Sidebar from "~/components/Sidebar.vue";
import Header from "~/components/Header.vue";

export default {
  components: {
    Sidebar,
    Header,
  }
}
</script>

<style lang="scss" scoped>
.content-wrapper {
  margin-top: 60px;
  margin-left: 260px;
  transition: margin-left .3s ease-in-out;
}
.sidebar--min .content-wrapper {
  margin-left: 90px;
}
</style>