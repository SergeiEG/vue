<template>
  <v-container>
    <v-row>
      <v-col>
        <div class="text-lg-h2 text-md-h3 text-sm-h5 mb-5">
          My personal costs
        </div>
        <v-dialog v-model="dialog" max-width="500px">
          <template v-slot:activator="{ on }">
            <v-btn class="mb-5" color="teal" dark v-on="on"
              >ADD NEW COST <v-icon>mdi-plus</v-icon></v-btn
            >
          </template>
          <AddPaymentForm />
        </v-dialog>
        <PaymentsDisplay :items="paymentsList" />
        <modal />
      </v-col>
      <v-col class="d-flex justify-center">
        <ChartDoughnut :items="paymentsList" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import ChartDoughnut from "./ChartDoughnut.vue";

export default {
  name: "Dashboard",
  components: {
    PaymentsDisplay: () => import("./PaymentsDisplay.vue"),
    AddPaymentForm: () => import("./AddPaymentForm.vue"),
    ChartDoughnut,
  },
  data() {
    return {
      dialog: false,
    };
  },
  computed: {
    ...mapGetters({
      paymentsList: "getPaymentsList",
    }),
  },
  methods: {
    ...mapActions(["fetchData"]),
  },
  created() {
    this.fetchData();
  },
};
</script>

<style lang="scss" >
</style>