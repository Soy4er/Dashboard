<template>
  <nav class="nav">
    <div class="nav-item" :class="{'nav-item--toggle' : toggle}" v-for="item in menu.filter(({ visible }) => visible)" :key="item.id">
      <nuxt-link :to="item.link" :no-prefetch="item.link == '/'" :exact="item.link == '/'">
        <i class="icon" :class="[{'m-0' : toggle}, `icon-${item.icon}`]"></i>
        <span>{{item.name}}</span>
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
    padding: 10px;
    &--toggle a span {
      margin-left: -10px;
      opacity: 0;
      visibility: hidden;
    }
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
      & i {
        transition: .3s linear;
      }
      & span {
        transition: margin-left .3s linear,opacity .3s ease,visibility .3s ease;
      }
    }
  }
}
</style>