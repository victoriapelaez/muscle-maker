<template>
  <div class="first-section border-bottom">
    <h1>Hero</h1>
    <p>
      Sección de bienvenida ¿Con una imagen de fondo? ¿Fondo blanco con algún
      dibujo y una breve descripción?
    </p>
  </div>
  <div class="second-section border-bottom">
    <h2>Carousel</h2>
    <p>Qué hacemos, servicios que se afrecemos</p>
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
</template>

<script>
import Contact from "../components/Contact.vue";
export default {
  name: "Home",
  components: { Contact },
};
</script>
