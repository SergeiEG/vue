<template>
  <div id="app">
    <div class="wrapper">
      <header>
        <h1>My personal costs</h1>
      </header>
      <main>
        <button class="form-btn" @click="showForm = !showForm">
          ADD NEW COST +
        </button>
        <AddPaymentForm v-show="showForm" @addNewPayment="onDataPaymentAdd" />
        <PaymentsDisplay :items="paymentsList" />
      </main>
    </div>
  </div>
</template>

<script>
import AddPaymentForm from "./components/AddPaymentForm.vue";
import PaymentsDisplay from "./components/PaymentsDisplay.vue";

export default {
  name: "App",
  components: {
    PaymentsDisplay,
    AddPaymentForm,
  },
  data() {
    return {
      paymentsList: [],
      showForm: false,
    };
  },
  methods: {
    fetchData() {
      return [
        {
          date: "28.03.2020",
          category: "Food",
          value: 169,
        },
        {
          date: "24.03.2020",
          category: "Transport",
          value: 360,
        },
        {
          date: "24.03.2020",
          category: "Food",
          value: 532,
        },
      ];
    },
    onDataPaymentAdd(data) {
      this.paymentsList.push(data);
    },
  },
  created() {
    this.paymentsList = this.fetchData();
  },
};
</script>

<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.wrapper {
  max-width: 1060px;
  padding: 0;
  margin: 0 auto;
}
header {
  display: flex;
}
main {
  display: flex;
  flex-direction: column;
}
.form-btn {
  max-width: 200px;
  padding: 10px 15px;
  background-color: rgb(27, 141, 103);
  color: rgb(255, 255, 255);
  border: none;
  border-radius: 5px;
  margin-bottom: 20px;
  &:hover {
    background-color: rgb(255, 255, 255);
    color: rgb(27, 141, 103);
    border: 1px solid rgb(27, 141, 103);
  }
}
</style>
