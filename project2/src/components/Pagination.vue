<template>
  <div class="pagination-wrapper">
    <div @click="onClick(cur - 1)">-</div>
    <div
      class="page"
      :class="{ active: cur === i }"
      v-for="i in amout"
      :key="i"
      @click="onClick(i)"
    >
      {{ i }}
    </div>
    <div @click="onClick(cur + 1)">+</div>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: {
    length: Number,
    n: Number,
    cur: Number,
  },
  data() {
    return {};
  },
  methods: {
    onClick(p) {
      if (p < 1 || p > this.amout) {
        return;
      }
      console.log(p);
      this.$emit("paginate", p);
    },
  },
  computed: {
    amout() {
      return Math.ceil(this.length / this.n);
    },
  },
};
</script>

<style scoped>
.pagination-wrapper {
  display: flex;
  justify-content: center;
}
.page {
  padding: 0 10px;
  cursor: pointer;
}
.active {
  background-color: #04aa6d;
  color: white;
}
</style>
