<template>
    <div class="container">
        <!-- 主要内容 -->
        <el-row 
        type="flex" 
        justify="center" 
        align="middle" 
        class="main">

            <div class="form-wrapper">
                <!-- 表单头部tab -->
                <el-row type="flex" justify="center" class="tabs">
<<<<<<< HEAD
                    <span :class="{active: currentTab === index}" 
=======

                    <span 
                    :class="{active: currentTab === index}" 
>>>>>>> 2554d57f36409b59830665ba68660ab3f0572349
                    v-for="(item, index) in [`登录`, `注册`]"
                    :key="index" 
                    @click="handleChangeTab(index)">
                        {{item}}
                    </span>
                </el-row>

                <!-- 登录功能组件 -->
<<<<<<< HEAD
                <LoginForm v-if="currentTab == 0"/> 

                <!-- 注册功能组件 -->
                ssss<RegisterForm v-if="currentTab == 1"/> 
=======
                <LoginForm v-if="currentTab == 0"/>

                <!-- 注册功能组件 -->
                <RegisterForm v-if="currentTab == 1"/>
>>>>>>> 2554d57f36409b59830665ba68660ab3f0572349
            </div>
        </el-row>
    </div>
</template>

<script>
<<<<<<< HEAD
import LoginForm from '@/components/user/loginForm.vue'
import RegisterForm from '@/components/user/registerForm.vue'
=======
import LoginForm from "@/components/user/loginForm"
import RegisterForm from "@/components/user/RegisterForm"

>>>>>>> 2554d57f36409b59830665ba68660ab3f0572349
export default {
    data(){
        return {
            currentTab: 0
        }
    },
<<<<<<< HEAD
    components:{
=======
    components: {
>>>>>>> 2554d57f36409b59830665ba68660ab3f0572349
      LoginForm,
      RegisterForm
    },
    methods: {
        handleChangeTab(index){
            this.currentTab = index;
        },
    }
}
</script>

<style scoped lang="less">
.container{
    background:url(http://157.122.54.189:9095/assets/images/th03.jfif) center 0;
    height: 700px;
    min-width:1000px;
<<<<<<< HEAD

    .main{
        width:1000px;
        height: 100%;
        margin:0 auto;
        position: relative;
        
        .form-wrapper{
            width:400px;
            margin:0 auto;
            background:#fff;
            box-shadow: 2px 2px 0 rgba(0,0,0,0.1);
            overflow:hidden;
            
            .tabs{
                span{
                    display: block;
                    width:50%;
                    height: 50px;
                    box-sizing: border-box;
                    border-top:2px #eee solid;
                    background:#eee;
                    line-height: 48px;
                    text-align: center;
                    cursor: pointer;
                    color:#666;

=======

    .main{
        width:1000px;
        height: 100%;
        margin:0 auto;
        position: relative;
        
        .form-wrapper{
            width:400px;
            margin:0 auto;
            background:#fff;
            box-shadow: 2px 2px 0 rgba(0,0,0,0.1);
            overflow:hidden;
            
            .tabs{
                span{
                    display: block;
                    width:50%;
                    height: 50px;
                    box-sizing: border-box;
                    border-top:2px #eee solid;
                    background:#eee;
                    line-height: 48px;
                    text-align: center;
                    cursor: pointer;
                    color:#666;

>>>>>>> 2554d57f36409b59830665ba68660ab3f0572349
                    &.active{
                        color:orange;
                        border-top-color: orange;
                        background:#fff;
                        font-weight: bold;
                    }
                }
            }
        }
    }
}
<<<<<<< HEAD
</style>
=======
</style>
>>>>>>> 2554d57f36409b59830665ba68660ab3f0572349
