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
      <div>
        <lineChart ref="lineChart"></lineChart>
      </div>
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
  components: { lineChart },
  data() {
    return {
      title: "GIS页面",
      LengthData: []
    };
  },
  mounted() {
    this.initMap();
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


