<template>
  <div id="login">
      <Login/>
      <div id='box'>
        <p>
          <span @click="login_way='qracode'">二维码登陆</span>
          <span @click="login_way='account'">账号登陆</span>
        </p>
        <div>
          <Transition>
            <Component :is="login_way"></Component>
          </Transition>
        </div>
      </div>
  </div>
</template>
<script>
import Login from "./login.vue";
import Qracode from './qracode.vue'
import Account from './account.vue'
  export default {
    data() {
      return {
        flag:true,
        flag1:false,
        login_way:'qracode'
      };
    },
    components:{
      qracode:{
        template:Qracode
      },
      account:{
        template:Account
      }
    },
    methods: {

    },
    components:{
      Login,
      Qracode,
      Account
    }
  }
</script>
<style scoped>
#login {
  width: 100%;
  height: 100%;
  background: url("../assets/timg.jpg");
  background-size: 100% 100%;
  position: relative;
  text-align: center;
}
.inp {
  width: 80%;
}
.button {
}
#box {
  width: 50%;
  height:50%;
  padding-top: 20px;
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translateY(-50%);
  transform: translateX(-50%);
  color:#fff;
}
.list{
  list-style: none;
  width:100%;
  padding-left:0;
  display: flex;
  justify-content:space-around;
}
.li1{
  border:1px solid #ccc;
}
.box{
  width:100%;
  display: block;
}
.box1{
  width:100%;
  display: none;
}
.cont{
  width:100%;
  display: flex;
  justify-content:space-around;
}
.cont span{
  display: block;
  border:1px solid #ccc;
}
.btn{
  width:10rem;
  margin-top:2%;
  height:20px;
  background: #fff;
  border:none;
}
.v-enter{
    transform: translate3d(-100%,0,0)
}
.v-enter-to{
    transform: translate3d(0,0,0)
}
.v-enter-active{
  transition: transform linear 1s
}
.v-leave{
  transform: translate3d(0,0,0)
}
.v-leave-to{
  transform: translate3d(100%,0,0)
}
.box{
  position: relative;
  overflow: hidden;
}
.box div{
  width:100%;
  top:0;
  position: absolute;
  
}
</style>