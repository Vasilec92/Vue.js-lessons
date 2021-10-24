<template>
  <div>
    <input placeholder="Amount" v-model="value" />
    <input placeholder="Type" v-model="category" />
    <input placeholder="Date" v-model="date" />
    <button class="btn" @click="onSaveClick">Save!</button>
  </div>
</template>

<script>
export default {
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
    onSaveClick() {
      const data = {
        value: +this.value,
        category: this.category,
        date: this.date || this.getCurrentDate,
      };
      this.$emit("addNewPayment", data);
    },
  },
};
</script>

<style>
input {
  padding-top: 12px;
  padding-bottom: 12px;
  margin-right: 10px;
}
</style>
