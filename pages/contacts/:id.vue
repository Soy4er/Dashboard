<template>
  <main>
    <ContentHeader :title="title" />
  </main>
</template>

<script>
import { mapGetters } from "vuex";
import ContentHeader from "~/components/ContentHeader.vue";

export default {
  data() {
    return {
      title: 'Contacts'
    }
  },
  head () {
    return {
      title: this.title,
      breadcrumb: {title: this.title, link: ''}
    }
  },
  components: {
    ContentHeader
  }
};
</script>