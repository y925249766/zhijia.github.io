<template>
  <div>
    <!--<circle>标签代表圆形-->
    <svg width="300" height="180">
      <circle cx="30"  cy="50" r="25" />
      <circle cx="90"  cy="50" r="25" class="red" />
      <circle cx="150" cy="50" r="25" class="fancy" />
    </svg>

    <!--<line>标签用来绘制直线。-->
      <svg width="300" height="180" style="margin-top: 100px">
        <line x1="0" y1="0" x2="200" y2="0" style="stroke:rgb(0,0,0);stroke-width:18px;" />
      </svg>

    <!--<polyline>标签用于绘制一根折线。-->
      <svg width="300" height="180">
        <polyline points="3,3 30,28 3,53" fill="none" stroke="black" />
      </svg>

    <!--<use>标签用于复制一个形状。-->
    <!--<use>的href属性指定所要复制的节点，x属性和y属性是<use>左上角的坐标。另外，还可以指定width和height坐标。-->
      <svg viewBox="0 0 30 10" width="280" height="280" xmlns="http://www.w3.org/2000/svg">
        <circle id="myCircle" cx="5" cy="5" r="4"/>

        <use href="#myCircle" x="10" y="0" fill="blue" />
        <use href="#myCircle" x="20" y="0" fill="white" stroke="blue" />
      </svg>


    <!--<animate>标签用于产生动画效果。-->
    <!--attributeName：发生动画效果的属性名。-->
      <svg width="300px" height="300px">
        <rect x="0" y="0" width="100" height="100" fill="#feac5e">
          <animate attributeName="x" from="0" to="300" dur="2s" repeatCount="indefinite" />
        </rect>
      </svg>
      <svg width="300px" height="300px">
        <rect x="0" y="0" width="100" height="100" fill="#feac5e">
          <animate attributeName="width" from="100" to="300" dur="2s" repeatCount="20" />
        </rect>
      </svg>


    <svg>
      <use xlink:href="#download" width="100" fill="lightblue"></use>
    </svg>
    <svg>
      <use xlink:href="#setting"></use>
    </svg>
    <svg>
      <use xlink:href="#star"></use>
    </svg>
    <svg>
      <use xlink:href="#wifi"></use>
    </svg>
  </div>
</template>

<script>
  export default {
    name: 'svgCanvas',
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
  .red {
    fill: red;
  }

  .fancy {
    fill: none; //填充色
    stroke: black;//描边色
    stroke-width: 3pt;//边框宽度
  }
</style>
