<template>
  <div class="wrp">
    <div @click="onClick(cur - 1)">&#60;</div>
    <div
      v-for="page in amountPages"
      :key="page"
      @click="onClick(page)"
      :class="{ active: page === cur }"
    >
      {{ page }}
    </div>
    <div @click="onClick(cur + 1)">&#62;</div>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: {
    length: Number,
    n: Number,
    cur: Number,
  },
  computed: {
    amountPages() {
      return Math.ceil(this.length / this.n);
    },
  },
  methods: {
    onClick(p) {
      if (p < 1 || p > this.amountPages) {
        return;
      }
      this.$emit("paginate", p);
    },
  },
};
</script>

<style lang="scss">
.wrp {
  display: flex;
  & div {
    padding: 10px;
    &.active {
      background-color: rgb(27, 141, 103);
      color: rgb(255, 255, 255);
    }
  }
}
</style>