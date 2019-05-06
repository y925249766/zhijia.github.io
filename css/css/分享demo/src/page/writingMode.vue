<template>
  <div style="padding: 50px">
    <div class="section1 horizontal-mode">
      <!--<svg>-->
        <!--<use xlink:href="#download"></use>-->
      <!--</svg>-->
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" style="width: 100px;height: 100px;" hidden>
        <symbol id="setting" viewBox="0 0 1024 1024">
          <path d="M482.88 112l-17.28 90.688-20.64 4.512a309.696 309.696 0 0 0-99.776 41.088l-18.688 11.84-73.28-55.04-44.64 44.64 51.904 76.416-11.392 17.76a310.016 310.016 0 0 0-41.568 99.584l-4.8 21.6L112 477.984v63.104l90.688 17.312 4.512 20.64a309.984 309.984 0 0 0 41.088 99.776l11.84 18.688-55.04 73.28 44.64 44.64 76.416-51.904 17.76 11.392a310.016 310.016 0 0 0 99.584 41.568l21.6 4.8L477.984 912h63.104l17.312-90.688 20.64-4.512a309.984 309.984 0 0 0 99.776-41.088l18.688-11.84 73.28 55.04 44.64-44.64-51.904-76.416 11.392-17.76a310.016 310.016 0 0 0 41.568-99.584l4.8-21.6L912 546.016V482.88l-90.688-17.312-4.512-20.64a309.984 309.984 0 0 0-41.088-99.776l-11.84-18.688 55.04-73.28-44.64-44.64-76.416 51.904-17.76-11.392a310.144 310.144 0 0 0-99.584-41.568l-21.6-4.8-12.896-90.72H482.88zm-72.32 37.856L429.984 48h171.584l14.624 102.624a374.119 374.119 0 0 1 80.128 33.568l85.792-58.304 121.344 121.344-62.272 82.88c14.08 25.408 25.152 52.352 32.96 80.416l101.888 19.424v171.584L873.408 616.16a373.92 373.92 0 0 1-33.568 80.128l58.304 85.792L776.8 903.424l-82.88-62.272c-25.408 14.08-52.352 25.152-80.416 32.96L594.08 976H422.496l-14.624-102.624a373.92 373.92 0 0 1-80.128-33.568l-85.824 58.304-121.344-121.344 62.272-82.88a373.824 373.824 0 0 1-32.96-80.416L48 594.048V422.464l102.624-14.624a374.801 374.801 0 0 1 33.568-80.128l-58.304-85.792 121.344-121.344 82.88 62.272a373.856 373.856 0 0 1 80.416-32.96z"/>
          <path d="M512 704a192 192 0 1 1 0-384 192 192 0 0 1 0 384zm0-64a128 128 0 1 0 0-256 128 128 0 0 0 0 256z"/>
        </symbol>
      </svg>
      <h4>咏柳</h4>
      <p>碧玉妆成一树高，<br>万条垂下绿丝绦。<br>不知细叶谁裁出，<br>二月春风似剪刀。</p>
    </div>
    <div class="vertical-mode">
      <h4>咏柳</h4>
      <p>碧玉妆成一树高，<br>万条垂下绿丝绦。<br>不知细叶谁裁出，<br>二月春风似剪刀。</p>
    </div>
    <div class="section2">
      vertical-rl表示文本是垂直方向(vertical)展示，然后阅读的顺序是从右往左(rl:right-left)，跟我们古诗的阅读顺序一致。
      vertical-lr表示文本是垂直方向(vertical)展示，然后阅读的顺序还是默认的从左往右(lr:left-right)，也就是仅仅是水平变垂直。

      <h2>vertical-lr:</h2>

      <p class="vertical-lr">
        深圳壹方中心<br/>
        互联网基础平台
      </p>
      <h2>vertical-rl:</h2>

      <p class="vertical-rl">
        深圳壹方中心<br/>
        互联网基础平台
      </p>

      <h2>英文 vertical-lr:</h2>
      <p class="vertical-lr">
        Example text1<br/>
        Example text2
      </p>

      <h2>英文 vertical-rl:</h2>
      <p class="vertical-rl">
        Example text1<br/>
        Example text2
      </p>

      <h2>英文修复版 vertical-lr:</h2>
      <p class="vertical-lr-fixed">
        Example text1<br/>
        Example text2
      </p>
    </div>

    <div class="section3">
      <h2>writing-mode结合text-indent实现文字下沉效果</h2>

      <p>恭喜你中了88元红包！</p>
      <a href="javascript:" class="btn vertical-mode">领到</a>
      <a href="javascript:" class="btn2">领到</a>
      <h2>text-indent定义 from MDN</h2>
      <p class="text-indent">text-indent 属性 规定了 一个元素 首行 文本内容之前应该有多少水平空格。水平空格是块级包含元素的内容盒子的左边(对于从右向左布局来说是右边).</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'writingMode',
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
  *{
    line-height: 1.3;
  }
  .horizontal-mode{
    line-height: 1.5;
  }
  .vertical-mode {
    margin-top: 60px;
    font-family: Arial, sans-serif;
    line-height: 1.5;
    writing-mode: vertical-rl;
  }
  h2{margin-top: 10px}
  .section2{
    margin-top: 50px;
    .vertical-lr{
      writing-mode: vertical-lr;
    }
    .vertical-rl{
      writing-mode: vertical-rl;
    }
    .vertical-lr-fixed{
      writing-mode: vertical-lr;
      text-orientation:upright
    }
  }

  .section3{
    /*文字下沉效果*/
    .btn, .btn2 {
      display: block;
      color: #a78252;
      background-color: #ddc390;
      width: 85px; height: 85px;
      text-decoration: none;
      line-height: 85px;
      border: 6px solid #ddc390;
      border-radius: 50%;
      box-shadow: inset 0 0 0 1px #d6b681, 0 1px, 0 2px, 0 3px, 0 4px;
      text-align: center;
      -webkit-transition: border-color .25s, background-color .25s;
      transition: border-color .25s, background-color .25s;
      font-size: 22px;
      cursor: pointer;
    }
    .btn:active {
      text-indent: 5px;
    }
    .btn2:active {
      line-height: 90px;
    }
  }

</style>
