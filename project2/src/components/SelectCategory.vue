<template>
  <div>
    <select :value="value" @change="onChange($event)">
      <option v-for="(option, idx) in getCategoryList" :key="idx">
        {{ option }}
      </option>
    </select>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "SelectCategory",
  props: {
    value: {
      type: String,
    },
  },
  data() {
    return {
      selected: "",
    };
  },
  computed: {
    ...mapGetters(["getCategoryList"]),
  },
  methods: {
    ...mapActions(["fetchCategoryList"]),
    onChange(event) {
      this.$emit("input", event.target.value);
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
select {
  padding-top: 12px;
  padding-bottom: 12px;
  margin-right: 10px;
}
</style>
