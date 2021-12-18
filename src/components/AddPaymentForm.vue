<template>
  <v-card class="pa-5">
    <v-text-field label="Date" outlined v-model="date"></v-text-field>
    <v-text-field label="Category" outlined v-model="category"></v-text-field>
    <v-text-field label="Value" outlined v-model.number="value"></v-text-field>
    <v-flex class="text-right">
      <v-btn class="mb-5" color="teal" dark @click="onSaveClick"
        >ADD <v-icon>mdi-plus</v-icon></v-btn
      >
    </v-flex>
  </v-card>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";

export default {
  name: "AddPaymentForm",
  data() {
    return {
      value: 0,
      category: "",
      date: "",
      id: 0,
    };
  },
  computed: {
    getCurrentDate() {
      const today = new Date();
      const d = today.getDate();
      const m = today.getMonth() + 1;
      const y = today.getFullYear();
      return `${d}.${m}.${y}`;
    },
    ...mapGetters(["getMaxId"]),
    getId() {
      if (this.getMaxId <= 6) return 7;
      else return this.getMaxId + 1;
    },
  },
  methods: {
    ...mapMutations({
      addData: "addDataToPaymentsList",
    }),
    onSaveClick() {
      const data = {
        id: this.getId,
        date: this.date || this.getCurrentDate,
        category: this.category,
        value: this.value,
      };
      this.addData(data);
    },
  },
  mounted() {
    if (this.$route.params?.category) {
      this.category = String(this.$route.params.category);
    }
    if (this.$route.query?.value) {
      this.value = Number(this.$route.query.value);
    }
    if (this.category !== "" && this.value !== 0) {
      this.onSaveClick();
    }
  },
};
</script>

<style lang="scss" >
</style>