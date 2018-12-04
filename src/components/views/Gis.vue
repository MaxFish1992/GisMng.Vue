<template>
  <div>
    <div
      id="map"
      style="height:100%;"
    ></div>
    <el-popover
      id="popover"
      placement="right"
      trigger="click"
    >
      <div
        id="lineChart"
        class="chart"
        style="height:300px;width:430px"
      ></div>
      <el-button
        icon="el-icon-arrow-right"
        type="info"
        size="mini"
        circle
        slot="reference"
      ></el-button>
    </el-popover>
  </div>
</template>
<script>
import lineChart from "@/components/common/lineChart.vue";
export default {
  name: "GIS",
  data() {
    return {
      title: "GIS页面",
      LengthData: []
    };
  },
  mounted() {
    this.initMap();
    this.getLineLength();
  },
  methods: {
    initMap() {
      var ol = this.$ol;
      // var l1 = new ol.layer.Tile({
      //   source: new ol.source.XYZ({
      //     url: "http://t3.tianditu.com/DataServer?T=cta_w&x={x}&y={y}&l={z}" // 注记
      //   })
      // });
      var l2 = new ol.layer.Tile({
        source: new ol.source.XYZ({
          url: "http://t3.tianditu.com/DataServer?T=vec_w&x={x}&y={y}&l={z}" // 行政区划
        })
      });
      var l3 = new ol.layer.Tile({
        source: new ol.source.XYZ({
          url: "http://t3.tianditu.com/DataServer?T=cva_w&x={x}&y={y}&l={z}" // 中文注记
        })
      });
      var map = new ol.Map({
        target: "map",
        view: new ol.View({
          center: ol.proj.fromLonLat([108.532, 34.145]),
          zoom: 5
          // minZoom: 5
        }),
        controls: []
      });
      // map.addLayer(l1);
      map.addLayer(l2);
      map.addLayer(l3);
    },
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

<style scoped>
#popover {
  position: absolute;
  left: 230px;
  top: 480px;
}
</style>


