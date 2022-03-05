<template>
  <header>
    <nav class="navbar navbar-expand-xl navbar-light" role="navigation">
      <div class="container text-center">
        <a
          href="/"
          class="text-dark text-decoration-none"
          aria-label="Go to the home page"
        >
          <img
            alt="Muscle maker logo"
            src="../assets/resources/logo-muscle-100.png"
            width="100"
            height="100"
          />
        </a>
        <div
          class="collapse navbar-collapse justify-content-center"
          id="navbarTogglerDemo2"
        >
          <ul class="navbar-nav mb-2 mb-xl-0">
            <li class="nav-item pe-xl-5">
              <router-link
                class="nav-link px-2 link-dark text-uppercase fs-6"
                to="/"
                aria-label="Go to the home page"
                >Inicio</router-link
              >
            </li>
            <li class="nav-item pe-xl-5">
              <router-link
                class="nav-link px-2 link-dark text-uppercase fs-6"
                to="/sessions"
                aria-label="Go to the sessions page"
                >Sesiones</router-link
              >
            </li>
            <li class="nav-item pe-xl-5">
              <router-link
                class="nav-link px-2 link-dark text-uppercase fs-6"
                to="/about"
                aria-label="Go to the about page"
                >Nosotros</router-link
              >
            </li>
            <li class="me-xl-2 my-2 my-xl-0">
              <button
                class="btn btn-outline-success col-4 col-xl-12"
                type="button"
              >
                Login
              </button>
            </li>
            <li class="me-xl-2">
              <button class="btn btn-warning col-4 col-xl-12" type="button">
                Registrarse
              </button>
            </li>
          </ul>
        </div>
        <button class="btn me-2 p-0" type="button">
          <router-link to="/checkout" aria-label="Go to the checkout page">
            <img
              src="https://img.icons8.com/ios/30/000000/shopping-cart-loaded--v2.png"
              alt="shopping-cart"
              width="30"
              height="30"
            />
          </router-link>
          <span class="ms-1">{{ $store.state.totalQuantity }}</span>
        </button>
        <button
          class="navbar-toggler border-0 p-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo2"
          aria-controls="navbarTogglerDemo2"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
  props: {},
};
</script>
