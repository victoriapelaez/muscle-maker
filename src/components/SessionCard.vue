<template>
  <div class="col" v-for="session in sessions" v-bind:key="session">
    <div class="card shadow-sm">
      <img
        class="bd-placeholder-img card-img-top img-fluid"
        :src="session.img"
        alt="Sesión de entrenamiento individual"
      />
      <div class="card-body">
        <p class="card-text">{{ session.name }}</p>
        <p class="card-text">{{ session.price }} €</p>
        <div class="d-flex justify-content-between align-items-center">
          <div class="btn-group">
            <button
              class="btn btn-sm btn-warning"
              @click="addSessionToCart(session.id)"
              type="button"
            >
              Reservar
            </button>
            <button class="btn btn-sm btn-outline-success" type="button">
              Comprar
            </button>
          </div>
          <small class="text-muted">{{ session.period }}</small>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SessionCard",
  data() {
    return {
      sessions: [
        {
          id: 1,
          name: "Sesión gratuita",
          price: 0,
          period: "1 hora",
          quantity: 1,
          img: require("../assets/gratuita-600.png"),
        },
        {
          id: 2,
          name: "Sesión individual",
          price: 40,
          period: "1 hora",
          quantity: 1,
          img: require("../assets/individual-600.png"),
        },
        {
          id: 3,
          name: "Suscripción mensual",
          price: 200,
          period: "1 mes",
          quantity: 1,
          img: require("../assets/mensual-600.png"),
        },
        {
          id: 4,
          name: "Suscripción trimestral",
          price: 500,
          period: "3 meses",
          quantity: 1,
          img: require("../assets/trimestral-600.png"),
        },
        {
          id: 5,
          name: "Suscripción semestral",
          price: 800,
          period: "6 meses",
          quantity: 1,
          img: require("../assets/semestral-600.png"),
        },
        {
          id: 6,
          name: "Suscripción anual",
          price: 1200,
          period: "1 año",
          quantity: 1,
          img: require("../assets/anual-600.png"),
        },
      ],
    };
  },
  methods: {
    addSessionToCart(id) {
      const [session] = this.sessions.filter((session) => session.id === id);
      let cartSession = this.getCartSession(id);

      if (this.isSessionInCart(id)) {
        cartSession.quantity++;
        cartSession.price += session.price;
      } else {
        cartSession = this.newCartSession(session);
        this.$store.commit("addSession", cartSession);
      }

      this.$store.commit("increaseFinalPrice");
      this.$store.commit("increaseTotalQuantity");
    },
    newCartSession(sessionObj) {
      let cartSession = {};
      cartSession.id = sessionObj.id;
      cartSession.name = sessionObj.name;
      cartSession.quantity = sessionObj.quantity;
      cartSession.price = sessionObj.price;
      cartSession.totalPrice = sessionObj.quantity * sessionObj.price;
      return cartSession;
    },
    isSessionInCart(id) {
      const cartSessions = this.$store.getters.getCartSessions.filter(
        (session) => session.id === id
      );
      if (cartSessions.length !== 0) {
        return true;
      } else {
        return false;
      }
    },
    getCartSession(id) {
      const [session] = this.$store.getters.getCartSessions.filter(
        (session) => session.id === id
      );
      return session;
    },
  },
};
</script>
