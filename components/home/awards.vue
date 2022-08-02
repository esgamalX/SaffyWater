<template>
<div class="awards px-16 py-100">
    <v-row>
    <v-col cols="12" class="text-center">
      <h3>Awards & Recognition</h3>
    </v-col>
  </v-row>
    <v-row justify="center" align="center">
    <v-col cols="2">
      <img  :src='this.$config.baseUrl +"/img/other/MIT.png"'>
    </v-col>
    <v-col cols="2">
      <img :src='this.$config.baseUrl +"/img/other/la french tech.jpg"'>
    </v-col>
    <v-col cols="2">
      <img  :src='this.$config.baseUrl +"/img/other/energy globe.jpg"'>
    </v-col>
    <v-col cols="2">
      <img :src='this.$config.baseUrl +"/img/other/Startup power.png"'>
    </v-col>
  </v-row>
</div>
</template>

<script>
export default {
  name: 'Awards',
  data(){
  return {
    ////
  }
},
}
</script>
<style scoped>
.awards img {
  width: 100%;
  height: 100%;
}
</style>


