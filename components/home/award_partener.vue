<template>
  <div class="award_partner py-100" >
    <v-row justify="center" align="center" class="py-0">
      <v-col cols="1">
        <div class="number-heading">5</div>
      </v-col>
      <v-col cols="3">
        <h3>Awards & partners</h3>
      </v-col>
    </v-row>
    <v-row justify="center" align="start" no-gutters >
      <v-col cols="5">
        <div class="award_partner-contenet">
             <p class="ml-16 px-6">They approve our technology and collaborate with us</p>
        <img
          class="award_partner-img"
          :src="this.$config.baseUrl+'/img/award_partener.png'"

        >
        </div>
      </v-col>
    </v-row>
  </div>
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
.award_partner .award_partner-contenet{
display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

}
.award_partner .award_partner-contenet .award_partner-img {

    margin: -50px 50px 0 0;
}
.award_partner img {
  max-height:200px;
          max-width:200px;
}
</style>
