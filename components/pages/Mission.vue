<template >
  <section class="px-10 py-17">
    <v-container>
      <v-row justify="center">
        <v-col cols="2">
          <div class="heading">
            <div class="number-heading">2</div>
            <h1 class="abs-view">The Mission</h1>
          </div>
        </v-col>
      </v-row>
      <v-row justify="center" class="py-16">
        <v-col cols="10">
          <v-row>
            <v-col cols="6">
              <p>
                Around a third of the world’s population drinks water from
                groundwater resources. About 10% i.e. 300 million people
                approximately obtain water from groundwater resources that are
                heavily polluted with arsenic or fluoride
              </p>
              <p>
                According to the WHO, Arsenic contamination of groundwater is a
                widespread issue across the globe. About 140 million people in
                50 coutries in South Asia, Africa, and the USA have been
                drinking water containing arsenic at levels above the WHO
                provisional guideline value of 10 μg/L.
              </p>
              <p>
                With no proper access to adequate treatment and recycling
                systems, 1.8 Billion people are subjected to contaminated
                drinking water with faecal matter risking dangerous diseases
                like Cholera, Dysentery, Typhoid and Polio. The more we realized
                the inequality of distribution of clean water, the higher was
                our drive to make a big change in the current system.
              </p>
              <p>
                The water crisis around the world and heavy metal contamination
                of water has enabled the team at SaffyWater to work on a
                solution based product keeping in mind these problems we’ve
                encountered in our research:
              </p>
            </v-col>

            <v-col cols="6">
              <p>
                Around a third of the world’s population drinks water from
                groundwater resources. About 10% i.e. 300 million people
                approximately obtain water from groundwater resources that are
                heavily polluted with arsenic or fluoride
              </p>
              <p>
                According to the WHO, Arsenic contamination of groundwater is a
                widespread issue across the globe. About 140 million people in
                50 coutries in South Asia, Africa, and the USA have been
                drinking water containing arsenic at levels above the WHO
                provisional guideline value of 10 μg/L.
              </p>
              <p>
                With no proper access to adequate treatment and recycling
                systems, 1.8 Billion people are subjected to contaminated
                drinking water with faecal matter risking dangerous diseases
                like Cholera, Dysentery, Typhoid and Polio. The more we realized
                the inequality of distribution of clean water, the higher was
                our drive to make a big change in the current system.
              </p>
              <p>
                The water crisis around the world and heavy metal contamination
                of water has enabled the team at SaffyWater to work on a
                solution based product keeping in mind these problems we’ve
                encountered in our research:
              </p>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  name: "InspirePage",
};
</script>
<style scoped>

/**https://www.w3schools.com/w3css/tryit.asp?filename=tryw3css_examples_newspaper&stacked=h */
.overlay {
  background-image: url(/rotate-bg-main.svg);
  /* background-repeat: no-repeat; */
  background-position: center;
  text-transform: uppercase;

  background-size: 100% 70%;
  background-color: #efefef;
}

.mission-card {
  border: 2px solid #000;
  width: 100;
}
.heading {
  position: relative;
}
.number-heading {
  font-size: 250px;
  line-height: 250px;

  color: #000;
  z-index: 11111111;
}
.abs-view {
  position: absolute;
  top: 40%;
  left: 0;
}
</style>
