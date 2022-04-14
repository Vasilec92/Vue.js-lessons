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
    delateDataToPaymentsList(state, id) {
      state.paymentsList = state.paymentsList.filter((el) => el.id !== id);
    },
    editData(state, payload) {
      console.log(payload);
      state.paymentsList.map((el, idx) => {
        if (el?.id === payload?.id) {
          Object.assign(state.paymentsList[idx], payload);
        }
      });
    },
  },
  getters: {
    getPaymentsList: (state) => state.paymentsList,
    getFullPaymentValue: (state) => {
      return state.paymentsList.reduce((res, cur) => res + cur.value, 0);
    },
    getFullPaymentValueFood: (state) => {
      const foods = state.paymentsList.filter((el) => el.category == "Food");
      const res = foods.reduce((res, cur) => res + cur.value, 0);
      console.log(res);
      return res;
    },
    getFullPaymentValueSport: (state) => {
      const sports = state.paymentsList.filter((el) => el.category == "Sport");
      const res = sports.reduce((res, cur) => res + cur.value, 0);
      console.log(res);
      return res;
    },
    getFullPaymentValueE: (state) => {
      const values = state.paymentsList.filter(
        (el) => el.category == "Education"
      );
      const res = values.reduce((res, cur) => res + cur.value, 0);
      console.log(res);
      return res;
    },
    getFullPaymentValueI: (state) => {
      const values = state.paymentsList.filter(
        (el) => el.category == "Internet"
      );
      const res = values.reduce((res, cur) => res + cur.value, 0);
      console.log(res);
      return res;
    },
    getFullPaymentValueT: (state) => {
      const values = state.paymentsList.filter(
        (el) => el.category == "Transport"
      );
      const res = values.reduce((res, cur) => res + cur.value, 0);
      console.log(res);
      return res;
    },
    getFullPaymentValueEnt: (state) => {
      const values = state.paymentsList.filter(
        (el) => el.category == "Entertainmen"
      );
      const res = values.reduce((res, cur) => res + cur.value, 0);
      console.log(res);
      return res;
    },
    getCategoryList: (state) => state.categoryList,
  },
  actions: {
    fetchCategoryList({ commit }) {
      return new Promise((resolve) => {
        setTimeout(() => {
          const items = [
            "Sport",
            "Food",
            "Education",
            "Internet",
            "Transport",
            "Entertainmen",
          ];
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
              id: i,
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
