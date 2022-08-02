<template>
  <section class="technology py-100">
    <v-row justify="center" align="end" class="py-0">
        <v-col cols="2">
        <div class="number-heading">3</div>
      </v-col>
      <v-col cols="3">
        <h3>SaffyWater Technology</h3>
        <p class="mt-5">
          To purify water, Saffy conceived a bio membrane consisting of 3 major layers.
          Each layer takes care of a certain type of pollutant
        </p>
      </v-col>

    </v-row>
    <v-row justify="center" align="center" class="py-0">
      <v-col cols="3">
        <p>
          The system prevents contaminations both inside and outside the system, without
          altering the natural properties of drinking water
        </p>
      </v-col>
      <v-col cols="2" >
        <img class="mr-auto img150" :src='this.$config.baseUrl +"/img/technology-right.svg"'>
      </v-col>
    </v-row>
    <v-row justify="center" align="center" class="py-0">
      <v-col cols="2">
        <img :src='this.$config.baseUrl +"/img/technology-left.svg"' class="ml-auto img150" >
      </v-col>
      <v-col cols="3">
        <p>
          Saffy bio membrane is self-sufficient and can be scaled from a personal water
          bottle up to large industrial or community-owned units
        </p>
      </v-col>
    </v-row>

    <v-row justify="center" align="center" class="py-0">
      <img class="technology-cover" :src='this.$config.baseUrl +"/img/saffy_products.svg"'>
    </v-row>
  </section>
</template>
<script>
export default {
  name: "TechnolgoySection",
  data(){
  return {
    ///
  }
},
};
</script>
<style scoped>
.number-heading {
 text-align: right;

}
.technology .technology-cover{
  width:100%;
   height:100%;
}

.technology .img100 {
  max-height:100px;
          max-width:100px;
}
.technology .img150 {
  max-height:150px;
          max-width:150px;
}
</style>
