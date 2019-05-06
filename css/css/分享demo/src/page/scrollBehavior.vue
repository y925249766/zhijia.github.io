<template>
  <div class="container">
    <header id="header"><h1 style="text-align: center;margin:20px">我是头部</h1></header>
    <p class="center">scroll-behavior default</p>
    <div class="box1">
      <div class="list" id="one">1</div>
      <div class="list" id="two">2</div>
      <div class="list" id="three">3</div>
      <div class="list" id="four">4</div>
    </div>
    <div class="link">
      <a class="click" href="#one">1</a>
      <a class="click" href="#two">2</a>
      <a class="click" href="#three">3</a>
      <a class="click" href="#four">4</a>
    </div>
    <p class="center">scroll-behavior smooth</p>
    <div class="box3">
      <div class="list" id="1">1</div>
      <div class="list" id="2">2</div>
      <div class="list" id="3">3</div>
      <div class="list" id="4">4</div>
    </div>
    <div class="link">
      <a class="click" href="#1">1</a>
      <a class="click" href="#2">2</a>
      <a class="click" href="#3">3</a>
      <a class="click" href="#4">4</a>
    </div>
    <p class="center">input模拟</p>
    <div class="box2">
      <div class="list"><input id="one1" readonly>1</div>
      <div class="list"><input id="two1" readonly>2</div>
      <div class="list"><input id="three1" readonly>3</div>
      <div class="list"><input id="four1" readonly>4</div>
    </div>
    <div class="link">
      <label class="click" for="one1">1</label>
      <label class="click" for="two1">2</label>
      <label class="click" for="three1">3</label>
      <label class="click" for="four1">4</label>
    </div>
    <a href="#box1">我跳到box1</a>
    <a href="#box2" name="#box2">我跳到box2</a>

    <div id="box1">box1</div>
    <div id="box2">box2</div>

    <el-button size="mini" style="position: fixed;bottom: 80px;left: 80px" type="primary">
      <a href="#header" style="color: #fff">back to top</a>
    </el-button>
  </div>
</template>

<script>
  export default {
    name: 'scrollBehavior',
    components: {
    },
    data() {
      return {

      }
    },
    watch: {
    },
    created() {
    },
    mounted() {

    },
    methods: {

    }
  }
</script>
<style lang="less">
  /**{*/
    /*scroll-behavior: smooth;*/
  /*}*/
  .container{
    height: 1800px;
    /*scroll-behavior: smooth;*/
    /*overflow: hidden;*/
    .center{
      margin-top: 20px;
    }
  }
  .box1,.box2,.box3{
    width:200px;
    height:100px;
    border:1px solid #ddd;
    overflow:hidden;
  }
  .box3,.box2{
    scroll-behavior: smooth;
  }
  .box2,.box2 .list{
    height: 200px;
  }
  #box1,#box2{
    width: 200px;
    height: 100px;
  }
  #box1{
    background: red;
  }
  #box2{
    background: yellow;
  }
  .list{width:200px; height:100px; line-height:100px; background:#ddd; font-size:80px; text-align:center;}
  .link{width:200px; padding-top:10px; text-align:right;}
  .click{display:inline-block; width:20px; height:20px; line-height:20px; border:1px solid #ccc; background:#f7f7f7; color:#333; font-size:12px; font-weight:bold; text-align:center; text-decoration:none;}
  .click:hover{background:#eee; color:#345;}

  .list {
    height: 100%;
    background: #ddd;
    text-align: center;
    position: relative;
  }
  .list > input {
    position: absolute; top:0;
    height: 100%; width: 1px;
    border:0; padding: 0; margin: 0;
    clip: rect(0 0 0 0);
  }
</style>
