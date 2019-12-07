<template>
  <background title = "">
    <div class = "app-text">开发中，请稍候……</div>
      <img class = "app-picture" src = '../assets/faxian.svg'/>
  </background>
</template>

<script>
import Background from '../components/Background.vue'
export default {
  name : "SearchResult" ,
  components : {
    background : Background
  }, 
  methods :{
    gotoHome(){
      this.$router.replace('/home');
    }
  }
}
</script>

<style lang="less" scoped>
.app-text {
  width: 100%;
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 120px;
  animation: appTextFadeIn 1s;
  .true-button {
    margin: 0px auto;
  }
  .app-picture {
    width: 130%;
    height: 130%;
  }
}
</style>