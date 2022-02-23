<template>
  <div>
    <h4 class="d-flex justify-content-between align-items-center mb-3">
      <span class="text-primary">Sesiones reservadas</span>
      <span class="badge bg-primary rounded-pill">
        {{ $store.getters.getTotalQuantity }}
      </span>
    </h4>
    <ul class="list-group mb-3">
      <li class="list-group-item d-flex justify-content-between lh-sm">
        <h6 class="my-0">Session</h6>
        <h6 class="my-0">Quantity</h6>
        <h6 class="my-0">Total price</h6>
      </li>
      <li
        v-for="session in $store.getters.getSessions"
        v-bind:key="session"
        class="list-group-item d-flex justify-content-between lh-sm"
      >
        <h6 class="my-0">
          {{ session.name }}{{ $store.getters.getSession.sessionName }}
        </h6>
        <div class="prod-quantity input-group w-25">
          <button class="btn-subtract btn btn-outline-secondary btn-sm p-0" v-on:click="decrement(index)">
            -
          </button>
          <input
            class="form-control mx-1 text-center p-0"
            type="text"
            placeholder="0"
            v-model="$store.getters.getSession.quantity"
          />
          <button class="btn-add btn btn-outline-secondary btn-sm p-0" v-on:click="increment(index)">
            +
          </button>
          <button class="btn-add btn btn-outline-secondary btn-sm p-0 ms-1" v-on:click="del(index)">🗑</button>
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
        <input
          class="form-control"
          type="text"
          placeholder="Código promoción"
        />
        <button class="btn btn-secondary">Añadir</button>
      </div>
    </form>

    <router-link class="nav-link px-2 link-dark" to="/checkout">
      <button class="btn btn-large col-12 btn-primary">Comprar</button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "ShoppingCart",
};
</script>

<style scoped>
.prod-quantity {
  width: 4rem;
}
.btn-subtract,
.btn-add {
  width: 1.2rem;
}
</style>
