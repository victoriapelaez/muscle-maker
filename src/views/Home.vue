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
          <p class="fw-bold">
            La preparación física que necesitas para el deporte que practicas.
          </p>
          <p class="lead">
            Ven a entrenar con nosotros para mejorar tus cualidades como
            deportista y alcanzar los objetivos que siempre quisiste. Reserva tu
            primera sesión!
          </p>
          <div class="d-grid gap-2 d-md-flex justify-content-md-start">
            <button class="btn btn-danger btn-lg px-4 me-md-2" type="button">
              Reservar
            </button>
            <button class="btn btn-outline-warning btn-lg px-4" type="button">
              Registrarse
            </button>
          </div>
        </div>
      </div>
    </section>

    <div class="second-section border-bottom">
      <h2>Carousel</h2>
      <p>Qué hacemos, servicios que se ofrecemos</p>
    </div>
    <div class="third-section border-bottom">
      <h2>About (Quienes somos)</h2>
      <p>
        Podemos poner aquí unas cards con las personas que trabajan en el local
      </p>
      <p>En la vista About ya pondremos una descripción más detallada</p>
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
