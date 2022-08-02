<template>
  <v-app app >
    <Navigation />
    <v-main class="pt-100">

        <v-container fluid>
        <nuxt />

    </v-container>
    </v-main>

    <Footer />
  </v-app>
</template>

<script>
import Navigation from "~/components/layout/Navigation.vue";
import Footer from "~/components/layout/Footer.vue";
export default {
  name: "default",
  layout: "default",
  components: {
    Navigation,
    Footer,
  },
  data: () => ({
    fab: null,
    app:true,
  }),
};
</script>

