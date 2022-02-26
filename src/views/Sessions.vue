<template>
  <main class="sessions">
    <header class="container mb-3">
      <div class="row g-5 align-items-center">
        <div class="col-md-6 col-lg-7">
          <h1>Sesiones de entrenamiento</h1>
          <p>Elige la cuota que mejor se adapte a tus necesidades.</p>
        </div>
        <aside class="col-md-6 col-lg-5 order-md-last">
          <ShoppingCart />
          <router-link class="btn col-12 btn-primary" to="/checkout">Comprar</router-link>
        </aside>
      </div>
    </header>
    <section class="album py-5">
      <div class="container">
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 g-3">
          <SessionCard />
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import SessionCard from "../components/SessionCard.vue";
import ShoppingCart from "../components/ShoppingCart.vue";
export default {
  name: "Sessions",
  components: { SessionCard, ShoppingCart },
};
</script>

<style scoped>
.sessions {
  text-align: center;
}
</style>
