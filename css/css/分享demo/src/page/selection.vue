<template>
  <div>
    <div class="default">
      <p class="center">selection default</p>
      <p>test test test test test test test</p>
    </div>
    <div class="orange">
      <p class="center orange">selection user define: orange</p>
      <p class="orange">test test test test test test test</p>
    </div>
    <div class="maroon">
      <p class="center maroon">selection user define: maroon</p>
      <p class="maroon">test test test test test test test</p>
    </div>
    <div id="copy">
      <p class="center">复制手机号码到输入框中</p>
      <p>156-6328-3596</p>
      <input type="text" v-model="copyVal" placeholder="请输入要搜索的手机号码">
    </div>
    <div id="copyright">
      <p class="center">复制内容自动添加版权信息</p>
      <p>156-6328-3596</p>
      <input type="text" placeholder="请输入要搜索的手机号码">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'svgCanvas',
    components: {
    },
    data() {
      return {
        copyVal: '',
        copyRightVal: ''
      }
    },
    watch: {
    },
    created() {
    },
    mounted() {
      let copy = document.getElementById('copy')
      let copyright = document.getElementById('copyright')
      let self = this
      copy.addEventListener('copy', function (event) {
        var clipboardData = event.clipboardData || window.clipboardData;
        if (!clipboardData) { return; }
        let text = window.getSelection().toString();
        if (text.match(/\d/g)) {
          event.preventDefault();
          clipboardData.setData('text/plain', text.replace(/\D/g, ''));
        }
      });
      copyright.addEventListener('copy', function (event) {
        let clipboardData = event.clipboardData || window.clipboardData;
        if (!clipboardData) { return; }
        var text = window.getSelection().toString();
        if (text) {
          event.preventDefault();
          clipboardData.setData('text/plain', text + '\n\n版权所有,翻版必究！');
        }
      });
    },
    methods: {

    }
  }
</script>
<style lang="less">
  input{
    width: 290px;
  }
  .orange::selection {
    background: orange;
    color: gray;
    font-size: 24px;// 无效
    font-family: cursive;// 无效
  }
  .maroon::selection {
    background: maroon;
    color: blue;
  }
  .center{
    margin-top: 20px;
  }
</style>
