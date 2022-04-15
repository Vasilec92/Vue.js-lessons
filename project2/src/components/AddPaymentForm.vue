<template>
  <div class="form">
    <input placeholder="Amount" v-model="value" />
    <!-- <input placeholder="Type" v-model="category" /> -->
    <SelectCategory v-model="category" />
    <input placeholder="Date" v-model="date" />
    <button class="btn" @click="onSaveClick">Save!</button>
  </div>
</template>

<script>
import SelectCategory from "./SelectCategory.vue";
import { mapMutations } from "vuex";
export default {
  components: { SelectCategory },
  name: "AddPaymentForm",
  data() {
    return {
      value: "",
      category: "",
      date: "",
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
  },
  methods: {
    ...mapMutations({
      newPayment: "addDataToPaymentsList",
    }),
    onSaveClick() {
      const data = {
        value: +this.value,
        category: this.category,
        date: this.date || this.getCurrentDate,
      };
      //this.$emit("addNewPayment", data);
      this.newPayment(data);
      this.$router.push({ path: "/dashboard/11" });
    },
  },
  mounted() {
    this.category = this.$route.params.category;
    this.value = this.$route.query.value;
    this.date = this.getCurrentDate;
  },
};
</script>

<style>
input {
  padding-top: 12px;
  padding-bottom: 12px;
  margin-right: 10px;
}
.form {
  display: flex;
  justify-content: center;
  padding-bottom: 15px;
}
</style>
