<template>
  <header>
    <nav class="navbar navbar-expand-xl navbar-light">
      <div class="container text-center">
        <div class="collapse navbar-collapse" id="navbarTogglerDemo2">
          <ul class="navbar-nav me-auto mb-2 mb-xl-0">
            <li class="nav-item pe-5">
              <router-link
                class="nav-link px-2 link-dark text-uppercase fs-6"
                to="/"
                >Inicio</router-link
              >
            </li>
            <li class="nav-item pe-5">
              <router-link
                class="nav-link px-2 link-dark text-uppercase fs-6"
                to="/sessions"
                >Sesiones</router-link
              >
            </li>
            <li class="nav-item pe-5">
              <router-link
                class="nav-link px-2 link-dark text-uppercase fs-6"
                to="/about"
                >Nosotros</router-link
              >
            </li>
          </ul>
        </div>
        <a
          href="/"
          class="col-md-3 mb-2 mb-md-0 text-dark text-decoration-none"
        >
          <img alt="Muscle maker logo" src="../assets/logo-muscle-100.png" />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo2"
          aria-controls="navbarTogglerDemo2"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="col-md-6">
          <button class="btn btn-outline-success me-2" type="button">
            Login
          </button>
          <button class="btn btn-warning me-5" type="button">
            Registrarse
          </button>
          <button class="btn me-2" type="button">
            <router-link to="/checkout">
              <img
                src="https://img.icons8.com/ios/30/000000/shopping-cart-loaded--v2.png"
              />
            </router-link>
            <span class="ms-1">{{ $store.state.totalQuantity }}</span>
          </button>
        </div>
      </div>
    </nav>
  </header>
  <!-- <header
      class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom"
    >
      <a
        href="/"
        class="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none text-center"
      >
        <img alt="Muscle maker logo" src="../assets/logo-muscle-100.png" />
      </a>
      <ul
        class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0 list-group list-group-horizontal align-items-center"
      >
        <li class="btn btn-outline-warning border-0 p-0 mx-2 mx-lg-3 mx-xl-4 mx-xxl-5">
          <router-link class="nav-link px-2 link-dark text-uppercase" to="/">Inicio</router-link>
        </li>
        <li class="btn btn-outline-warning border-0 p-0 mx-2 mx-lg-3 mx-xl-4 mx-xxl-5">
          <router-link class="nav-link px-2 link-dark text-uppercase" to="/sessions">Sesiones</router-link>
        </li>
        <li class="btn btn-outline-warning border-0 p-0 mx-2 mx-lg-3 mx-xl-4 mx-xxl-5">
          <router-link class="nav-link px-2 link-dark text-uppercase" to="/about">Nosotros</router-link>
        </li>
      </ul>
      <div class="col-md-4 text-end">
        <button class="btn btn-outline-success me-2" type="button">Login</button>
        <button class="btn btn-warning me-5" type="button">Registrarse</button>
        <router-link to="/checkout">
          <img src="https://img.icons8.com/ios/30/000000/shopping-cart-loaded--v2.png" />
        </router-link>
      </div>
  </header>-->
</template>

<script>
export default {
  name: "Header",
  props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
