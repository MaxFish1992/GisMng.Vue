<template>
  <div id="app">
    <el-container class="con_section">
      <el-header class="blueheader">
        <!-- <h2 class="headlogo">logo</h2> -->
        <el-col :span="3">
          <img
            src="../assets/gis.png"
            width="55"
            height="55"
            style="margin-right:100px;margin-top:2px;"
          >
        </el-col>

        <el-col
          :span="21"
          class="userinfo"
        >
          <!-- <el-dropdown>
            <i
              class="el-icon-setting"
              style="margin-right: 15px"
            ></i>
            <el-dropdown-menu split-button type="primary" slot="dropdown" @click="loginOut">
              <el-dropdown-item>查看</el-dropdown-item>
              <el-dropdown-item>新增</el-dropdown-item>
              <el-dropdown-item>删除</el-dropdown-item>
              <el-dropdown-item>退出</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown> -->
          <span style="margin-left:1550px;">黄尉</span>
          <el-button @click="loginOut">退出</el-button>
        </el-col>
      </el-header>
      <el-container>
        <el-aside style="flex: 0 0 230px;width: 230px;background:#eef1f6">
          <el-menu
            default-active="1"
            class="el-menu-vertical-demo"
            @select="handleSelect"
          >
            <el-submenu index="1">
              <template slot="title"><i class="el-icon-message"></i>管理系统</template>
              <el-menu-item index="Product">列表管理</el-menu-item>
              <el-menu-item index="Forms">表单管理</el-menu-item>
            </el-submenu>
            <el-menu-item index="Gis">
              <template slot="title"><i class="el-icon-location-outline"></i>GIS地图</template>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-main class="home_main">
          <el-col :span="24" style="height:100%;">
            <div style="height:100%;">
              <router-view style="height:100%;"></router-view>
            </div>
          </el-col>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchCriteria: "",
      editableTabs: [
      ],
      hiddenSideState: false,
      editableTabsValue: ""
    };
  },
  methods: {
    hiddenSide() {
      this.hiddenSideState = !this.hiddenSideState;
    },
    handleIconClick(ev) {
      console.log(ev);
    },
    handleSelect(key, keyPath) {
      switch (key) {
        case "Product":
          this.$router.push("/Product");
          break;
        case "Forms":
          this.$router.push("/Forms");
          break;
        case "Gis":
          this.$router.push("/Gis");
          break;
      }
    },
    loginOut() {
      this.$router.push("/");
    }
    // addTab($el, path) {
    //   let title = $el.$el.innerText;
    //   let Acomponent = resolve =>
    //     require(["./" + path + "/" + $el.index], resolve);

    //   let newTabName = ++this.tabIndex + "";
    //   let isIn = false;

    //   for (var item of this.editableTabs) {
    //     if (item.title == title) {
    //       isIn = true;
    //       this.editableTabsValue = item.name;
    //       break;
    //     }
    //   }
    //   if (isIn == false) {
    //     this.editableTabs.push({
    //       title: title,
    //       name: newTabName,
    //       content: Acomponent
    //     });

    //     this.editableTabsValue = newTabName;
    //   }
    // },
    // removeTab(targetName) {
    //   let tabs = this.editableTabs;
    //   let activeName = this.editableTabsValue;
    //   if (activeName === targetName) {
    //     tabs.forEach((tab, index) => {
    //       if (tab.name === targetName) {
    //         let nextTab = tabs[index + 1] || tabs[index - 1];
    //         if (nextTab) {
    //           activeName = nextTab.name;
    //         }
    //       }
    //     });
    //   }

    //   this.editableTabsValue = activeName;
    //   this.editableTabs = tabs.filter(tab => tab.name !== targetName);
    // }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.con_section {
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: 0px;
  width: 100%;
}
.blueheader {
  height: 60px;
  line-height: 60px;
  background: #67c23a;
  color: #fff;
}
.el-menu-item.is-active {
  color: #67c23a;
}
.headlogo {
  float: left;
  height: 60px;
  margin: 0 20px;
  width: 300px;
}
ul.el-menu {
  background: #e4e8f1;
}
.userinfo {
  position: absolute;
  right: 0;
}
.el-submenu__title {
  background: #eef1f6;
}
.el_main {
  padding: 0px;
}
.home_main {
  padding: 5px;
}
.breadcrumb-container .title {
  width: 200px;
  float: left;
  color: #475669;
  font-size: 13px;
}
.breadcrumb-inner {
  float: right;
  font-size: 13px;
}
.el-breadcrumb__inner,
.el-breadcrumb__inner a {
  font-weight: 400;
}
</style>