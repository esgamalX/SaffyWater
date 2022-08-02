<template>
  <div class="story py-100" >
    <v-row justify="center" align="center"  no-gutters>
      <v-col cols="2">
        <img
          class="story-img img150"
          :src='this.$config.baseUrl +"/img/story-top.svg"'
        >
      </v-col>
    </v-row>
    <v-row no-gutters justify="center" align="center" >
      <v-col cols="1">
        <div class="number-heading">4</div>
      </v-col>
      <v-col cols="1">
       <img
          class="story-img img100"
          :src='this.$config.baseUrl +"/img/story-mid.png"'

        >
      </v-col>
    </v-row>
    <v-row  no-gutters justify="center" align="center">
      <v-col cols="1">
        <img
          class="story-img img100"
          :src='this.$config.baseUrl +"/img/story-head.png"'

        >
      </v-col>
      <v-col cols="3">
        <h3>Our Story</h3>
      </v-col>
    </v-row>
    <v-row  justify="center" align="center">
      <v-col cols="4">
             <p class="ml-2 px-6">
              Sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
             </p>

      </v-col>
       </v-row>
       <v-row  no-gutters justify="center" align="center">

      <v-col cols="1">
               <img
          class="story-img img100"
          :src='this.$config.baseUrl +"/img/story-bottom.png"'

        >

      </v-col>
       </v-row>


  </div>
</template>
<script>
export default {
  name: "StorySection",
  data(){
  return {

  }
},
};
</script>
<style scoped>
.story .img100 {
  max-height:100px;
          max-width:100px;
}
.story .img150 {
  max-height:150px;
          max-width:150px;
}
</style>
