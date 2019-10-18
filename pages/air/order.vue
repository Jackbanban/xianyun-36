<template>
    <div class="container">
        <el-row type="flex" justify="space-between">
            <!-- 订单表单 -->
            <orderForm :data="infoData" @allPrice="allPrice" ></orderForm>
            <!-- 侧边栏 -->
            <!--<div class="aside"></div> -->
            <orderAside :data="infoData" :price="price"></orderAside>
        </el-row>
    </div>
</template>

<script>
import orderForm from '@/components/air/orderForm.vue'
import orderAside from '@/components/air/orderAside.vue'
export default {
    data(){
        return{
            infoData: {
                insurances: [], // 初始化保险数据
                seat_infos: {}
            },
            price:0
        }
    },
    components:{
        orderForm,
        orderAside
    },
    mounted(){
        const {id,seat_xid} = this.$route.query
        this.$axios({
            url:'/airs/'+ id,
            params:{
                seat_xid
            }
        }).then(res=>{
            this.infoData = res.data
        })
        
    },
    methods:{
        allPrice(num){
            this.price = num
        }
    }
}
</script>

<style lang="less" scoped>
    .container{
        width:1000px;
        margin:20px auto;
    }
    
    /*aside*/
    .aside{
        width: 350px;
        height: fit-content;
        border:1px #ddd solid;
    }
</style>