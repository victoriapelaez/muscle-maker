<template>
  <div class="container">
    <div class="pt-5 text-center">
      <h2
        class="col-12 mb-5 pb-3 text-center text-success border-bottom border-success"
      >
        Finalizar Compra
      </h2>
    </div>

    <div class="row">
      <div class="col-lg-5 order-lg-2 mb-4 mt-5">
        <ShoppingCart />
        <router-link class="btn col-12 btn-primary" to="/purchase"
          >Comprar</router-link
        >
      </div>
      <div class="col-lg-7 order-lg-1">
        <h4 class="mt-5 text-success">Dirección de envío</h4>
        <form class="needs-validation">
          <div class="row">
            <div class="col-md-6 mb-3">
              <label for="firstName">Nombre</label>
              <input
                type="text"
                class="form-control"
                id="firstName"
                required
                aria-required="true"
              />
            </div>
            <div class="col-md-6 mb-3">
              <label for="lastName">Apellido</label>
              <input
                type="text"
                class="form-control"
                id="lastName"
                required
                aria-required="true"
              />
            </div>
          </div>
          <div class="mb-3">
            <label for="username">Nombre de usuario</label>
            <div class="input-group">
              <div class="input-group-prepend">
                <span class="input-group-text">@</span>
              </div>
              <input
                type="text"
                class="form-control"
                id="username"
                placeholder="Nombre de usuario"
                required
                aria-required="true"
              />
            </div>
          </div>
          <div class="mb-3">
            <label for="email">Email</label>
            <input
              type="email"
              class="form-control"
              id="email"
              required
              aria-required="true"
            />
          </div>
          <div class="mb-3">
            <label for="address">Dirección</label>
            <input
              type="text"
              class="form-control"
              id="address"
              required
              aria-required="true"
            />
          </div>
          <div class="row">
            <div class="col-md-6 mb-6">
              <label for="state">Localidad</label>
              <select class="custom-select d-block w-100" id="state">
                <option value>Selecciona...</option>
                <option>Palma de Mallorca</option>
              </select>
            </div>
            <div class="col-md-6 mb-6">
              <label for="zip">Código Postal</label>
              <input
                type="text"
                class="form-control"
                id="zip"
                required
                aria-required="true"
              />
            </div>
          </div>
          <hr class="mb-4" />
          <div class="custom-control custom-checkbox">
            <input
              type="checkbox"
              class="custom-control-input"
              id="save-info me-1"
              aria-required="false"
            />
            <label class="custom-control-label" for="save-info"
              >Guardar información para futuras compras.</label
            >
          </div>
          <hr class="mb-4" />
          <h4 class="mb-3 text-success">Pago</h4>

          <div class="d-block my-3">
            <div class="custom-control custom-radio">
              <input
                id="credit"
                name="paymentMethod"
                type="radio"
                class="custom-control-input me-1"
                required
                aria-required="true"
              />
              <label class="custom-control-label" for="credit"
                >Tarjeta de crédito</label
              >
            </div>
            <div class="custom-control custom-radio">
              <input
                id="paypal"
                name="paymentMethod"
                type="radio"
                class="custom-control-input me-1"
                required
                aria-required="true"
              />
              <label class="custom-control-label" for="paypal">PayPal</label>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6 mb-3">
              <label for="cc-name">Nombre de la tarjeta</label>
              <input
                type="text"
                class="form-control"
                id="cc-name"
                required
                aria-required="true"
              />
            </div>
            <div class="col-md-6 mb-3">
              <label for="cc-number">Número de la tarjeta</label>
              <input
                type="text"
                class="form-control"
                id="cc-number"
                required
                aria-required="true"
              />
            </div>
          </div>
          <div class="row align-items-end">
            <div class="col-md-3 mb-3">
              <label for="cc-expiration">Fecha de expiración</label>
              <input
                type="text"
                class="form-control"
                id="cc-expiration"
                required
                aria-required="true"
              />
            </div>
            <div class="col-md-3 mb-3">
              <label for="cc-cvv">CVV</label>
              <input
                type="text"
                class="form-control"
                id="cc-cvv"
                required
                aria-required="true"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import ShoppingCart from "../components/ShoppingCart.vue";

export default {
  name: "checkout",
  components: { ShoppingCart },
};
</script>
