<template>
  <div>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="用户姓名">
        <el-popover
            placement="right"
            width="400"
            trigger="click">
        <el-container direction="vertical">
          <el-form>
            <el-input size="small" v-model="filterItem"></el-input>
            <el-button size="small" @click="filterGroup()(filterItem)">查询</el-button>
          </el-form>
          <el-table :data="filterGroup()(filterItem)" :height="300" @row-click="rowClick">
            <el-table-column width="70" type="index" label="序号"></el-table-column>
            <el-table-column width="150" property="ORGNAME" label="组织名称"></el-table-column>
            <el-table-column width="150" property="FORGNAME" label="上级组织"></el-table-column>
          </el-table>
        </el-container>
          <el-input v-model="form.name" slot="reference" size="small">
            <i slot="suffix" class="el-input_icon el-icon-arrow-down"></i>
          </el-input>
        </el-popover>
      </el-form-item>
      <el-form-item label="归属组织">
        <el-input v-model="form.group" size="small"></el-input>
      </el-form-item>
    </el-form>
    <hr>
    <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column type="index" width="50">
    </el-table-column>
    <el-table-column prop="name" label="姓名" width="70">
    </el-table-column>
    <el-table-column prop="id" label="员工ID" width="180">
    </el-table-column>
    <el-table-column prop="code" label="员工编号" width="80">
    </el-table-column>
    <el-table-column prop="mobile" label="手机号" width="120">
    </el-table-column>
    <el-table-column prop="email" label="邮箱" width="200">
    </el-table-column>
    <el-table-column prop="org" label="归属组织" width="130">
    </el-table-column>
    <!-- <el-table-column prop="auth" label="权限" width="60">
    </el-table-column> -->
    <el-table-column prop="forg" label="上级组织" width="150">
    </el-table-column>
    <el-table-column prop="data" label="创建时间" width="150">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="100">
      <template slot-scope="scope">
        <el-button @click="dialogFormVisible = true" type="text" size="small">编辑</el-button>
        <el-button type="text" size="small" @click="delive(index)">删除</el-button>
      </template>
    </el-table-column> 
  </el-table>
  <el-pagination
      background
      layout="prev, pager, next"
      :total="table.length"
      @current-change="pageChange"
      :page-size="count"
       class="butt"
      >
  </el-pagination>
  <el-button @click="dialogFormVisible = true" type='primary' class="butts">添加</el-button>
  <el-dialog title="添加/新建" :visible.sync="dialogFormVisible" class="list1">
  <el-form :model="newform">
    <el-form-item label="员工姓名">
      <el-input size="small" v-model="newform.name" auto-complete="off"></el-input>
    </el-form-item>
    <el-form-item label="邮箱">
      <el-input size="small" v-model="newform.name" auto-complete="off"></el-input>
    </el-form-item>
    <el-form-item label="证件类型">
      <el-select v-model="newform.region" placeholder="请选择">
        <el-option label="证件一" value="shanghai"></el-option>
        <el-option label="证件二" value="beijing"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="证件号码">
      <el-input size="small" v-model="newform.name" auto-complete="off"></el-input>
    </el-form-item>
    <el-form-item label="人员状态">
      <el-select v-model="newform.region" placeholder="请选择">
        <el-option label="证件一" value="shanghai"></el-option>
        <el-option label="证件二" value="beijing"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="手机号码">
      <el-input size="small" v-model="newform.name" auto-complete="off"></el-input>
    </el-form-item>
    <el-form-item label="归属组织">
      <el-input size="small" v-model="newform.name" auto-complete="off"></el-input>
    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
  </div>
  </el-dialog>
  </div>
</template>
<script>
import { mapState, mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      form: {
        name: "test",
        group: "未知组织"
      },
      newform:{
        name:'',
        email:''
      },
      flag: false,
      filterItem: "",
      count:5,
      page:1,
      formLabelWidth:90,
      dialogFormVisible:false
    };
  },
  computed: {
    ...mapState(["group"]),
    tableData(){
      let arr = this.$store.state.table.slice(this.count*(this.page-1),this.count*this.page)
      console.log(arr)
      return arr
    },
   ...mapState(["table"]) 
  },
  methods: {
    delive(index){
      console.log(index)
    },
    rowClick(row, event, column) {
      console.log(row);
      this.form.group = row.ORGNAME;
    },
    ...mapActions(["fetchGroup","fetchTable"]),
    ...mapGetters(["filterGroup"]),
    toFetchTable(){
      this.fetchTable()
    },
    pageChange(count){
      this.page = count
    },
  },
  mounted() {
    this.fetchGroup();
    this.toFetchTable();
  }
};
</script>
<style scoped>
.el-input {
  width: 50%;
}
.butt{
  display: inline-block;
}
.butts{
  float:right;
}
.list1 .el-form-item{
    display: inline-block;;
}
.list1 .el-select{
  width:50%;
}
</style>
