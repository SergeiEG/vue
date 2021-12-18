<script>
import { Doughnut } from "vue-chartjs";

export default {
  name: "ChartDoughnut",
  extends: Doughnut,
  props: {
    items: {
      type: Array,
      default: () => [],
    },
    data() {
      return {};
    },
  },
  watch: {
    items() {
      this.chart();
    },
  },
  computed: {
    uniqueLabels() {
      const category = this.items.map((el) => el.category);
      return Array.from(new Set(category.map(JSON.stringify))).map(JSON.parse);
    },
    newObjData() {
      let arr = [];
      this.uniqueLabels.forEach((el) => {
        let obj = new Object();
        obj = {
          category: el,
          value: this.getSum(el),
        };
        arr.push(obj);
      });
      return arr;
    },
  },
  methods: {
    getSum(el) {
      let sum = 0;
      this.items.forEach((item) => {
        if (item.category === el) {
          sum += item.value;
        }
      });
      return sum;
    },
    chart() {
      this.renderChart(
        {
          labels: this.newObjData.map((el) => el.category),
          datasets: [
            {
              label: "Coast by categories",
              data: this.newObjData.map((el) => el.value),
              backgroundColor: [
                "rgb(255, 99, 132)",
                "rgb(54, 162, 235)",
                "rgb(255, 205, 86)",
                "rgb(75, 192, 192)",
                "rgb(72, 61, 139)",
                "rgb(255, 0, 255)",
                "rgb(72, 209, 204)",
                "rgb(112, 128, 144)",
                "rgb(220, 20, 60)",
                "rgb(255, 69, 0)",
                "rgb(255, 250, 205)",
                "rgb(72, 209, 204)",
                "rgb(255, 0, 255)",
                "rgb(72, 61, 139)",
                "rgb(112, 128, 144)",
                "rgb(201, 203, 207)",
              ],
              hoverOffset: 4,
            },
          ],
        },
        {
          options: {
            plugins: {
              legend: {
                display: false,
                position: "right",
                align: "end",
              },
            },
          },
        }
      );
    },
  },
  mounted() {
    this.chart();
  },
};
</script>

<style>
</style>