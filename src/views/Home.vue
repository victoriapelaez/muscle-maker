<template>
  <main>
    <section class="first-section container col-xxl-8 px-4 py-5">
      <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div class="col-10 col-sm-8 col-lg-6">
          <img
            class="d-block mx-lg-auto img-fluid rounded shadow-sm"
            src="../assets/hero-img-500h.jpg"
            alt="Hero image"
            loading="lazy"
            height="500"
          />
        </div>
        <div class="col-lg-6">
          <h1 class="display-5 fw-bold lh-1 mb-3">Muscle Maker</h1>
          <p class="fw-bold">La preparación física que necesitas para el deporte que practicas.</p>
          <p class="lead">
            Ven a entrenar con nosotros para mejorar tus cualidades como
            deportista y alcanzar los objetivos que siempre quisiste. Reserva tu
            primera sesión!
          </p>
          <div class="d-grid gap-2 d-md-flex justify-content-md-start">
            <button class="btn btn-danger btn-lg px-4 me-md-2" type="button">Reservar</button>
            <button class="btn btn-outline-warning btn-lg px-4" type="button">Registrarse</button>
          </div>
        </div>
      </div>
    </section>

    <div class="second-section my-5">
      <!-- contenedor carrousel -->
      <div class="container mt-5 pt-5">
        <!-- contenedor barras inferiores carrousel -->
        <div id="carouselWithCaptions" class="carousel slide" data-bs-ride="carousel">
          <ol class="carousel-indicators">
            <li data-bs-target="#carouselWithCaptions" data-bs-slide-to="0" class="active"></li>
            <li data-bs-target="#carouselWithCaptions" data-bs-slide-to="1"></li>
            <li data-bs-target="#carouselWithCaptions" data-bs-slide-to="2"></li>
            <li data-bs-target="#carouselWithCaptions" data-bs-slide-to="3"></li>
            <li data-bs-target="#carouselWithCaptions" data-bs-slide-to="4"></li>
          </ol>
          <div class="carousel-inner">
            <!-- contenedores item-carrousel -->
            <div class="carousel-item active">
              <img src="../assets/pesas-1296.jpg" class="d-block w-100 img-fluid" alt="pesas" />
              <div class="carousel-caption d-none d-sm-block">
                <h3 class="fw-bold lh-1 text-dark">ENTRENAMIENTOS PERSONALIZADOS</h3>
                <h5 class="m-0 text-dark">Realizamos entrenamientos personalizados</h5>
              </div>
            </div>
            <div class="carousel-item">
              <img
                src="../assets/estiramiento-1296.jpg"
                class="d-block w-100 img-fluid"
                alt="estiramientos"
              />
              <div class="carousel-caption d-none d-sm-block">
                <h3 class="fw-bold lh-1">RUTINA DE EJERCICIOS EN CASA</h3>
                <h5
                  class="m-0 text-dark"
                >Creamos una rutina para que puedas realizar con seguridad entrenamientos en casa</h5>
              </div>
            </div>
            <div class="carousel-item">
              <img src="../assets/crossfit-1296.jpg" class="d-block w-100 img-fluid" alt="crossfit" />
              <div class="carousel-caption d-none d-sm-block">
                <h3 class="fw-bold lh-1 text-light">PROFESIONALIZACIÓN</h3>
                <h5 class="m-0 text-ligth">Te preparamos para hacer la mejor versión de ti</h5>
              </div>
            </div>
            <div class="carousel-item">
              <img
                src="../assets/alimentacion-1296.jpg"
                class="d-block w-100 img-fluid"
                alt="alimentacion"
              />
              <div class="carousel-caption d-none d-sm-block">
                <h3 class="fw-bold lh-1 text-dark">NUTRICIÓN</h3>
                <h5 class="m-0 text-dark">Te asesoramos en nutrición</h5>
              </div>
            </div>
            <div class="carousel-item">
              <img
                src="../assets/fisioterapia-1296.jpg"
                class="d-block w-100 img-fluid"
                alt="fisioterapia"
              />
              <div class="carousel-caption d-none d-sm-block">
                <h3 class="fw-bold lh-1 text-dark">FISIOTERAPIA</h3>
                <h5 class="m-0 text-dark">Ponemos a tu disposición a nuestros profesionales</h5>
              </div>
            </div>
          </div>
          <!-- contenedor botones izquierda y derecha carrousel -->
          <a
            class="carousel-control-prev"
            href="#carouselWithCaptions"
            role="button"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon bg-warning rounded-circle" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselWithCaptions"
            role="button"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon bg-warning rounded-circle" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </a>
        </div>
      </div>
    </div>

    <div class="third-section my-5">
      <div class="container row m-auto">
        <h2 class=" col-12 my-5 pb-3 text-center text-success border-bottom border-success">EQUIPO</h2>
        <div class="card col-xl-6 col-md-12 border-0">
          <img
            src="../assets/entrenadora-250.jpg"
            class="card-img-top p-1 rounded-circle m-auto"
            alt="card-img-top"
            style="width: 250px; height: 250px;"
          />
          <div class="card-body m-auto">
            <h5 class="card-title text-center border-bottom border-warning">Maria Bernat</h5>
            <p class="card-text text-center">Nutricionista</p>
          </div>
        </div>
        <div class="card col-xl-6 col-md-12 border-0">
          <img
            src="../assets/entrenador-250.jpg"
            class="card-img-top p-1 rounded-circle m-auto"
            alt="card-img-top"
            style="width: 250px; height: 250px;"
          />
          <div class="card-body m-auto">
            <h5 class="card-title text-center border-bottom border-warning">Jaume Bestard</h5>
            <p class="card-text text-center">Entrenador</p>
          </div>
        </div>
      </div>
    </div>

    <div class="fourth-section border-bottom">
      <h2>Galería de imágenes del local, entrenamientos, etc.</h2>
      <p>Esta sección no me convence ¿?</p>
    </div>

    <Contact />
  </main>
</template>

<script>
import Contact from "../components/Contact.vue";
export default {
  name: "Home",
  components: { Contact },
};
</script>
