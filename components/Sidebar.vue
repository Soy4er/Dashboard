<template>
  <aside class="sidebar" :class="{'sidebar-active' : toggle}">
    <div class="sidebar-header">
      <div class="logo logo--min">DK</div>
      <div class="logo">Dashboard</div>
    </div>
    <div class="sidebar-user">
      <div class="sidebar-user__img">
        <img :class="{'m-0' : toggle}" :src="require(`~/assets/images/${user.img}`)" :alt="user.name" srcset />
      </div>
      <div class="sidebar-user__info">
        <div class="sidebar-user__name">{{user.name}}</div>
      </div>
    </div>
    <div class="sidebar-menu">
      <Menu :toggle="toggle"/>
    </div>
    <div class="sidebar-footer">
      <button @click.prevent="sidebarToggle()">
        <i class="icon icon-sidebar" :class="{'m-0' : toggle}"></i>
        <span>Toggle sidebar</span>
      </button>
    </div>
  </aside>
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
  methods: {
    sidebarToggle() {
      this.toggle = !this.toggle;
      this.toggle ? document.body.classList.add('sidebar--min') : document.body.classList.remove('sidebar--min');
    }
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
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1037;
  background-color: $white;
  transition: width .3s ease-in-out;
  &-active {
    width: 90px;
    & .logo:not(.logo--min),
    & .sidebar-footer button span,
    & .sidebar-user__info {
      margin-left: -10px;
      opacity: 0;
      visibility: hidden;
    }
  }
  &-header {
    padding: 16px 24px;
    display: flex;
    & .logo {
      transition: margin-left .3s linear,opacity .3s ease,visibility .3s ease;
      white-space: nowrap;
    }
  }
  &-user {
    height: 90px;
    padding: 24px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid $gray-200;
    border-top: 1px solid $gray-200;
    &__info {
      transition: margin-left .3s linear,opacity .3s ease,visibility .3s ease;
      white-space: nowrap;
    }
    &__img {
      margin-right: 16px;
      & img {
        width: 35px;
        height: 35px;
        min-width: 35px;
        border-radius: 50%;
      }
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
      height: 20px;
      color: $gray-500;
      font-size: $font-size-sm;
      background-color: inherit;
      border: none;
      display: flex;
      align-items: center;
      cursor: pointer;
      & i {
        min-width: 16px;
        transition: .3s linear;
      }
      & span {
        transition: margin-left .3s linear,opacity .3s ease,visibility .3s ease;
        white-space: nowrap;
      }
    }
  }
}
</style>