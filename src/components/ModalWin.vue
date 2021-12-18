<template>
  <v-dialog v-model="dialogEdit" max-width="500px">
    <v-card class="pa-5">
      <v-text-field label="Date" outlined v-model="date"></v-text-field>
      <v-text-field label="Category" outlined v-model="category"></v-text-field>
      <v-text-field
        label="Value"
        outlined
        v-model.number="value"
      ></v-text-field>
      <v-flex class="text-right">
        <v-btn class="mb-5" color="teal" dark @click="onSaveClick"
          >ADD <v-icon>mdi-plus</v-icon></v-btn
        >
      </v-flex>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "ModalWin",
  data() {
    return {
      dialogEdit: false,
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
      this.dialogEdit = true;
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
      this.dialogEdit = false;
    },
  },
  mounted() {
    this.$menu.EventBus.$on("show", this.onShow);
  },
};
</script>

<style lang="scss">
</style>