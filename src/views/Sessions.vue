<template>
  <main class="sessions">
    <h1>Sesiones de entrenamiento</h1>
    <p>Elige la cuota que mejor se adapte a tus necesidades.</p>
    <section class="album py-5 bg-light">
      <div class="container">
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          <div class="col">
            <div class="card shadow-sm">
              <img
                class="bd-placeholder-img card-img-top img-fluid"
                src="../assets/individual-600.png"
                alt="Sesión de entrenamiento individual"
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
                      ?
                    </button>
                  </div>
                  <small class="text-muted">1 hora</small>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
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
                      ?
                    </button>
                  </div>
                  <small class="text-muted">1 hora</small>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
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
                      ?
                    </button>
                  </div>
                  <small class="text-muted">1 hora</small>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
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
                      ?
                    </button>
                  </div>
                  <small class="text-muted">1 hora</small>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
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
                      ?
                    </button>
                  </div>
                  <small class="text-muted">1 hora</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: "Sessions",
};
</script>

<style scoped>
.sessions {
  text-align: center;
}
</style>
