<template>
  <div class="form">
    <input placeholder="Amount" v-model="item.value" />
    <!-- <input placeholder="Type" v-model="category" /> -->
    <select v-model="item.category" @change="onChange($event)">
      <option v-for="(option, idx) in getCategoryList" :key="idx">
        {{ option }}
      </option>
    </select>
    <input placeholder="Date" v-model="item.date" />
  </div>
</template>

<script>
import { mapMutations, mapGetters, mapActions } from "vuex";
export default {
  name: "EditPaymentForm",
  props: {
    item: {
      type: Object,
      default: () => {},
    },
    open: {
      type: Boolean,
      default: false,
    },
  },
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
    ...mapGetters(["getCategoryList"]),
  },
  methods: {
    ...mapMutations({
      newPayment: "addDataToPaymentsList",
    }),
    ...mapActions(["fetchCategoryList"]),
    onChange(event) {
      this.$emit("input", event.target.value);
    },
    closeEdit(open) {
      console.log(open);
      this.open = false;
    },
  },
  mounted() {
    if (!this.getCategoryList?.length) {
      this.fetchCategoryList();
    }
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
