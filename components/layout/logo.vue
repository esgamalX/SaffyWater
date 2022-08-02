<template>
  <div class="logo">
  <h4>SaffyWater</h4>
    <img
    class="Saffy-logo"
    alt="Saffy Logo"
    :src="this.$config.baseUrl+'/logo.svg'"
  >
  </div>
</template>
<script>
export default {
  data(){
  return {

  }
},
}
</script>
<style>
.logo {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 40px;
}
.logo h4 {
  color: black;
  font-size: 14px;
  font-family: "Comfortaa";
}
.Saffy-logo {
  height: 80px;
  width: 80px;
}
</style>
