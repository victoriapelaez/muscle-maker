<template>
  <div class="container mw-75">
    <section class="mx-5">
      <h2 class="h1-responsive font-weight-bold text-center my-4 text-success">
        Contáctanos
      </h2>
      <p class="text-center w-responsive mx-auto mb-5">
        ¿Tiene usted alguna pregunta? Por favor no dude en contactar con
        nosotros directamente. Nuestro equipo se comunicará con usted en
        cuestión de horas para ayudarle.
      </p>
      <div class="row">
        <div class="col-md-12">
          <form
            id="contact-form"
            name="contact-form"
            action="mail.php"
            method="POST"
          >
            <div class="row">
              <div class="col-md-6">
                <div class="md-form mb-0">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    class="form-control"
                    placeholder="Nombre"
                  />
                  <label for="name" class></label>
                </div>
              </div>
              <div class="col-md-6">
                <div class="md-form mb-0">
                  <input
                    type="text"
                    id="email"
                    name="email"
                    class="form-control"
                    placeholder="Email"
                  />
                  <label for="email" class></label>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <div class="md-form mb-0">
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    class="form-control"
                    placeholder="Asunto"
                  />
                  <label for="subject" class></label>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <div class="md-form">
                  <textarea
                    type="text"
                    id="message"
                    name="message"
                    rows="2"
                    class="form-control md-textarea"
                    placeholder="Tu mensaje"
                  ></textarea>
                  <label for="message"></label>
                </div>
              </div>
            </div>
            <div class="text-center text-md-left">
              <a
                class="btn btn-success mt-3"
                onclick="document.getElementById('contact-form').submit();"
                >Enviar</a
              >
            </div>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Contact",
  props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
