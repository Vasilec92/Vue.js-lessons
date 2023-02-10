<template>
  <div>
    <h1>Take a look on your payments and add more!</h1>
    <AddPaymentForm @addNewPayment="addNewPayment" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import AddPaymentForm from "../components/AddPaymentForm.vue";
export default {
  name: "AddPayment",
  components: { AddPaymentForm },
  methods: {
    addNewPayment(data) {
      this.paymentsList = [...this.paymentsList, data];
    },
  },
  computed: {
    ...mapGetters({
      setPaymentListData: "getPaymentsList",
      totalPayments: "getFullPaymentValue",
      paymentList: "getPaymentsList",
    }),
  },
};
</script>

<style></style>
