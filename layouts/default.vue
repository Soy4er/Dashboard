<template>
  <div id="app">
    <Sidebar />
    <div class="right-block">
      <Header />
      <div class="content">
        <nuxt/>
      </div>
    </div>
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
#app {
  display: grid;
  grid-template-columns: auto 1fr;
}
.content {
  padding: 36px;
}
</style>