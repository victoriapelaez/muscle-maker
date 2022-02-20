import { createStore } from "vuex";

export default createStore({
  state: {
    shoppingCart: {
      session: "",
      quantity: 0,
      totalPrice: 0,
    },
    shoppingCartTotal: 0,
  },
  mutations: {},
  actions: {},
  modules: {},
});
