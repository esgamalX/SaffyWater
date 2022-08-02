<template>
<div class="partner px-16 py-100">
    <v-row>
    <v-col cols="12" class="text-center">
      <h3>Our Partners</h3>
    </v-col>
  </v-row>
    <v-row justify="center" align="center">
    <v-col cols="2">
      <img  :src='this.$config.baseUrl +"/img/other/le village.jpg"'>
    </v-col>
    <v-col cols="2">
      <img :src='this.$config.baseUrl +"/img/other/Conscious venture lab.png"'>
    </v-col>
    <v-col cols="2">
      <img  :src='this.$config.baseUrl +"/img/other/Design terminal.png"'>
    </v-col>
    <v-col cols="2">
      <img :src='this.$config.baseUrl +"/img/other/the camp.jpg"'>

    </v-col>
  </v-row>
</div>
</template>

<script>
export default {
  name: 'partner',
  data(){
  return {

  }
},
}
</script>
<style scoped>
.partner img {
  width: 100%;
  height: 100%;
}
</style>
