<template>
  <div
    id="lineChart"
    class="chart"
    style="height:300px;width:430px"
  ></div>
</template>
<script>
export default {
  name: "lineChart",
  data() {
    return {};
  },
  mounted() {
    this.getLineLength();
  },
  methods: {
    initChart() {
      debugger;
      var myChart = this.$echarts.init(document.getElementById("lineChart"));
      var years = []; //淹没区
      var lengths = []; //影响区
      this.LengthData.forEach(function(item, index) {
        years.push(item.year);
        lengths.push(item.length);
      });
      myChart.setOption({
        title: {
          text: "累计线路长度"
        },
        tooltip: {
          trigger: "axis",
          formatter: "{a0}:{c0}km"
        },
        legend: {
          data: ["累计线路长度"]
        },
        grid: {
          left: "15%", //组件距离容器左边的距离
          right: "5%",
          bottom: "7%"
        },
        toolbox: {
          show: true,
          feature: {
            mark: { show: true }
          }
        },
        calculable: true,
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            // data: ["2015", "2016", "2017"]
            data: years
          }
        ],
        yAxis: [
          {
            type: "value",
            axisLabel: {
              formatter: "{value}km"
            }
          }
        ],
        series: [
          {
            name: "线路长度",
            type: "line",
            data: lengths
            // markLine: {
            //   data: [{ type: "average", name: "平均值" }]
            // }
          }
        ],
        color: ["rgb(103,194,58)"]
      });
    },
    getLineLength() {
      this.$fetch("/LineLength/GetAll").then(response => {
        this.LengthData = response;
        this.initChart();
        console.log(this.LengthData);
      });
    },
    getLineCapacity() {
      this.$fetch("/LineCapacity/GetAll").then(response => {
        console.log(response);
      });
    }
  }
};
</script>

