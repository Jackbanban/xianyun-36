<template>
    <section class="contianer">
        <el-row type="flex" justify="space-between">

            <!-- 顶部过滤列表 -->
            <div class="flights-content">
                <!-- 过滤条件 -->
                <div>
                    <FlightsFilters :data="cacheFlightsData" @setdataList="setdataList" />
                </div>

                <!-- 航班头部布局 -->
                <div>
                    <flightsListHead/>
                </div>

                <!-- 航班信息 -->
                <div>
                    <flightsItem v-for="(item,index) in dataList" :key="index" :data="item" v-loading="loading" />
                    <div v-if="!flightsData.flights.length && !loading" style="padding:20px; text-align: center;font-size:30px;">
                        暂无航班信息
                    </div>
                    <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="pageIndex" :page-sizes="[5, 10, 15,20]" :page-size="pageSize" layout="total, sizes, prev, pager, next, jumper" :total="flightsData.total" style="text-align: center">
                    </el-pagination>
                    <div>
                        <FlightsFilters :data="cacheFlightsData" @setdataList="setdataList" />
                    </div>

                    <!-- 航班头部布局 -->
                    <div>
                        <flightsListHead/>
                    </div>

                    <!-- 航班信息 -->
                    <div>
                        <flightsItem v-for="(item,index) in dataList" :key="index" :data="item" v-loading="loading" />
                        <div v-if="!flightsData.flights.length && !loading" style="padding:20px; text-align: center;font-size:30px;">
                            暂无航班信息
                        </div>
                        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="pageIndex" :page-sizes="[5, 10, 15,20]" :page-size="pageSize" layout="total, sizes, prev, pager, next, jumper" :total="flightsData.total" style="text-align: center">
                        </el-pagination>
                    </div>
                </div>

                <!-- 侧边栏 -->
                <div class="aside">
                    <!-- 侧边栏组件 -->
                    <flightsAside></flightsAside>
                </div>
        </el-row>
    </section>
</template>

<script>

import moment from "moment";
import flightsListHead from '@/components/air/flightsListHead.vue'
import flightsItem from '@/components/air/flightsItem.vue'
import FlightsFilters from '@/components/air/flightsFilters.vue'
import flightsAside from '@/components/air/flightsAside.vue'
export default {
    data() {
        return {
            flightsData: {
                flights: [],
                info: {},
                options: {}
            },
            cacheFlightsData: {
                flights: [],
                info: {},
                options: {}
            },
            pageSize: 5,
            pageIndex: 1,
            loading: true
        }
    },
    components: {
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
        setdataList(arr) {
            if (arr) {
                this.pageIndex = 1
                this.flightsData.flights = arr
                this.flightsData.total = arr.length
            }
        },
        getDate() {
            this.$axios({
                url: '/airs',
                params: this.$route.query
            }).then(res => {
                // 筛选后变动的数据 (会被修改)
                this.flightsData = res.data
                // 保存原始数据 复制出一份新的数据，避免和上面的数据存储在同一空间上面修改下面数据也会变动
                this.cacheFlightsData = { ...res.data }
                this.loading = false
            })
        }
    },
    computed: {
        dataList() {
            // 监听页面数字变化时数据的变化
            return this.flightsData.flights.slice((this.pageIndex - 1) * this.pageSize, this.pageIndex * this.pageSize)
        },
    },
    watch: {
        $route() {
            this.getDate()
        }
    },
    mounted() {
        this.getDate()

    }
}
</script>

<style scoped lang="less">
.contianer {
    width: 1000px;
    margin: 20px auto;
}

.flights-content {
    width: 745px;
    font-size: 14px;
}

.aside {
    width: 240px;
}
</style>