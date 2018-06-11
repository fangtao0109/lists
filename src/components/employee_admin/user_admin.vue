<template>
  <div>
    <el-row :gutter="12">
      <el-col :span="8">
        <el-card class="box">
          <h3><router-link :to="{name:'user_admin1'}">发起更名流程工单</router-link></h3>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card class="box">
          <h3><router-link :to="{name:'user_admin2'}">发起过户流程工单</router-link></h3>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card class="box">
          <h3><router-link :to="{name:'user_admin3'}">工程维护单</router-link></h3>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card class="box">
          <h3><router-link :to="{name:'user_admin4'}">其他类型工单</router-link></h3>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  
}
</script>
<style scoped>
.box{
  height:15rem;
  margin-top:1rem;
  text-align: center;
  line-height: 10rem;
}
</style>
