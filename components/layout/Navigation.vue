<template>
  <div>
    <v-app-bar
      app
      absolute
       color="white"
      :flat="flat"
      dark
      :class="{ expand: flat }"
    >
      <v-toolbar-title>

          <logo />

      </v-toolbar-title>
      <v-spacer />
      <v-app-bar-nav-icon
        @click.stop="drawer = !drawer"
        class="mr-4"
        color="primary"
        v-if="isXs"
      />
      <div v-else >
        <nuxt-link v-for="(item, i) in items"
          :key="i"
        :to="item.link"
        router
        exact
        class="mx-2 nav-links"
        color="primary"
        small
        >
          <span class="mr-2">{{item.name}}</span>
        </nuxt-link>
      </div>
    </v-app-bar>
  </div>
</template>


<script>
import logo from '~/components/layout/logo.vue'
export default {
  components:{
    logo
  },
  data: () => ({
    drawer: null,
    isXs: false,
    color: "#efefef",
    flat: true,
   items: [
      // {name:"Home", link:"/"},
      // {name:"The Mission", link:"/Mission"},
      // {name:"The Inspiration", link:"/Inspiration"},
      // {name:"Saffy Technology", link:"/Saffy-Technology"},
      // {name:"Our story", link:"/ourStory"},
      // {name:"News", link:"/News"},
      // {name:"Contact", link:"/Contact-US"},
      {name:"Home", link:"#"},
      {name:"Mission", link:"#"},
      {name:"Inspiration", link:"#"},
      {name:"Saffy Technology", link:"#"},
      {name:"Our story", link:"#"},
      {name:"News", link:"#"},
      {name:"Contact", link:"#"},
    ],
  }),
  methods: {
    onResize() {
      this.isXs = window.innerWidth < 850;
    },
  },

  watch: {
    isXs(value) {
      if (!value) {
        if (this.drawer) {
          this.drawer = false;
        }
      }
    },
  },
  mounted() {
    this.onResize();
    window.addEventListener("resize", this.onResize, { passive: true });
  },
};
</script>

<style scoped>
.v-toolbar {
  transition: 0.6s;
}

.expand {
  height: 80px !important;
  padding-top: 10px;
}
.nav-links {
  text-decoration: none;
      font-size: 0.7rem !important;
        color: var(--nav-color);
}
</style>
