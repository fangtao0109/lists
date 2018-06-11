<template>
  <div>
      <el-form :model="login_model" label-positon='top' ref="form">
          <el-form-item prop='account' :rules='rules' label="登陆账号">
            <el-input v-model="login_model.account" placeholder='请输入手机号或者邮箱'></el-input>
          </el-form-item>
          <el-form-item class="box">
            <el-button :disabled="isPhoneDisabled" type="primary" v-on:click="checkValidate('phone')">{{msg}}</el-button>
            <el-button :disabled="isEmailDisabled" type="primary" v-on:click="checkValidate('email')">{{msgs}}</el-button>
          </el-form-item>
          <el-form-item label="动态密码">
            <el-input placeholder='请输入动态密码'></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="btn">登陆</el-button>
          </el-form-item>
        </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      login_model: {
        account: ""
      },
      rules: [{ required: true, message: "请输入账户信息" }],
      msg: "使用手机号获取动态密码",
      msgs: '使用邮箱获取动态密码',
      isPhoneDisabled: false,
      isEmailDisabled: false,
      timer:null
    };
  },
  methods: {
    btn() {
      this.$router.push('/list')
    },
    count_down(type) {
      let start = 10;
      this.timer=setInterval(() => {
        start--;
        type == "phone" ? (this.isPhoneDisabled = true,this.msg=start)
        :(this.isEmailDisabled=true,this.msgs=start)
        if (start < 0) {
          type = 'phone'? this.msg = "重新发送动态密码":this.msgs = "重新发送动态密码";
          
          clearInterval(this.timer)
          type == "phone" ? this.isPhoneDisabled = false:this.isEmailDisabled=false;
        }
      }, 1000);
    },
    checkValidate(type) {
      if (this.rules.length > 1) {
        this.rules.pop();
      }
      if (type == "phone") {
        this.rules.push({
          validator: (rule, value, callback) => {
            if (/^1[3578]\d{9}$/.test(value)) {
              callback();
            } else {
              callback(new Error("请输入正确格式的手机号"));
            }
          },
          message: "请输入正确的手机号"
        });
      } else if (type == "email") {
        this.rules.push({ type, message: "请输入正确的邮箱" });
      }
      this.$refs.form.validate((isValid, rules) => {
        if (isValid) {
          this.count_down(type)
          // this.$http.post("",{account:login_model.account}).then(res=> {
          //   console.log(res)
          // })
        }
      });
    }
  }
};
</script>
<style scoped>
.box {
  width: 100%;
}
.box .el-button {
  padding: 10px;
}
</style>
