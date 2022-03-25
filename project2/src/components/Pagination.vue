<template>
  <div class="pagination-wrapper">
    <div @click="onClick(cur - 1)">-</div>
    <div
      class="page"
      :class="{ active: cur === i }"
      v-for="i in length"
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
    cur: Number,
  },
  data() {
    return {};
  },
  methods: {
    onClick(p) {
      console.log(p);
      this.$emit("paginate", p);
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
