<template>
  <section class="inspiration p-12 py-100">
    <v-row justify="center" align="end" class="py-0">
      <v-col cols="3">
        <h3>SaffyWater inspiration</h3>
      </v-col>
    </v-row>
    <div class="number-heading">2</div>
    <v-row justify="center" align="center">
      <v-col cols="6">
        <div class="sub-heading">
          <p>
            Inspired by Nature to create the most efficient and sustainable water purification technology
          </p>
          <p>SaffyWater technology is the only technology that fully clean without demineralize </p>
          <p>SaffyWater technology is the best and most efficient on Heavy metals</p>
          <p>Gets rid of pathogens, heavy metals & other pollutants</p>
          <p>Eliminates both liquid industrial & agricultural waste</p>
          <p>Scalable from a personal use model to a community model</p>

          <div class="overlays"></div>
        </div>
      </v-col>
    </v-row>
  </section>
</template>

<script>
export default {
  name: "InspirationSection",
};
</script>


<style scoped>
.inspiration {
  position: relative;
  width: 100%;
  height: 100%;
}
.overlays {
  background-image: url("/Saffy/img/inspire.svg");
  background-repeat: no-repeat;
  background-position: center center;
  /* background-color: #ccc; */
  width: 100%;
  height: 500px;
  z-index: -1;
  position: absolute;
  top: 0;
      right: 2%;
    transform: rotate(-4deg);
}

.sub-heading {
  height: 100%;
  position: relative;
  z-index: 1;
      padding-top: 15px;

}
.number-heading {
  position: absolute;
  z-index: 0;
  top: 4%;
      left: 55%;
}

.sub-heading p {
  margin: 0;
  text-align: center;
  padding: 20px 140px;
  line-height: 32px;
}
</style>
