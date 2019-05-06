<template>
  <div>
    <div style="direction: rtl;">
      direction属性默认有一个特性
      可以改变替换元素(img,input,textarea,select)或inline-block/inline-table元素的水平呈现顺序。
      direction属性默认有一个特性  direction属性默认有一个特性  direction属性默认有一个特性
    </div>
    <div style="direction: rtl;unicode-bidi:bidi-override">
      direction属性默认有一个特性
      可以改变替换元素(img,input,textarea,select)或inline-block/inline-table元素的水平呈现顺序。
    </div>
    <div style="direction: rtl;">This is my blog.</div>
    <div>阿拉伯文字从右到左阅读： <span style="direction: rtl;display: inline-block">1 2 3 4 5 6.</span></div>

    <div class="box" dir="rtl">
      <p style="display: inline-block">我是第1名.</p>
      <p style="display: inline-block">我是第2名.</p>
    </div>

    <h2>改变的只是内联元素块(display:inline-block)的左右顺序,display:inline的元素顺序不会改变.</h2>
    <p dir="rtl"><span>span1</span> <span>span2</span></p>

    <p class="box" dir="rtl">
      <img src="./../assets/images/cat.jpg" alt="猫">
      <img src="./../assets/images/dog.jpg" alt="狗">
    </p>

    <h2>调换弹窗中的按钮顺序</h2>
    <p id="dialog" class="tc">
      <button>确定</button> <button>取消</button>
    </p>
    <p class="tc">
      <el-button @click="changeDirection" size="mini">
        点击调换
      </el-button>
    </p>

  </div>
</template>

<script>
  export default {
    name: 'direction',
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
      changeDirection(){
        let element = document.getElementById('dialog')
        element.className = element.className === 'tc' ? 'tc rtl' : 'tc'
      }
    }
  }
</script>
<style lang="less">
  .main{
    padding: 50px;
  }
  .box{
    margin-top: 60px;
  }
  h2{
    margin-top: 18px;
  }
  img{
    width: 400px;
    height: 350px;
  }
  .tc{
    text-align: center;
    margin-top: 6px;
  }
  .rtl {
    direction: rtl;
  }
</style>
