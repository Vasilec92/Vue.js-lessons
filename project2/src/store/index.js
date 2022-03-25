import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    paymentsList: {},
    categoryList: [],
  },
  mutations: {
    setPaymentListData(state, payload) {
      state.paymentsList = { ...state.paymentsList, ...payload };
    },
    addDataToPaymentsList(state, payload) {
      state.paymentsList.page4.push(payload);
    },
    setCategoryList(state, payload) {
      state.categoryList = payload;
    },
  },
  getters: {
    getPaymentsList: (state) => state.paymentsList,
    /* getFullPaymentValue: (state) => {
      return state.paymentsList.reduce((res, cur) => res + cur.value, 0);
    }, */
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
          const items = {
            page1: [
              { id: 1, date: "20.03.2020", category: "Food", value: 169 },
              { id: 2, date: "21.03.2020", category: "Navigation", value: 50 },
              { id: 3, date: "22.03.2020", category: "Sport", value: 450 },
            ],
            page2: [
              {
                id: 4,
                date: "23.03.2020",
                category: "Entertaiment",
                value: 969,
              },
              { id: 5, date: "24.03.2020", category: "Education", value: 1500 },
              { id: 6, date: "25.03.2020", category: "Food", value: 200 },
            ],
            page3: [
              { id: 10, date: "20.03.2020", category: "Food", value: 169 },
              { id: 20, date: "21.03.2020", category: "Navigation", value: 50 },
              { id: 30, date: "22.03.2020", category: "Sport", value: 450 },
            ],
            page4: [
              { id: 101, date: "20.03.2020", category: "Food", value: 169 },
              {
                id: 201,
                date: "21.03.2020",
                category: "Navigation",
                value: 50,
              },
              { id: 301, date: "22.03.2020", category: "Sport", value: 450 },
            ],
          };
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
