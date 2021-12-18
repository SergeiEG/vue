<template>
  <v-data-table
    :headers="headers"
    :items="items"
    :sort-by="['id']"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar flat>
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="text-h5"
              >Are you sure you want to delete this item?</v-card-title
            >
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDelete"
                >Cancel</v-btn
              >
              <v-btn color="blue darken-1" text @click="onRemoveEl()">OK</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:[`item.actions`]="{ item }">
      <v-icon small class="mr-2" @click="onEditForm(item)"> mdi-pencil </v-icon>
      <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon>
    </template>
  </v-data-table>
</template>

<script>
import { mapMutations } from "vuex";

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
      dialogDelete: false,
      dialogEdit: false,
      editedItem: {},
      headers: [
        { text: "#", value: "id" },
        { text: "Date", value: "date" },
        { text: "Category", value: "category" },
        { text: "Value", value: "value" },
        { text: "Actions", value: "actions", sortable: false },
      ],
    };
  },
  methods: {
    ...mapMutations({
      removeData: "removeDataToPaymentsList",
    }),
    onRemoveEl() {
      this.removeData(this.editedItem);
      this.editedItem = {};
      this.closeDelete();
    },
    onEditForm(item) {
      this.$menu.show(item);
    },
    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick();
    },
    deleteItem(item) {
      this.editedItem = item;
      this.dialogDelete = true;
    },
  },
};
</script>

<style lang="scss">
</style>