<template>
  <main>
    <ContentHeader :title="title" />
    <table>
      <thead>
        <tr>
          <th
            v-for="column in columns.filter(({ visible }) => visible)"
            :key="column.id"
          >{{column.label}}</th>
        </tr>
      </thead>
    </table>
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
    }
  },
  computed: {
    ...mapGetters({
      columns: "table/getColumns"
    })
  },
  components: {
    ContentHeader
  }
};
</script>