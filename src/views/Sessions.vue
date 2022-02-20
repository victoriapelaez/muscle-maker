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
          <!-- <div class="col">
            <div class="card shadow-sm">
              <img
                class="bd-placeholder-img card-img-top img-fluid"
                src="../assets/mensual-600.png"
                alt="Sesión de entrenamiento mensual"
              />
              <div class="card-body">
                <p class="card-text">Card body text ...</p>
                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group">
                    <button
                      class="btn btn-sm btn-outline-success"
                      type="button"
                    >
                      Reservar
                    </button>
                    <button
                      class="btn btn-sm btn-outline-success"
                      type="button"
                    >
                      Comprar
                    </button>
                  </div>
                  <small class="text-muted">1 mes</small>
                </div>
              </div>
            </div>
          </div> -->
          <!-- <div class="col">
            <div class="card shadow-sm">
              <img
                class="bd-placeholder-img card-img-top img-fluid"
                src="../assets/trimestral-600.png"
                alt="Sesión de entrenamiento trimestral"
              />
              <div class="card-body">
                <p class="card-text">Card body text ...</p>
                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group">
                    <button
                      class="btn btn-sm btn-outline-success"
                      type="button"
                    >
                      Reservar
                    </button>
                    <button
                      class="btn btn-sm btn-outline-success"
                      type="button"
                    >
                      Comprar
                    </button>
                  </div>
                  <small class="text-muted">3 meses</small>
                </div>
              </div>
            </div>
          </div> -->
          <!-- <div class="col">
            <div class="card shadow-sm">
              <img
                class="bd-placeholder-img card-img-top img-fluid"
                src="../assets/semestral-600.png"
                alt="Sesión de entrenamiento semestral"
              />
              <div class="card-body">
                <p class="card-text">Card body text ...</p>
                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group">
                    <button
                      class="btn btn-sm btn-outline-success"
                      type="button"
                    >
                      Reservar
                    </button>
                    <button
                      class="btn btn-sm btn-outline-success"
                      type="button"
                    >
                      Comprar
                    </button>
                  </div>
                  <small class="text-muted">6 meses</small>
                </div>
              </div>
            </div>
          </div> -->
          <!-- <div class="col">
            <div class="card shadow-sm">
              <img
                class="bd-placeholder-img card-img-top img-fluid"
                src="../assets/anual-600.png"
                alt="Sesión de entrenamiento anual"
              />
              <div class="card-body">
                <p class="card-text">Card body text ...</p>
                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group">
                    <button
                      class="btn btn-sm btn-outline-success"
                      type="button"
                    >
                      Reservar
                    </button>
                    <button
                      class="btn btn-sm btn-outline-success"
                      type="button"
                    >
                      Comprar
                    </button>
                  </div>
                  <small class="text-muted">1 año</small>
                </div>
              </div>
            </div>
          </div> -->
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
