<template>
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
          <button class="btn btn-sm btn-outline-success" type="button">
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
</template>

<script>
export default {
  name: "Sessions",
  props: ["session"],
};
</script>
