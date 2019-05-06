<template>
  <div>
    <div class="title">我是标题文字内容</div>
  </div>
</template>

<script>
  export default {
    name: 'letterSpacing',
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
  .title {
    width: 8em;
    margin: auto;
    white-space: nowrap;
    animation: textIn 3s infinite;
  }
  @keyframes textIn {
    0% {
      opacity: 0;
      letter-spacing: -200px;
    }
    60% {
      letter-spacing: 5px;
    }
    100% {
      opacity: 1;
      letter-spacing: 0;
    }
  }
</style>
