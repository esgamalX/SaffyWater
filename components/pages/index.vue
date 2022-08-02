<template>
 <div>
    <Cover/>
   <Mission />
    <Inspiration />
    <Technology />
    <AwardPartener />
    <Partners />
    <Awards />



 </div>
</template>

<script>
import Cover from '~/components/home/cover.vue'
import Mission from '~/components/home/mission.vue'
import Awards from '~/components/home/awards.vue'
import Inspiration from '~/components/home/inspiration.vue'
import Partners from '~/components/home/partners.vue'
import Technology from '~/components/home/technology.vue';
import AwardPartener from '~/components/home/award_partener.vue';

export default {
  name: 'IndexPage',
  layout:"default",
  components:{
    Cover,
    Mission,
    Awards,
    Inspiration,
    Partners,
    Technology,
    AwardPartener
  }
}
</script>
