<template>
    <section class="contianer">
        <el-row  type="flex" justify="space-between">

            <!-- 顶部过滤列表 -->
            <div class="flights-content">
                <!-- 过滤条件 -->
<<<<<<< HEAD
                <div>
                    <FlightsFilters :data="cacheFlightsData" @setdataList="setdataList"/>
                </div>
                
                <!-- 航班头部布局 -->
                <div>
                    <flightsListHead/>
                </div>
                
                
                <!-- 航班信息 -->
                <div>
                    <flightsItem 
                    v-for="(item,index) in dataList"
                    :key="index"
                    :data="item" 
                    v-loading="loading"  
                    />
                    <div v-if="!flightsData.flights.length && !loading" 
                    style="padding:20px; text-align: center;font-size:30px;">
                        暂无航班信息
                    </div>
                    <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="pageIndex"
                    :page-sizes="[5, 10, 15,20]"
                    :page-size="pageSize"
                    layout="total, sizes, prev, pager, next, jumper"
                    :total="flightsData.total"
                    style="text-align: center">
                    </el-pagination>
=======
                <FlightsFilters :data="cacheFlightsData" @setDataList="setDataList"/>
                
                <!-- 航班头部布局 -->
                <FlightsListHead/>
                
                <!-- 航班信息 -->
                <!-- flightsData.flights是航班的列表 -->
                <FlightsItem 
                v-for="(item, index) in dataList"
                :key="index"
                :item="item"/>

                <el-pagination
                v-if="flightsData.flights.length"
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="pageIndex"
                :page-sizes="[5, 10, 15, 20]"
                :page-size="pageSize"
                layout="total, sizes, prev, pager, next, jumper"
                :total="total">
                </el-pagination>

                <!-- loading等于false表示加载完毕之后才显示 -->
                <div v-if="flightsData.flights.length === 0 && !loading" style="padding: 50px; text-align:center">
                    该航班暂无数据
>>>>>>> 2554d57f36409b59830665ba68660ab3f0572349
                </div>
            </div>

            <!-- 侧边栏 -->
            <div class="aside">
                <!-- 侧边栏组件 -->
<<<<<<< HEAD
                <flightsAside></flightsAside>
=======
                <FlightsAside/>
>>>>>>> 2554d57f36409b59830665ba68660ab3f0572349
            </div>
        </el-row>
    </section>
</template>

<script>

<<<<<<< HEAD
import moment from "moment";
import flightsListHead from '@/components/air/flightsListHead.vue'
import flightsItem from '@/components/air/flightsItem.vue'
import FlightsFilters from '@/components/air/flightsFilters.vue'
import flightsAside from '@/components/air/flightsAside.vue'
export default {
    data(){
        return {
            flightsData:{
                flights:[],
                info:{},
                options:{}
            },
            cacheFlightsData:{
                flights:[],
                info:{},
                options:{}
            },
            pageSize:5,
            pageIndex:1,
            loading:true
        }
    },
    components:{
        flightsListHead,
        flightsItem,
        FlightsFilters,
        flightsAside
    },
    methods: {
        handleSizeChange(val) {
            this.pageSize = val
        },
        handleCurrentChange(val) {
            this.pageIndex = val
        },
        setdataList(arr){
            if(arr){
                this.pageIndex = 1
                this.flightsData.flights = arr
                this.flightsData.total = arr.length
            }
        },
        getDate(){
                this.$axios({
                url:'/airs',
                params:this.$route.query
            }).then(res=>{
                // 筛选后变动的数据 (会被修改)
                this.flightsData  = res.data
                // 保存原始数据 复制出一份新的数据，避免和上面的数据存储在同一空间上面修改下面数据也会变动
                this.cacheFlightsData = {...res.data}
                this.loading = false
            })
        }
    },   
    computed:{
        dataList(){
            // 监听页面数字变化时数据的变化
            return this.flightsData.flights.slice((this.pageIndex-1)*this.pageSize,this.pageIndex*this.pageSize)
        },
    },
    watch:{
        $route(){
            this.getDate()
        }
    },
    mounted(){
        this.getDate()
        
=======
import FlightsListHead from "@/components/air/flightsListHead"
import FlightsItem from "@/components/air/flightsItem"
import FlightsFilters from "@/components/air/flightsFilters"
import FlightsAside from "@/components/air/flightsAside"

export default {
    data(){
        return {
            // 请求机票列表返回的总数据，包含了flights,info, options,total
            flightsData: {
                // 初始值
                flights: [],
                info: {},
                options: {}
            },
            // 声明多一分总数据，`该总数据一旦赋值之后不会再被修改`，也就是第一次赋值完后的值等于flightsData
            cacheFlightsData: {
                // 初始值
                flights: [],
                info: {},
                options: {}
            },
            // 当前的页数
            pageIndex: 1,
            // 当前的条数
            pageSize: 5,
            // 判断是否正在加载
            loading: true,
            // 分页条数
            total: 0
        }
    },

    components: {
        FlightsListHead,
        FlightsItem,
        FlightsFilters,
        FlightsAside
    },

    computed: {
        // 从flights总列表数据中切割出来数组列表
        dataList(){
            const arr = this.flightsData.flights.slice(
                (this.pageIndex - 1) * this.pageSize, 
                this.pageIndex * this.pageSize
            )
            return arr;
        }
    },

    methods: {

        // 给过滤组件修改flightsData的flights
        setDataList(arr){
            // 根据过滤条件修改列表
            this.flightsData.flights = arr;
            // 修改分页的初始值
            this.total = arr.length;
            this.pageIndex = 1;
        },

        // 分页条数切换时候触发, val是当前的条数
        handleSizeChange(val){
            // 切换条数
            this.pageSize = val;
        },

        // 页数切换时候触发, val是当前的页数
        handleCurrentChange(val){
            // 修改当前的页数
            this.pageIndex = val;
        },

        // 获取机票的列表
        getList(){
            // 请求机票列表数据
            this.$axios({
                url: "/airs",
                // params是axios的get的参数
                params: this.$route.query
            }).then(res => {
                // 保存到机票的总数据
                this.flightsData = res.data;

                // 赋值多一分给缓存的对象,一旦赋值之后不能再被修改
                this.cacheFlightsData = {...res.data};

                // 请求完毕
                this.loading = false;

                // 分页总数
                this.total = this.flightsData.total;
            })
        }
    },

    watch: {
        // 监听路由
        $route(){
            // 请求机票列表数据
            this.getList()
        }
    },

    mounted(){
        // 请求机票列表数据
        this.getList()
>>>>>>> 2554d57f36409b59830665ba68660ab3f0572349
    }
}
</script>

<style scoped lang="less">
    .contianer{
        width:1000px;
        margin:20px auto;
    }

    .flights-content{
        width:745px;
        font-size:14px;
    }

    .aside{
        width:240px;
<<<<<<< HEAD
        
=======
>>>>>>> 2554d57f36409b59830665ba68660ab3f0572349
    } 
</style>