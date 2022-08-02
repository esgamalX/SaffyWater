<template>
  <div class="cover">
    <div class="cover-content">
      <v-row>
        <v-col cols="12">
          <div class="cover-overlay"></div>
          <div class="text-content">
            <h1 class="py-4">SaffyWater</h1>
          <h3 class="py-2">The world first biological solution for water purification.</h3>

          </div>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "CoverSection",
  data() {
    return {
      slides: [
        {
          heading: "SaffyWater",
          text: "The world first biological solution for water purification",
          img: "/img/slides/bg-1.svg",
        },
      ],
    };
  },
};
</script>
<style>
.cover {
  background: #fff url(/Saffy/img/bg-main.svg) no-repeat center bottom;
  /* background-size: cover; */
  /* background-attachment: fixed; */
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: table;
  position: relative;
  text-align: center;
}

.cover-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #fff;
  opacity: 0.1;
}

.cover-content {
  display: table-cell;
  vertical-align: middle;
  text-align: center;
  -webkit-transform: translateY(-2.1rem);
  -ms-transform: translateY(-2.1rem);
  transform: translateY(-2.1rem);
}
.cover-content  .text-content{
      position: relative;
    top: -60px;
}

.cover-content h3 {

  text-transform: capitalize;
  letter-spacing: 0.3rem;

}


/**
 * responsive:
 * cover
 * ---------------------------------------------------------------
 */
/* @media only screen and (max-width: 1024px) {
  .cover-content h1 {
    font-size: 7.6rem;
  }
  .cover-social {
    font-size: 3rem;
  }
  .cover-social li {
    margin: 0 15px;
  }
}
@media only screen and (max-width: 768px) {
  cover {
    min-height: 660px;
  }
  .cover-content h1 {
    font-size: 5.2rem;
  }
  .cover-content h5 {
    font-size: 1.8rem;
  }
  .cover-content .cover-position {
    font-size: 1.3rem;
  }
  .cover-social {
    font-size: 2.5rem;
  }
  .cover-social li {
    margin: 0 10px;
  }
}
@media only screen and (max-width: 600px) {
  .cover {
    min-height: 600px;
  }
  .cover-content h1 {
    font-size: 4.6rem;
    margin-bottom: 0.6rem;
  }
  .cover-content h5 {
    font-size: 1.5rem;
    margin-bottom: 0.3rem;
    letter-spacing: 0.2rem;
  }
  .cover-content .cover-position {
    font-size: 1.2rem;
  }
  .cover-content .cover-position span {
    padding: 0 0.6rem;
  }
  .cover-content .cover-position span::before,
  .cover-content .cover-position span::after {
    display: none !important;
  }
  .cover-social {
    font-size: 2.4rem;
  }
} */
</style>
