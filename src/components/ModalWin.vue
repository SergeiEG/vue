<template>
  <div class="modal" v-if="showWin">
    <input placeholder="id" v-model="id" />
    <input placeholder="Category" v-model="category" />
    <input placeholder="Value" type="number" v-model.number="value" />
    <button @click="onSaveClick">Save</button>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "ModalWin",
  data() {
    return {
      showWin: false,
      id: 0,
      date: 0,
      category: "",
      value: 0,
      data: {},
    };
  },
  methods: {
    ...mapMutations({
      editData: "editDataToPaymentsList",
    }),
    onShow(data) {
      this.showWin = true;
      this.id = data.item.id;
      this.date = data.item.date;
      this.category = data.item.category;
      this.value = data.item.value;
      this.data = data.item;
    },
    onSaveClick() {
      const newData = {
        id: this.id,
        date: this.date,
        category: this.category,
        value: this.value,
      };
      const editData = [this.data, newData];
      this.editData(editData);
      this.showWin = false;
    },
  },
  mounted() {
    this.$menu.EventBus.$on("show", this.onShow);
  },
};
</script>

<style lang="scss">
.modal {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>