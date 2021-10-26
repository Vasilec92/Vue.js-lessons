<template>
  <div id="app">
    <header>
      <h2>My personal costs</h2>
      <h3>Total value = {{ totalPayments }}</h3>
    </header>
    <main>
      <button class="btn" @click="showForm">ADD NEW COST</button>
      <AddPaymentForm v-if="show" @addNewPayment="addNewPayment" />
      <PaymentsDisplay :items="currentElements" />
      <Pagination
        @paginate="changePage"
        :length="paymentList.length"
        :cur="page"
        :n="count"
      />
    </main>
  </div>
</template>

<script>
import PaymentsDisplay from "./components/PaymentsDisplay.vue";
import AddPaymentForm from "./components/AddPaymentForm.vue";
import Pagination from "./components/Pagination.vue";
import { mapMutations, mapGetters } from "vuex";

export default {
  name: "App",
  components: {
    PaymentsDisplay,
    AddPaymentForm,
    Pagination,
  },
  data() {
    return {
      //paymentsList: [],
      show: false,
      page: 1,
      count: 10,
    };
  },
  methods: {
    ...mapMutations({
      setPaymentsData: "setPaymentListData",
    }),
    /* fetchData() {
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
    }, */
    addNewPayment(data) {
      this.paymentsList = [...this.paymentsList, data];
    },
    showForm() {
      this.show = !this.show;
    },
    changePage(p) {
      this.page = p;
    },
  },
  computed: {
    ...mapGetters({
      setPaymentListData: "getPaymentsList",
      totalPayments: "getFullPaymentValue",
      paymentList: "getPaymentsList",
      //category: "getCategoryList",
    }),
    currentElements() {
      const { count, page } = this;
      return this.paymentList.slice(
        count * (page - 1),
        count * (page - 1) + count
      );
    },
  },
  created() {
    this.$store.dispatch("fetchData");
    //this.setPaymentsData(this.fetchData());
    //this.$store.commit("setPaymentListData", this.fetchData());
    //this.paymentsList = this.fetchData();
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.btn {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #04aa6d;
  color: white;
  margin-bottom: 20px;
}
</style>
