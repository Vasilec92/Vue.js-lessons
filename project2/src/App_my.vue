<template>
  <div id="app">
    <nav>
      <router-link to="/">Dashboard</router-link>/
      <router-link to="/login">Login</router-link>/
      <router-link to="/about">About</router-link>
    </nav>
    <nav>
      <router-link to="/add/payment/Food">Add payment Food</router-link> /
      <router-link to="/add/payment/Transport"
        >Add payment Transport</router-link
      >
      /
      <router-link to="/add/payment/Entertainmen"
        >Add payment Entertainment</router-link
      >
    </nav>
    <main>
      <router-view />
    </main>
    <transition name="fade">
      <ContextMenu />
    </transition>
  </div>
</template>

<script>
import ContextMenu from "./components/ContextMenu.vue";
export default {
  name: "App",
  components: { ContextMenu },
  created() {
    this.$store.dispatch("fetchData");
  },
};
</script>

<style lang="scss" module></style>
