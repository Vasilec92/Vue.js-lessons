<template>
  <div>
    <h1>Take a look on your payments and add more!</h1>
    <AddPaymentForm />
  </div>
</template>

<script>
import AddPaymentForm from "../components/AddPaymentForm.vue";
export default {
  name: "AddPayment",
  components: { AddPaymentForm },
};
</script>

<style></style>
