<template>
  <div class="context-wrapper" v-if="isShow" :style="styles">
    <div
      clss="context-item"
      v-for="(item, idx) in items"
      :key="idx"
      @click="onClick(item)"
    >
      {{ item.text }}
    </div>
  </div>
</template>
<script>
export default {
  name: "ContextMenu",
  data() {
    return {
      isShow: false,
      items: [],
      xPos: 0,
      yPos: 0,
    };
  },
  computed: {
    styles() {
      return {
        top: `${this.yPos + 10}px`,
        left: `${this.xPos + 20}px`,
      };
    },
  },
  methods: {
    onClick(item) {
      item.action();
      this.$contextMenu.close();
    },
    onShow({ caller, items }) {
      this.items = items;
      this.setPositon(caller);
      this.isShow = true;
    },
    onClose() {
      this.items = [];
      this.isShow = false;
    },
    setPositon(caller) {
      const pos = caller.getBoundingClientRect();
      this.xPos = pos.left;
      this.yPos = pos.top;
    },
  },
  mounted() {
    this.$contextMenu.EventBus.$on("show", this.onShow);
    this.$contextMenu.EventBus.$on("close", this.onClose);
  },
  beforeDestroy() {
    this.$contextMenu.EventBus.$off("show", this.onShow);
    this.$contextMenu.EventBus.$off("close", this.onClose);
  },
};
</script>
<style lang="scss" scoped>
.context-wrapper {
  position: absolute;
  background: #eee;
  cursor: pointer;
}
</style>
