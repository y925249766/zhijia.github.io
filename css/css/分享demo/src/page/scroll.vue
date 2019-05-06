<template>
  <div class="wrapper" id="wrapper">
    <h1 class="title center">Customize the Browser's Scrollbar with CSS</h1>
    <div>
      <div class="scrollbar" id="style-default">
        <div class="force-overflow"></div>
      </div>
    </div>
    <div class="scrollbar" id="style-1">
      <div class="force-overflow"></div>
    </div>
    <div class="scrollbar" id="style-2">
      <div class="force-overflow"></div>
    </div>
    <div class="scrollbar" id="style-3">
      <div class="force-overflow"></div>
    </div>
    <div class="scrollbar" id="style-4">
      <div class="force-overflow"></div>
    </div>
    <div class="scrollbar" id="style-5">
      <div class="force-overflow"></div>
    </div>
    <div class="scrollbar" id="style-6">
      <div class="force-overflow"></div>
    </div>
    <div class="scrollbar" id="style-7">
      <div class="force-overflow"></div>
    </div>
    <div class="scrollbar" id="style-8">
      <div class="force-overflow"></div>
    </div>
    <div class="scrollbar" id="style-9">
      <div class="force-overflow"></div>
    </div>
    <div class="scrollbar" id="style-10">
      <div class="force-overflow"></div>
    </div>
    <div class="scrollbar" id="style-11">
      <div class="force-overflow"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'scroll',
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
      document.getElementById('wrapper').onclick = function (e) {
        console.log('e', e)
      }
    },
    methods: {

    }
  }
