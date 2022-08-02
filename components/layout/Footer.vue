<template>
  <v-footer padless class="footer py-3">
    <div class="d-flex flex-column align-center justify-center footer">
      <div class="py-2 text-center">
        <h6>To learn more about us</h6>
      </div>
      <div class="footer-nav">
        <v-btn
          v-for="link in links"
          :key="link.text"
          text
          class="my-2 nav-links"
        >
          {{ link.text }}
        </v-btn>
      </div>
      <div class="py-2 text-center cover-footer">
        <img
          :src="this.$config.baseUrl+'/img/bg-footer.png'"

          class="footer-img"
        >
      </div>
    </div>
  </v-footer>
</template>
<script>
export default {
  data: () => ({
    links: [
      {
        text: "Who we are",
        link: "#",
      },
      {
        text: "Saffy technology",
        link: "#",
      },
      {
        text: "Our products",
        link: "#",
      },
      {
        text: "Contact us",
        link: "#",
      },
      {
        text: "Legal",
        link: "#",
      },
    ],



  }),
};
</script>

<style scoped>
.footer {
  width: 100%;
  height: 100%;
}
.footer .nav-links ,h6 {
  font-size: var(--nav-font-size);
  color: var(--nav-color);
}

.footer .cover-footer .footer-img {
  text-align: center;
    max-height:100px;
          max-width:100px;

}
</style>
