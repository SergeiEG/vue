<template>
  <div class="payments-display-wrapper">
    <table class="payments-table">
      <thead>
        <tr>
          <th>#</th>
          <th>Date</th>
          <th>Category</th>
          <th>Value</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, idx) in items" :key="idx">
          <td>{{ item.id }}</td>
          <td>{{ item.date }}</td>
          <td>{{ item.category }}</td>
          <td>{{ item.value }}</td>
          <td class="menu__btn">
            <dropdown-menu :key="item" :item="item" />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
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
    };
  },
  methods: {},
};
</script>

<style lang="scss">
.payments-display-wrapper {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.payments-table {
  width: 500px;
  border-collapse: collapse;
  & th {
    font-weight: bold;
    padding: 10px;
    border-bottom: 1px solid rgb(209, 206, 206);
  }
  & td {
    padding: 10px;
    border-bottom: 1px solid rgb(209, 206, 206);
  }
}
.menu__btn {
  cursor: pointer;
  position: relative;
}
</style>