</script>
<style lang="less">
  .wrapper{
    width: 100%;
  }
  .title{
    margin: 18px;
  }
  .scrollbar {
    margin-left: 22px;
    float: left;
    height: 300px;
    width: 120px;
    background: #F5F5F5;
    resize: both;
    overflow-y: scroll;
    margin-bottom: 25px;
    scrollbar-arrow-color: darkslategray;
  }

  .force-overflow {
    min-height: 450px;
  }

  ::-webkit-scrollbar-corner{
    /*background: url("./../assets/images/corner.png");*/
    background-size: cover;
  }

  ::-webkit-scrollbar-button:vertical:single-button:start {
    width: 24px;
    background: url("./../assets/images/arrow-up.png") no-repeat;
    background-size: contain;
    cursor: pointer;
  }
  ::-webkit-scrollbar-button:vertical:single-button:end {
    width: 10px;
    background: url("./../assets/images/arrow-down.png") no-repeat;
    background-size: contain;
    cursor: pointer;
  }
  #style-11::-webkit-scrollbar-button:vertical:single-button:start {
    width: 10px;
    background: url("./../assets/images/arrow-up.png") 2px 0px no-repeat;
    background-size: contain;
    cursor: pointer;
  }
  #style-11::-webkit-scrollbar-button:vertical:single-button:end {
    width: 10px;
    background: url("./../assets/images/arrow-down.png") 2px 0px no-repeat;
    background-size: contain;
    cursor: pointer;
  }
  #style-1::-webkit-scrollbar,
  #style-2::-webkit-scrollbar {
    width: 12px;
    background-color: #F5F5F5;
  }

  #style-4::-webkit-scrollbar,
  #style-5::-webkit-scrollbar,
  #style-6::-webkit-scrollbar,
  #style-7::-webkit-scrollbar,
  #style-8::-webkit-scrollbar,
  #style-9::-webkit-scrollbar,
  #style-10::-webkit-scrollbar {
    width: 12px;
    height: 12px;
    background-color: #F5F5F5;
  }
  #style-11::-webkit-scrollbar {
    width: 18px;
    height: 18px;
  }

  /**  STYLE 1 */
  #style-1::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
    background-color: #555;
  }

  #style-1::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    border-radius: 10px;
    background-color: #F5F5F5;
  }

  /**  STYLE 2 */
  #style-2::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
    background-color: #D62929;
  }

  #style-2::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    border-radius: 10px;
    background-color: #F5F5F5;
  }

  /**  STYLE 3 */
  #style-3::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    background-color: #F5F5F5;
  }

  #style-3::-webkit-scrollbar {
    width: 6px;
    background-color: #F5F5F5;
  }

  #style-3::-webkit-scrollbar-thumb {
    background-color: #000000;
  }

  /**  STYLE 4 */
  #style-4::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    background-color: #F5F5F5;
  }

  #style-4::-webkit-scrollbar-thumb {
    background-color: #000000;
    border: 2px solid #555555;
  }

  /**  STYLE 5 */
  #style-5::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    background-color: #F5F5F5;
  }

  #style-5::-webkit-scrollbar-thumb {
    background-color: #0ae;
    /*background-image: -webkit-gradient(linear, 0 0, 0 100%,*/
    /*color-stop(.5, rgba(255, 255, 255, .2)),*/
    /*color-stop(.5, transparent), to(transparent));*/
  }

  /**  STYLE 6 */
  #style-6::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    background-color: #F5F5F5;
  }

  #style-6::-webkit-scrollbar-thumb {
    background-color: #F90;
    background-image: linear-gradient(45deg,rgba(255, 255, 255, .2) 25%,
    transparent 25%,
    transparent 50%,
    rgba(255, 255, 255, .2) 50%,
    rgba(255, 255, 255, .2) 75%,
    transparent 75%,
    transparent)
  }

  /** STYLE 7 */
  #style-7::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    background-color: #F5F5F5;
    border-radius: 10px;
  }

  #style-7::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-image: -webkit-gradient(linear,
    left bottom,
    left top,
    color-stop(0.44, rgb(122,153,217)),
    color-stop(0.72, rgb(73,125,189)),
    color-stop(0.86, rgb(28,58,148)));
  }

  /**  STYLE 8 */
  #style-8::-webkit-scrollbar-track {
    border: 1px solid black;
    background-color: #F5F5F5;
  }

  #style-8::-webkit-scrollbar-thumb {
    background-color: #000000;
  }

  /**  STYLE 9 */
  #style-9::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    background-color: #F5F5F5;
  }

  #style-9::-webkit-scrollbar-thumb {
    background-color: #F90; // background-image z轴方向 位于 background-color 上方
    background-image: -webkit-linear-gradient(90deg,blue 25%, // 由蓝色过渡到红色  部分区域背景图透明 可看到background-color
    transparent 25%,
    transparent 50%,
    rgba(255, 255, 255, .2) 50%,
    rgba(255, 255, 255, .2) 75%,
    transparent 75%,
    red)
  }

  /**  STYLE 10 */
  #style-10::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: linear-gradient(left, #96A6BF, #63738C);
    box-shadow: inset 0 0 1px 1px #5C6670;
  }

  #style-10::-webkit-scrollbar-track {
    border-radius: 10px;
    background: #eee;
    box-shadow: 0 0 1px 1px red, inset 0 0 7px rgba(0,0,0,0.3) //不使用inset，默认阴影在边框外，即阴影向外扩散。 使用 inset 后，阴影在边框内，即阴影向内扩散，背景之上内容之下
  }

  #style-10::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(left, #8391A6, #536175);
  }
  #style-10 .force-overflow{
    min-width: 200px;
  }
  #style-10::-webkit-resizer {
    background-image: url("./../assets/images/resize.png");
    /*background: blue;*/
    background-repeat: no-repeat;
    background-size: contain;
  }
  #style-10::-webkit-resizer:window-inactive {
    background-image: url("./../assets/images/resize-inactive.png");
    background-size: contain;
    background: red;
  }
  /**  STYLE 11 */
  #style-11{
    overflow-x: scroll;// 两条滚动条
  }
  #style-11 .force-overflow{
    min-width: 200px;
  }
  #style-11::-webkit-scrollbar-track {
    border-radius: 10px;
    background: rgba(0,0,0,0.1);
    border: 1px solid #ccc;
  }

  #style-11::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: linear-gradient(left, #fff, #e4e4e4);
    border: 1px solid #aaa;
  }

  #style-11::-webkit-scrollbar-thumb:hover {
    background: #fff;
  }

  #style-11::-webkit-scrollbar-thumb:active {
    background: linear-gradient(left, #22ADD4, #1E98BA);
  }

  /*#style-11::-webkit-scrollbar-corner {*/
    /*background: inherit;*/
  /*}*/

  ::-webkit-scrollbar-button:vertical:hover {
    background: blue!important;
    /* Select the down or left scroll button when it's being hovered by the mouse */
  }
  ::-webkit-scrollbar-button:vertical:decrement:hover {
    background: yellow!important;
    /* Select the down or left scroll button when it's being hovered by the mouse */
  }
  ::-webkit-scrollbar-button {
    background: yellow;
    /* Select the top half (or left half) or scrollbar track individually */
  }
  ::-webkit-scrollbar-button:double-button{
    background: blue;
    /* Select the top half (or left half) or scrollbar track individually */
  }

  /*scrollbar-arrow-color: color; !*三角箭头的颜色*!*/

  /*scrollbar-face-color: color; !*立体滚动条的颜色（包括箭头部分的背景色）*!*/

  /*scrollbar-3dlight-color: color; !*立体滚动条亮边的颜色*!*/

  /*scrollbar-highlight-color: color; !*滚动条的高亮颜色（左阴影？）*!*/

  /*scrollbar-shadow-color: color; !*立体滚动条阴影的颜色*!*/

  /*scrollbar-darkshadow-color: color; !*立体滚动条外阴影的颜色*!*/

  /*scrollbar-track-color: color; !*立体滚动条背景颜色*!*/

  /*scrollbar-base-color: color; !*滚动条的基色*!*/
</style>
