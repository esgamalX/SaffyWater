<template>
 <div>
    <Cover/>
   <Mission />
    <Inspiration />
    <Technology />
    <Story />
    <AwardPartner />
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
import AwardPartner from '~/components/home/award_partener.vue';
import Story from '~/components/home/story.vue';

export default {
  name: 'IndexPage',
  layout:"default",
        head() {
    return {
      titleTemplate: `%s - Home`,
    };
  },
  components:{
    Cover,
    Mission,
    Awards,
    Inspiration,
    Partners,
    Technology,
    AwardPartner,
    Story
  },
data(){
  return {

  }
},
  mounted(){
    console.log(this.baseUrl);
  }
}
</script>
