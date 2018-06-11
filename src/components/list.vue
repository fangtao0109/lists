<template>
  <div>
    <el-container>
      <el-header>Header</el-header>
      <el-container>
        <el-aside width="200px">
          <el-menu default-active="2">
            <el-submenu v-for="(item,index) in $store.state.menu" :index="index+'1'" :key="index+'1'">
              <template slot="title"><i class="el-icon-message"></i>{{item.name}}</template>
              <el-menu-item v-for="(i,idx) in item.submenus" :index="index+1 + '-' + idx+1" :key='idx'>
                <router-link :to="{name:i.type}">{{i.name}}</router-link>
              </el-menu-item>
            </el-submenu>
          </el-menu>
        </el-aside>
        <el-main>
          <div class="headers"><span>首页</span></div>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import {mapState,mapActions} from 'vuex'
export default {
  data() {
    return {
      
    }
  },
  computed:{
    ...mapState(["menu"])
  },
  methods: {
    handleOpen(msg) {
      console.log(msg);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    ...mapActions(["fetchMenu"])
  },
  mounted() {
    this.fetchMenu();
  }
};
</script>
<style scoped>
.headers{
  width:100%;
  height: 2rem;
  background:#ccc;
}
.headers span{
  display: inline-block;
  height:1.5rem;
  background:#e9eef3;
  border:1px solid #000;
  border-bottom:none;
  margin-top:.45rem;
}
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  /* line-height: 200px; */
  height:500px;
  overflow-y: auto;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
}
.el-menu-item{
  min-width:0;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
.el-col-12 {
  width: 100%;
}
</style>
