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
      <router-link to="/add/payment/Entertainment"
        >Add payment Entertainment</router-link
      >
    </nav>
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  created() {
    this.$store.dispatch("fetchData");
  },
};
</script>

<style lang="scss" module></style>
