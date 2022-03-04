<template>
  <div class="footer border-bottom bg-light">
    <footer>
      <div class="container mw-100 mt-5 text-center">
        <div class="row">
          <!-- footer container contact -->
          <div class="card-footer col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm">
            <h4 class="my-3 text-section text-success">Muscle Maker</h4>
            <p>San Francisco 4, 07013, PALMA</p>
            <p>+ 34 456 890 256</p>
            <p>contacto@musclemaker.com</p>
          </div>
          <!-- footer container studio hours -->
          <div
            class="card-footer col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-12"
          >
            <h4 class="my-3 text-section text-success">Horario del Centro</h4>
            <p>Lunes a Viernes: 8h-20h.</p>
            <p>Sábados: 10h-17h.</p>
            <p>Domingos: 9h-12h.</p>
          </div>
          <!-- footer container social -->
          <div
            class="card-footer col-xxl-2 col-xl-2 col-lg-4 col-md-6 col-sm-12"
          >
            <h4 class="my-3 text-section text-success">Redes Sociales</h4>
            <ul class="footer-list p-0">
              <li class="list-unstyled">
                <a href="#" target="_blank" class="text-decoration-none">
                  <img
                    src="https://img.icons8.com/color/30/000000/facebook-circled--v5.png"
                    alt="facebook"
                  />
                </a>
              </li>
              <li class="list-unstyled">
                <a
                  href="#"
                  target="_blank"
                  class="text-muted text-decoration-none"
                >
                  <img
                    src="https://img.icons8.com/fluency/30/000000/instagram-new.png"
                    alt="instagram"
                  />
                </a>
              </li>
              <li class="list-unstyled">
                <a
                  href="#"
                  target="_blank"
                  class="text-muted text-decoration-none"
                >
                  <img
                    src="https://img.icons8.com/color/30/000000/google-logo.png"
                    alt="instagram"
                  />
                </a>
              </li>
            </ul>
          </div>

          <!-- footer contenedor navigation newsletter -->
          <div
            class="card-footer col-xxl-4 col-xl-4 col-lg-12 col-md-6 col-sm-12"
          >
            <h4 class="mt-3 text-section text-success">
              Suscríbete a las novedades
            </h4>
            <form
              action="index.html"
              method="post"
              id="newsletter"
              class="mx-5"
            >
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label"></label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Introduce tu dirección de correo"
                  onblur="javascript:if(this.value==''){this.value=this.defaultValue;}"
                  onfocus="javascript:if(this.value==this.defaultValue){this.value='';}"
                />
              </div>
              <button type="submit" class="btn btn-success">Enviar</button>
            </form>
          </div>
        </div>
      </div>
    </footer>
    <div class="d-flex justify-content-center py-3 border-top">
      <p>© 2022 Muscle Maker. Todos los derechos reservados.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>
