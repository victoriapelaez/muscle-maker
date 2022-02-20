<template>
  <main class="sessions">
    <h1>Sesiones de entrenamiento</h1>
    <p>Elige la cuota que mejor se adapte a tus necesidades.</p>
    <section class="album py-5 bg-light">
      <div class="container">
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          <div class="col" v-for="session in sessions" v-bind:key="session">
            <SessionCard :session="session" />
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import SessionCard from "../components/SessionCard.vue";
export default {
  name: "Sessions",
  data() {
    return {
      sessions: [
        {
          name: "Sesión individual",
          price: 40,
          period: "1 hora",
          img: require("../assets/individual-600.png"),
        },
        {
          name: "Suscripción mensual",
          price: 200,
          period: "1 mes",
          img: require("../assets/mensual-600.png"),
        },
        {
          name: "Suscripción trimestral",
          price: 500,
          period: "3 meses",
          img: require("../assets/trimestral-600.png"),
        },
        {
          name: "Suscripción semestral",
          price: 800,
          period: "6 meses",
          img: require("../assets/semestral-600.png"),
        },
        {
          name: "Suscripción anual",
          price: 1200,
          period: "1 año",
          img: require("../assets/anual-600.png"),
        },
      ],
    };
  },
  components: { SessionCard },
};
</script>

<style scoped>
.sessions {
  text-align: center;
}
</style>
