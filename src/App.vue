<template>
  <div id="app">
    <div class="wrapper">
      <header>
        <h1>My personal costs</h1>
      </header>
      <main>
        <button class="form-btn" @click="goToAddPayment">
          ADD NEW COST +
        </button>
        <router-link
          :to="{
            name: 'addPayment',
            params: { category: 'Food' },
            query: { value: '200' },
          }"
          replace
        >
          Food+200</router-link
        >
        <router-link
          :to="{
            name: 'addPayment',
            params: { category: 'Transport' },
            query: { value: '50' },
          }"
          >Transport + 50</router-link
        >
        <router-link
          :to="{
            name: 'addPayment',
            params: { category: 'Entertainment' },
            query: { value: '2000' },
          }"
          >Entertainment + 2000</router-link
        >
        <router-view />
        <modal />
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
import { mapGetters, mapActions } from "vuex";

export default {
  name: "App",
  components: {
    PaymentsDisplay: () => import("./components/PaymentsDisplay.vue"),
    Pagination: () => import("./components/Pagination.vue"),
  },
  data() {
    return {
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
    getNumbElement() {
      if (this.paymentsList.length <= 6) return 6;
      else return this.paymentsList.length;
    },
  },
  methods: {
    ...mapActions(["fetchData"]),
    onChangePage(p) {
      this.page = p;
      if (p <= 2) this.fetchData(this.page);
      //чтобы ошибка не вылетала
    },
    goToAddPayment() {
      this.$route.name !== "addPayment"
        ? this.$router.push({ name: "addPayment" })
        : this.$router.push({ path: "/" });
    },
  },
  created() {
    this.fetchData(this.page);
  },
};
</script>

<style lang="scss" >
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
