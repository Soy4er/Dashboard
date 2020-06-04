<template>
    <div>
        <h1>Contacts</h1>
        <table>
            <thead>
                <tr>
                    <th v-for="column in columns.filter(({ visible }) => visible)" :key="column.id">
                        {{column.label}}
                    </th>
                </tr>
            </thead>
        </table>
    </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({
      columns: "table/getColumns"
    })
  }
}
</script>