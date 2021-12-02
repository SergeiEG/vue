<template>
  <div @click="showDropdown = !showDropdown">
    &#8286;
    <transition name="fade">
      <div class="Dropdown" v-if="showDropdown">
        <p @click="onEditForm">Редактировать</p>
        <p @click="onRemoveEl">Удалить</p>
      </div>
    </transition>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "Dropdown",
  props: {
    item: {},
  },
  data() {
    return {
      showDropdown: false,
      data: this.item,
    };
  },
  methods: {
    ...mapMutations({
      removeData: "removeDataToPaymentsList",
    }),
    onRemoveEl() {
      this.removeData(this.data);
    },
    onEditForm() {
      this.$menu.show(this.data);
    },
  },
  mounted() {},
};
</script>

<style lang="scss" >
.Dropdown {
  position: absolute;
  background-color: rgb(255, 255, 255);
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.62);
  border-radius: 5px;
  box-sizing: border-box;
  left: -100px;
  &:before {
    content: "";
    width: 0;
    height: 0;
    position: absolute;
    top: -10px;
    left: 110px;
    border-radius: 10px;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid rgb(155, 154, 153);
  }
  & p {
    padding: 2px 10px;
    &:hover {
      background-color: rgb(180, 178, 178);
    }
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>