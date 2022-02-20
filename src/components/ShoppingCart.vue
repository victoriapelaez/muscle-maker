<template>
  <div>
    <h4 class="d-flex justify-content-between align-items-center mb-3">
      <span class="text-primary">Sesiones reservadas</span>
      <span class="badge bg-primary rounded-pill">$total quantity$</span>
    </h4>
    <ul class="list-group mb-3">
      <li class="list-group-item d-flex justify-content-between lh-sm">
        <h6 class="my-0">$product name$</h6>
        <div class="prod-quantity input-group">
          <button class="btn-subtract btn btn-outline-secondary btn-sm p-0">
            -
          </button>
          <input
            class="form-control text-center p-0"
            type="text"
            placeholder="$product quantity$"
          />
          <button class="btn-add btn btn-outline-secondary btn-sm p-0">
            +
          </button>
        </div>
        <span class="text-muted">$product total price$</span>
      </li>
      <li class="list-group-item d-flex justify-content-between lh-sm">
        <span>Total (EUR)</span>
        <strong>$total price$</strong>
      </li>
    </ul>
    <form class="card p-2">
      <div class="input-group">
        <input
          class="form-control"
          type="text"
          placeholder="Código promoción"
        />
        <button class="btn btn-secondary">Añadir</button>
      </div>
    </form>
  </div>
</template>

<style scoped>
.prod-quantity {
  width: 4rem;
}
.btn-subtract,
.btn-add {
  width: 1.2rem;
}
</style>
