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
        <AddPaymentForm v-show="showForm" />
        <PaymentsDisplay :items="currentElements" />
        <Pagination
          :cur="page"
          :n="n"
          :length="getNumbElement"
          @paginate="onChangePage"
        />
      </main>
    </div>
  </div>
</template>

<script>
import AddPaymentForm from "./components/AddPaymentForm.vue";
import PaymentsDisplay from "./components/PaymentsDisplay.vue";
import { mapGetters, mapActions } from "vuex";
import Pagination from "./components/Pagination.vue";

export default {
  name: "App",
  components: {
    PaymentsDisplay,
    AddPaymentForm,
    Pagination,
  },
  data() {
    return {
      showForm: false,
      page: 1,
      n: 3,
    };
  },
  computed: {
    ...mapGetters({
      paymentsList: "getPaymentsList",
    }),
    currentElements() {
      return this.paymentsList.slice(
        this.n * (this.page - 1),
        this.n * (this.page - 1) + this.n
      );
    },
    getNumbElement(){
      if(this.paymentsList.length <= 6) return 6;
      else return this.paymentsList.length;
    },
  },
  methods: {
    ...mapActions(["fetchData"]),
    onChangePage(p) {
      this.page = p
      if(p <= 2) this.fetchData(this.page) 
      //чтобы ошибка не вылетала
    },
  },
  created() {
    this.fetchData(this.page);
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
  border: 1px solid rgb(27, 141, 103);
  border-radius: 5px;
  margin-bottom: 20px;
  &:hover {
    background-color: rgb(255, 255, 255);
    color: rgb(27, 141, 103);
    border: 1px solid rgb(27, 141, 103);
  }
}
</style>
