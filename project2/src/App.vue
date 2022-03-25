<template>
  <div id="app">
    <header>
      <h2>My personal costs</h2>
      <!-- <h3>Total value = {{ totalPayments }}</h3> -->
    </header>
    <main>
      <button class="btn" @click="showForm">ADD NEW COST</button>
      <AddPaymentForm v-if="show" @addNewPayment="addNewPayment" />
      <PaymentsDisplay :items="currentElements" />
      <Pagination
        @paginate="changePage"
        :length="Object.keys(paymentList).length"
        :cur="page"
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
      show: false,
      page: 1,
    };
  },
  methods: {
    ...mapMutations({
      setPaymentsData: "setPaymentListData",
    }),
    addNewPayment(data) {
      this.paymentsList = [...this.paymentsList.page3, data];
    },
    showForm() {
      this.show = !this.show;
    },
    changePage(p) {
      console.log(p);
      this.page = p;
    },
  },
  computed: {
    ...mapGetters({
      setPaymentListData: "getPaymentsList",
      // totalPayments: "getFullPaymentValue",
      paymentList: "getPaymentsList",
      //category: "getCategoryList",
    }),
    currentElements() {
      return this.paymentList[`page${this.page}`];
    },
  },
  created() {
    this.$store.dispatch("fetchData");
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
