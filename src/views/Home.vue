<template>
  <div>
    <div class="bg">
      <img class="bg-big-blue-block" src="../assets/background/big-blue-block.svg" />
      <img class="bg-big-orange-block" src="../assets/background/big-orange-block.svg" />
    </div>
    <div class="app-content-wrapper">
      <div class = "decoration-up"></div>
      <h3 class = "app-text">{{text}}CSAcademy</h3>
      <div class = "decoration-down"></div>
    <div class="app-content">
      <h2 class="app-title">{{title}}SEU</h2>
      <p v-if="desc" class="app-desc">{{desc}}</p>
      <div v-else style="margin-top:20px;"></div>
      <el-row>
        <el-input class = "true-input" placeholder="请输入内容" prefix-icon="el-icon-search" v-model="input" clearable></el-input>
        <el-button class = "true-button" slot="append"  icon="el-icon-search" @click="gotoSearch"  ></el-button>
      </el-row>
    </div>
    </div>
  </div>
</template>

<script>
import { Button, Input } from "element-ui";
export default {
  name: "Home",
  components: {
    "el-button": Button,
    "el-input" : Input,
  },
  data() {
    return {
      input: ''
    }
  },
  props: {"title":{type:String, required:false}, "desc":{type:String, default:''}, "text":{type:String, default:''},"isHome":{type:Boolean, default:false}},
  methods: {
    gotoSearch() {
      this.$router.replace('/searchresult');
    }
  },
};
</script>

<style lang="less" scoped>
.bg {
  z-index: -10;
  position: fixed;
  width: 100%;
  .bg-big-blue-block {
    width: 100%;
    position: fixed;
    left: 0;
    animation: blue-move-in 1s;
  }
  .bg-big-orange-block {
    width: 60%;
    position: fixed;
    bottom: 0;
    right: 0;
    animation: orange-move-in 2s;
  }
  @keyframes blue-move-in {
    from {
      top: -100px;
    }
    to {
      top: 0px;
    }
  }
  @keyframes orange-move-in {
    from {
      right: -80px;
    }
    to {
      right: 0;
    }
  }
}

.app-content-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    .decoration-up {
      animation: line-extract 1s;
      height: 2px; 
      font-size:24px; 
      width: 7em; 
      background:#fff;
      margin-top: 200px;
    }
    .app-text {
      color: #ffb11b;
      margin-top: 20px;
    }
    .decoration-down {
      animation: line-extract 2s;
      height: 2px; 
      font-size:24px; 
      width: 7em; 
      background:#fff;
      margin:0 auto;
    }
    @keyframes line-extract {
      from {
        width: 0;
      }
      to {
        width: 7em;
      }
    }
}

.app-content {
  position: absolute;
  width: 100%;
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 120px;
  animation: appContentSlideIn 1s;
  .app-title {
    color: #fff;
    margin-bottom: 0;
    margin-left: 20px;
  }
  .app-desc {
    color: #fff;
    margin-top: 10px;
    margin-left: 20px;
    margin-right: 20px;
  }
  .true-input {
    margin-top : 120px;
    width : 600px;
  }
  .true-button {
    color: #214748;
    margin: 0px auto;
  }
  @media screen and (min-width: 600px) {
    .panel {
      margin: 0 40px;
      margin-top: 20px;
    }
    .app-title {
      margin-left: 40px;
      margin-right: 40px;
      margin-top: 40px;
    }
    .app-desc {
      margin-left: 40px;
    }
  }
}
@keyframes appContentSlideIn {
    from {
        opacity: 0;
        top:90px;
    }
    to {
        opacity: 1;
        top: 120px;
    }
}
</style>