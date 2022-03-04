<template>
  <div class="container mw-75">
    <section>
      <h2
        class="mb-5 pb-3 text-center text-success border-bottom border-success"
      >
        CONTÁCTANOS
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
                    required
                    aria-required="true"
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
                    required
                    aria-required="true"
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
                    required
                    aria-required="true"
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
                    required
                    aria-required="true"
                  ></textarea>
                  <label for="message"></label>
                </div>
              </div>
            </div>
            <div class="text-center text-md-left">
              <a href class="btn btn-success col-12 mt-3" onclick="#">Enviar</a>
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
