import { createStore } from "vuex";

export default createStore({
  state: {
    cartSessions: [],
    totalQuantity: 0,
    finalPrice: 0,
  },
  getters: {
    getCartSessions(state) {
      return state.cartSessions;
    },
    getFinalPrice(state) {
      return state.finalPrice;
    },
    getTotalQuantity(state) {
      return state.totalQuantity;
    },
  },
  mutations: {
    addSession(state, session) {
      state.cartSessions.push(session);
    },
    increaseFinalPrice(state) {
      let price = 0;
      state.cartSessions.forEach((session) => {
        price += session.price;
      });
      state.finalPrice = price;
    },
    increaseTotalQuantity(state) {
      let quantity = 0;
      state.cartSessions.forEach((session) => {
        quantity += session.quantity;
      });
      state.totalQuantity = quantity;
    },
    deleteCartSession(state, id) {
      state.cartSessions = state.cartSessions.filter(
        (session) => session.id !== id
      );

      let quantity = 0;
      state.cartSessions.forEach((session) => {
        quantity += session.quantity;
      });
      state.totalQuantity = quantity;

      state.finalPrice = 0;
      state.cartSessions.forEach((session) => {
        state.finalPrice += session.price;
      });
    },
  },
  actions: {},
  modules: {},
});
