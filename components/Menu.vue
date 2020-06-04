<template>
  <nav class="nav">
    <div class="nav-item" :class="{'center-block' : toggle}" v-for="item in menu.filter(({ visible }) => visible)" :key="item.id">
      <nuxt-link :to="item.link" :no-prefetch="item.link == '/'" :exact="item.link == '/'">
        <i class="icon" :class="[{'m-0' : toggle}, `icon-${item.icon}`]"></i>
        <span v-if="!toggle">{{item.name}}</span>
      </nuxt-link>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: ['toggle'],
  computed: {
    ...mapGetters({
      menu: "menu/getMenu"
    })
  }
};
</script>

<style lang="scss" scoped>
.nav {
  &-item {
    width: 100%;
    padding: 10px 0;
    & a {
      color: $gray-600;
      font-size: $font-size-md;
      display: flex;
      align-items: center;
      width: min-content;
      height: 21px;
      &.active-link {
        color: $primary;
      }
    }
  }
}
</style>