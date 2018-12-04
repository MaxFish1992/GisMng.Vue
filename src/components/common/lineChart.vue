<template>
  <div
    id="lineChart"
    class="chart"
    style="height:300px;width:500px"
  ></div>
</template>
<script>
export default {
  name: "lineChart",
  data() {
    return {};
  },
  mounted() {
    var myChart = this.$echarts.init(document.getElementById("lineChart"));
    myChart.setOption({
      title: {
        text: "折线图"
      },
      xAxis: {
        data: ["2015", "2016", "2017"]
      },
      yAxis: {},
      series: [
        {
          name: "累计长度",
          type: "line",
          data: [10000, 20000, 30000]
        }
      ]
    });
  },
  methods: {}
};
</script>

