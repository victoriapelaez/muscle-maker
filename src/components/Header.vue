<template>
  <div class="container" id="nav">
    <header
      class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom"
    >
      <a
        href="/"
        class="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none"
      >
        <img alt="Muscle maker logo" src="../assets/logo-muscle-100.png" />
      </a>
      <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li>
          <router-link class="nav-link px-2 link-dark" to="/"
            >Inicio</router-link
          >
        </li>
        <li>
          <router-link class="nav-link px-2 link-dark" to="/sessions"
            >Sesiones</router-link
          >
        </li>
        <li>
          <router-link class="nav-link px-2 link-dark" to="/about"
            >Nosotros</router-link
          >
        </li>
      </ul>
      <div class="col-md-3 text-end">
        <button class="btn btn-outline-success me-2" type="button">
          Login
        </button>
        <button class="btn btn-warning" type="button">Registrarse</button>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
