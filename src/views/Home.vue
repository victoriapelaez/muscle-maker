<template>
  <main>
    <section class="first-section container col-xxl-8 px-4 py-5">
      <div class="row flex-lg-row-reverse align-items-center g-5">
        <div class="col-12 col-sm-12 col-md-12 col-lg-6">
          <img
            class="d-block mx-lg-auto img-fluid rounded shadow-sm"
            src="../assets/resources/hero-img-500h.webp"
            alt="Hero image"
            width="700"
            height="500"
          />
        </div>
        <div class="col-lg-6">
          <h1 class="display-5 fw-bold lh-1 mb-3 text-center">Muscle Maker</h1>
          <p class="fw-bold">
            La preparación física que necesitas para el deporte que practicas.
          </p>
          <p class="lead">
            Ven a entrenar con nosotros para mejorar tus cualidades como
            deportista y alcanzar los objetivos que siempre quisiste. Reserva tu
            primera sesión!
          </p>
          <div class="d-grid gap-2 d-lg-flex justify-content-lg-start">
            <button class="btn btn-danger px-4 me-md-2" type="button">
              Reservar
            </button>
            <button class="btn btn-outline-warning px-4" type="button">
              Registrarse
            </button>
          </div>
        </div>
      </div>
    </section>

    <div class="second-section py-5">
      <!-- contenedor carrousel -->
      <div class="container m-auto">
        <h2
          class="col-12 mb-5 pb-3 text-center text-success border-bottom border-success"
        >
          SERVICIOS
        </h2>
        <!-- contenedor barras inferiores carrousel -->
        <div
          id="carouselWithCaptions"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <ol class="carousel-indicators">
            <li
              data-bs-target="#carouselWithCaptions"
              data-bs-slide-to="0"
              class="active"
            ></li>
            <li
              data-bs-target="#carouselWithCaptions"
              data-bs-slide-to="1"
            ></li>
            <li
              data-bs-target="#carouselWithCaptions"
              data-bs-slide-to="2"
            ></li>
            <li
              data-bs-target="#carouselWithCaptions"
              data-bs-slide-to="3"
            ></li>
            <li
              data-bs-target="#carouselWithCaptions"
              data-bs-slide-to="4"
            ></li>
          </ol>
          <div class="carousel-inner">
            <!-- contenedores item-carrousel -->
            <div class="carousel-item active">
              <img
                src="../assets/resources/pesas-1296.webp"
                class="d-block w-100 img-fluid"
                alt="pesas"
                width="1300"
                height="850"
              />
              <div class="carousel-caption d-none d-sm-block">
                <h2 class="text-light bg-warning rounded">
                  ENTRENAMIENTOS PERSONALIZADOS
                </h2>
                <h5 class="m-0 text-light bg-success rounded">
                  Realizamos entrenamientos personalizados
                </h5>
              </div>
            </div>
            <div class="carousel-item">
              <img
                src="../assets/resources/estiramiento-1296.webp"
                class="d-block w-100 img-fluid"
                alt="estiramientos"
                width="1300"
                height="850"
              />
              <div class="carousel-caption d-none d-sm-block">
                <h2 class="text-light bg-warning rounded">
                  RUTINA DE EJERCICIOS EN CASA
                </h2>
                <h5 class="m-0 text-light bg-success rounded">
                  Creamos una rutina para que puedas realizar con seguridad
                  entrenamientos en casa
                </h5>
              </div>
            </div>
            <div class="carousel-item">
              <img
                src="../assets/resources/crossfit-1296.webp"
                class="d-block w-100 img-fluid"
                alt="crossfit"
                width="1300"
                height="850"
              />
              <div class="carousel-caption d-none d-sm-block">
                <h2 class="text-light bg-warning rounded">
                  PROFESIONALIZACIÓN
                </h2>
                <h5 class="m-0 text-light bg-success rounded">
                  Te preparamos para hacer la mejor versión de ti
                </h5>
              </div>
            </div>
            <div class="carousel-item">
              <img
                src="../assets/resources/alimentacion-1296.webp"
                class="d-block w-100 img-fluid"
                alt="alimentacion"
                width="1300"
                height="850"
              />
              <div class="carousel-caption d-none d-sm-block">
                <h2 class="text-light bg-warning rounded">NUTRICIÓN</h2>
                <h5 class="m-0 text-light bg-success rounded">
                  Te asesoramos en nutrición
                </h5>
              </div>
            </div>
            <div class="carousel-item">
              <img
                src="../assets/resources/fisioterapia-1296.webp"
                class="d-block w-100 img-fluid"
                alt="fisioterapia"
                width="1300"
                height="850"
              />
              <div class="carousel-caption d-none d-sm-block">
                <h2 class="text-light bg-warning rounded">FISIOTERAPIA</h2>
                <h5 class="m-0 text-light bg-success rounded">
                  Ponemos a tu disposición a nuestros profesionales
                </h5>
              </div>
            </div>
          </div>
          <!-- contenedor botones izquierda y derecha carrousel -->
          <a
            class="carousel-control-prev"
            href="#carouselWithCaptions"
            role="button"
            data-bs-slide="prev"
            aria-label="Show previous carousel image"
          >
            <span
              class="carousel-control-prev-icon bg-dark rounded-circle"
              aria-hidden="true"
            ></span>
            <span class="visually-hidden">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselWithCaptions"
            role="button"
            data-bs-slide="next"
            aria-label="Show next carousel image"
          >
            <span
              class="carousel-control-next-icon bg-dark rounded-circle"
              aria-hidden="true"
            ></span>
            <span class="visually-hidden">Next</span>
          </a>
        </div>
      </div>
    </div>

    <div class="third-section py-5">
      <Coachs />
    </div>

    <section class="fourth-section py-5 container col-xxl-8 px-4 py-5">
      <div class="row flex-lg-row-reverse align-items-center g-5 pt-5">
        <div class="col-lg-6">
          <h2
            class="col-12 mb-5 pb-3 text-center text-success border-bottom border-success"
          >
            PRIMERA SESIÓN GRATUITA
          </h2>
          <p>
            Ven a conocernos y entrena con nosotros sin ningún compromiso.
            Aprovecha esta oportunidad única y reserva tu primera sesión.
          </p>
          <router-link
            class="btn btn-outline-danger col-12"
            to="/sessions"
            aria-label="Go to the sessions page"
            >Reserva ya!</router-link
          >
        </div>
        <div class="col-12 col-sm-12 col-md-12 col-lg-6">
          <img
            class="d-block mx-auto img-fluid rounded shadow-sm"
            src="../assets/resources/workout-500h.webp"
            alt="card-horizontal-image"
            style="width: 540px; height: 300px"
            width="540"
            height="300"
          />
        </div>
      </div>
    </section>

    <div class="fifth-section py-5">
      <Contact />
    </div>
  </main>
</template>

<script>
import Contact from "../components/Contact.vue";
import Coachs from "../components/Coachs.vue";

export default {
  name: "Home",
  components: { Contact, Coachs },
};
</script>
