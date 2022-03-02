<template>
  <Header />
  <router-view />
  <a
    id="back-to-top"
    href="#"
    class="btn btn-light link-success btn-lg back-to-top rounded-circle"
    role="button"
  >
    <i class="fas fa-chevron-up"></i>
  </a>
  <Footer />
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
};
// Importamos JQuery
const $ = require("jquery");
// Lo declaramos globalmente
window.$ = $;

$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
      $("#back-to-top").fadeIn();
    } else {
      $("#back-to-top").fadeOut();
    }
  });
  // scroll body to 0px on click
  $("#back-to-top").click(function () {
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      400
    );
    return false;
  });
});
</script>

<style lang="scss">
@import "./styles/_custom.scss";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.back-to-top {
  position: fixed;
  bottom: 350px;
  right: 35px;
  display: none;
}
</style>
