import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    paymentsList: [],
    categoryList: [],
  },
  mutations: {
    setPaymentListData(state, payload) {
      state.paymentsList = payload;
    },
    addDataToPaymentsList(state, payload) {
      state.paymentsList.push(payload);
    },
    setCategoryList(state, payload) {
      state.categoryList = payload;
    },
  },
  getters: {
    getPaymentsList: (state) => state.paymentsList,
    getFullPaymentValue: (state) => {
      return state.paymentsList.reduce((res, cur) => res + cur.value, 0);
    },
    getCategoryList: (state) => state.categoryList,
  },
  actions: {
    fetchCategoryList({ commit }) {
      return new Promise((resolve) => {
        setTimeout(() => {
          const items = ["Sport", "Food", "Education", "Internet"];
          resolve(items);
        }, 500);
      }).then((res) => {
        commit("setCategoryList", res);
      });
    },
    fetchData({ commit }) {
      return new Promise((resolve) => {
        setTimeout(() => {
          const items = [];
          for (let i = 1; i < 101; i++) {
            items.push({
              date: "28.03.2020",
              category: "Food",
              value: i,
            });
          }
          resolve(items);
        }, 2000);
      }).then((res) => {
        console.log(res);
        commit("setPaymentListData", res);
        //dispatch("upgradeData", res);
      });
    },
  },
});
