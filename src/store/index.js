import { createStore } from "vuex";

export default createStore({
  state: {
    sessions: [],
    session: {
      id: 0,
      name: "",
      quantity: 0,
      price: 0,
      totalPrice: 0,
    },
    totalQuantity: 0,
    finalPrice: 0,
  },
  getters: {
    getSessions(state) {
      return state.sessions;
    },
    getSession(state) {
      return state.session;
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
      state.sessions.push(session);
    },
    mutateSession(state, sessionObj) {
      state.session.id = sessionObj.id;
      state.session.name = sessionObj.name;
      state.session.quantity = sessionObj.quantity;
      state.session.price = sessionObj.price;
      state.session.totalPrice = sessionObj.quantity * sessionObj.price;
    },
    increaseFinalPrice(state) {
      let price = 0;
      state.sessions.forEach((session) => {
        price += session.price;
      });
      state.finalPrice = price;
    },
    increaseTotalQuantity(state) {
      let quantity = 0;
      state.sessions.forEach((session) => {
        quantity += session.quantity;
      });
      state.totalQuantity = quantity;
    },
    deleteCartSession(state, id) {
      state.sessions = state.sessions.filter((session) => session.id !== id);

      let quantity = 0;
      state.sessions.forEach((session) => {
        quantity += session.quantity;
      });
      state.totalQuantity = quantity;

      state.finalPrice = 0;
      state.sessions.forEach((session) => {
        state.finalPrice += session.price;
      });
    },
  },
  actions: {},
  modules: {},
});
