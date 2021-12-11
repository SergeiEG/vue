<template>
  <div class="payment-content">
    <input name="date" placeholder="Date" v-model="date" />
    <input name="category" placeholder="Category" v-model="category" />
    <input
      name="value"
      placeholder="Value"
      type="number"
      v-model.number="value"
    />
    <button @click="onSaveClick">ADD +</button>
  </div>
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
.payment-content {
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  max-width: 250px;
  & input {
    padding: 5px 10px;
    max-width: 250px;
    margin-bottom: 10px;
    border: 2px solid gray;
    border-radius: 4px;
    opacity: 0.5;
  }
  & button {
    padding: 10px 15px;
    background-color: rgb(27, 141, 103);
    color: rgb(255, 255, 255);
    border: 1px solid rgb(27, 141, 103);
    border-radius: 5px;
    max-width: 125px;
    align-self: flex-end;
    &:hover {
      background-color: rgb(255, 255, 255);
      color: rgb(27, 141, 103);
      border: 1px solid rgb(27, 141, 103);
    }
  }
}
</style>