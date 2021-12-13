<template>
  <v-data-table
    :headers="headers"
    :items="items"
    :sort-by="['id']"
    :sort-desc="[false, true]"
    multi-sort
    class="elevation-1"
  ></v-data-table>
</template>

<script>
export default {
  name: "PaymentsDisplay",

  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      showMenu: false,
      headers: [
        { text: "#", value: "id" },
        { text: "Date", value: "date" },
        { text: "Category", value: "category" },
        { text: "Value", value: "value" },
      ],
    };
  },
  methods: {},
};
</script>

<style lang="scss">
</style>