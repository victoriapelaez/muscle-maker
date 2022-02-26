<template>
  <div>
    <h4 class="d-flex justify-content-between align-items-center mb-3">
      <span class="text-primary">Sesiones reservadas</span>
      <span class="badge bg-primary rounded-pill">{{ $store.getters.getTotalQuantity }}</span>
    </h4>
    <ul class="list-group mb-3">
      <li class="list-group-item d-flex justify-content-between lh-sm">
        <h6 class="my-0">Session</h6>
        <h6 class="my-0">Quantity</h6>
        <h6 class="my-0">Total price</h6>
      </li>
      <li
        v-for="session in $store.getters.getCartSessions"
        v-bind:key="session"
        class="list-group-item d-flex justify-content-between lh-sm"
      >
        <h6 class="my-0">{{ session.name }}</h6>
        <div class="prod-quantity input-group w-25">
          <button
            v-if="session.quantity > 1"
            class="btn-subtract btn btn-outline-secondary btn-sm p-0"
            @click="decreaseSession(session.id)"
          >-</button>
          <button
            v-if="session.quantity === 1"
            class="btn-subtract btn btn-outline-secondary btn-sm p-0"
            @click="$store.commit('deleteCartSession', session.id)"
          >-</button>
          <input
            class="form-control text-center p-0"
            type="text"
            placeholder="0"
            v-model="session.quantity"
          />
          <button
            class="btn-add btn btn-outline-secondary btn-sm p-0"
            @click="increaseSession(session.id)"
          >+</button>
          <button
            class="btn-add btn btn-outline-secondary btn-sm p-0"
            @click="$store.commit('deleteCartSession', session.id)"
          >🗑</button>
        </div>
        <span class="text-muted">{{ session.price }}</span>
      </li>
      <li class="list-group-item d-flex justify-content-between lh-sm">
        <span>Total (EUR)</span>
        <strong>{{ $store.getters.getFinalPrice }}</strong>
      </li>
    </ul>
    <form class="card p-2 mb-3">
      <div class="input-group">
        <input class="form-control" type="text" placeholder="Código promoción" />
        <button class="btn btn-secondary">Añadir</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "ShoppingCart",
  methods: {
    increaseSession(id) {
      const sessions = this.$store.getters.getCartSessions;
      sessions.forEach((session) => {
        if (session.id === id) {
          session.quantity++;
          session.price += this.getSessionPrice(session.id);
          this.$store.state.finalPrice += this.getSessionPrice(session.id);
        }
      });
      this.$store.state.totalQuantity++;
      this.$store.state.cartSessions = [...sessions];
    },
    decreaseSession(id) {
      const sessions = this.$store.getters.getCartSessions;
      sessions.forEach((session) => {
        if (session.id === id && session.quantity !== 0) {
          session.quantity--;
          session.price -= this.getSessionPrice(session.id);
          this.$store.state.finalPrice -= this.getSessionPrice(session.id);
          this.$store.state.totalQuantity--;
        }
      });

      // if (this.getSessionQuantity(id, sessions) === 0) {
      //   this.$store.commit("deleteCartSession", id);
      // }

      this.$store.state.cartSessions = [...sessions];
    },
    getSessionPrice(id) {
      let sessionBasePrice = 0;
      if (id === 2) {
        sessionBasePrice = 40;
      } else if (id === 3) {
        sessionBasePrice = 200;
      } else if (id === 4) {
        sessionBasePrice = 500;
      } else if (id === 5) {
        sessionBasePrice = 800;
      } else if (id === 6) {
        sessionBasePrice = 1200;
      }
      return sessionBasePrice;
    },
    getSessionQuantity(id, sessions) {
      const [session] = sessions.filter((session) => session.id === id);
      return session.quantity;
    },
  },
};
</script>

<style scoped>
.prod-quantity {
  width: 5rem;
}
.btn-subtract,
.btn-add {
  width: 1.2rem;
}
</style>
