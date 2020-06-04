<template>
  <div class="sidebar" :class="{'sidebar-active' : toggle}">
    <div class="sidebar-header">
      <div class="logo" v-if="!toggle">Dashboard Kit</div>
      <div class="logo logo--min center-block" v-else>DK</div>
    </div>
    <div class="sidebar-user" :class="{'center-block' : toggle}">
      <div class="sidebar-user__img">
        <img :class="{'m-0' : toggle}" :src="require(`~/assets/images/${user.img}`)" :alt="user.name" srcset />
      </div>
      <div class="sidebar-user__info" v-if="!toggle">
        <div class="sidebar-user__name">{{user.name}}</div>
        <div class="sidebar-user__email">
          <a :href="`mailto:${user.email}`">{{user.email}}</a>
        </div>
      </div>
    </div>
    <div class="sidebar-menu">
      <Menu :toggle="toggle"/>
    </div>
    <div class="sidebar-footer" :class="{'center-block' : toggle}">
      <button @click.prevent="toggle = !toggle">
        <i class="icon icon-sidebar" :class="{'m-0' : toggle}"></i>
        <span v-if="!toggle">Toggle sidebar</span>
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Menu from "~/components/Menu.vue";

export default {
  data() {
    return {
      toggle: false
    };
  },
  components: {
    Menu
  },
  computed: {
    ...mapGetters({
      user: "user/getAuthUser"
    })
  }
};
</script>

<style lang="scss" scoped>
.sidebar {
  width: 260px;
  height: 100vh;
  box-shadow: 6px 0px 18px rgba(0, 0, 0, 0.06);
  position: relative;
  background-color: $white;
  &-active {
    width: 100px;
  }
  &-header {
    padding: 16px 24px;
    border-bottom: 1px solid $gray-200;
  }
  &-user {
    padding: 24px;
    display: flex;
    &__img img {
      width: 46px;
      height: 46px;
      border-radius: 50%;
      margin-right: 16px;
    }
    &__email a {
      color: $gray-500;
      font-size: $font-size-sm;
    }
  }
  &-menu {
    padding: 20px 24px;
  }
  &-footer {
    position: absolute;
    bottom: 0px;
    width: 100%;
    padding: 24px;
    & button {
      color: $gray-500;
      font-size: $font-size-sm;
      background-color: inherit;
      border: none;
      display: flex;
      align-items: center;
      cursor: pointer;
    }
  }
}
</style>