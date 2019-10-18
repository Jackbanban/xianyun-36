<template>
    <div class="aside">
        <div class="air-info">
            <el-row type="flex" justify="space-between" class="info-top">
                <div>{{data.dep_date}}</div>
                <div>{{data.org_city_name}} - {{data.dst_city_name}}</div>
            </el-row>    
            <el-row 
            type="flex" 
            justify="space-between" 
            align="middle" 
            class="info-step">
                <el-col :span="5" class="flight-airport">
                    <strong>{{data.dep_time}}</strong>
<<<<<<< HEAD
                    <span>{{data.org_airport_name}}</span>
=======
                    <span>{{data.org_airport_name}}{{data.org_airport_quay}}</span>
>>>>>>> 2554d57f36409b59830665ba68660ab3f0572349
                </el-col>
                <el-col :span="14" class="flight-time">
                    <span>--- {{rankTime}} ---</span>
                    <span>{{data.airline_name}}{{data.flight_no}}</span>
                </el-col>
                <el-col :span="5" class="flight-airport">
                    <strong>{{data.arr_time}}</strong>
<<<<<<< HEAD
                    <span>{{data.dst_airport_name}}</span>
=======
                    <span>浦东机场T2</span>
>>>>>>> 2554d57f36409b59830665ba68660ab3f0572349
                </el-col>
            </el-row> 
        </div>
        <el-row type="flex" justify="space-between" class="info-bar">
            <span>订单总价</span>
            <span>金额</span>
            <span>数量</span>
        </el-row>
        <el-row type="flex" justify="space-between" class="info-bar">
            <span>成人机票</span>
<<<<<<< HEAD
            <span>￥{{data.seat_infos.org_settle_price }}</span>
=======
            <span>￥{{data.seat_infos.org_settle_price}}</span>
>>>>>>> 2554d57f36409b59830665ba68660ab3f0572349
            <span>x1</span>
        </el-row>
        <el-row type="flex" justify="space-between" class="info-bar">
            <span>机建＋燃油</span>
            <span>¥{{data.airport_tax_audlet}}/人/单程</span>
            <span>x1</span>
        </el-row>
        <el-row type="flex" justify="space-between" align="middle" class="info-bar">
            <span>应付总额：</span>
<<<<<<< HEAD
            <span class="price">￥{{price}}</span>
=======
            <span class="price">￥ {{allPrice}}</span>
>>>>>>> 2554d57f36409b59830665ba68660ab3f0572349
        </el-row>           
    </div>
</template>

<script>
<<<<<<< HEAD
export default {
    props: {
=======
// 导入计算的方法
import {computeTime} from "@/utils/utils"

export default {
    props: {
        // 组件接受的是data属性
>>>>>>> 2554d57f36409b59830665ba68660ab3f0572349
        data: {
            type: Object,
            default: {}
        },
<<<<<<< HEAD
        price:{
            type:Number,
            default:0
=======
        // 总价格
        allPrice: {
            type: Number,
            default: 0
>>>>>>> 2554d57f36409b59830665ba68660ab3f0572349
        }
    },

    computed: {
        rankTime(){
<<<<<<< HEAD
            if(!this.data.dep_time) return ""
            const dep = this.data.dep_time.split(':')
            const arr = this.data.arr_time.split(':')

            if(arr[0]<dep[0]){
                arr[0] = +arr[0]+24
            }

            const dis = arr[0] * 60 + (+arr[1]) - dep[0] * 60 + (+dep[1]) 
            return `${Math.floor(dis/60)}时${dis%60}分`
       
        },
    }
=======
            return computeTime(this.data.arr_time, this.data.dep_time);
        }
    },
>>>>>>> 2554d57f36409b59830665ba68660ab3f0572349
}
</script>

<style scoped lang="less">
/*aside*/
.aside{
    width: 350px;
    height: fit-content;
    border:1px #ddd solid;
}

.air-info{
    padding:15px;

    .info-top{
        margin-bottom:10px;
        > div:last-child{
            font-size:14px;
        }
    }

    .info-step{
        .flight-airport{
            strong{
                display: block;
                font-size: 22px;
                font-weight: normal;
            }

            span{
                font-size: 12px;
                color:#999;
            }
        }

        .flight-time{
            text-align: center;
            font-size: 12px;
            color:#999;
            span{
                display: block;
            }
        }
    }
}

.info-bar{
    border-top:1px #ddd dashed;
    padding: 10px 15px;
    font-size: 14px;
    color: #666;

    .price{
        font-size:28px;
        color: orange;
    }
}
</style>