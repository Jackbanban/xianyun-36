<template>
    <div class="container">
        <el-row type="flex" justify="space-between">
            <!-- 订单表单 -->
<<<<<<< HEAD
            <orderForm :data="infoData" @allPrice="allPrice" ></orderForm>
            <!-- 侧边栏 -->
            <!--<div class="aside"></div> -->
            <orderAside :data="infoData" :price="price"></orderAside>
=======
            <OrderForm @getDetail="getDetail" @getAllPrice="getAllPrice"/>

            <!-- 侧边栏 -->
            <OrderAside :data="detail" :allPrice="allPrice"/>
>>>>>>> 2554d57f36409b59830665ba68660ab3f0572349
        </el-row>
    </div>
</template>

<script>
<<<<<<< HEAD
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
=======
import OrderForm from "@/components/air/orderForm"
import OrderAside from "@/components/air/orderAside"

export default {
    data(){
        return {
            // 机票详情
            detail: {
                // 默认值
                seat_infos: {}
            },

            // 总价格
            allPrice: 0
        }
    },

    components: {
        OrderForm,
        OrderAside
    },

    methods: {
        // 获取机票详情的方法
        getDetail(detail){
            this.detail = detail;
        },

        // 获取总价格
        getAllPrice(price){
            this.allPrice = price;
>>>>>>> 2554d57f36409b59830665ba68660ab3f0572349
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