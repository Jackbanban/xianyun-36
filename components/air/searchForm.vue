<template>
    <div class="search-form">
        <!-- 头部tab切换 -->
        <el-row type="flex" class="search-tab">
            <span v-for="(item, index) in tabs" :key="index" @click="handleSearchTab(item, index)" :class="{active: index === currentTab}">
                <i :class="item.icon"></i>{{item.name}}
            </span>
        </el-row>

        <el-form class="search-form-content" ref="form" label-width="80px">
            <el-form-item label="出发城市">
                <!-- fetch-suggestions 返回输入建议的方法 -->
                <!-- select 点击选中建议项时触发 -->
                <el-autocomplete v-model="form.departCity" :fetch-suggestions="queryDepartSearch" placeholder="请搜索出发城市" @select="handleDepartSelect" @blur="handleBlur('depart')" class="el-autocomplete"></el-autocomplete>
            </el-form-item>
            <el-form-item label="到达城市">
                <el-autocomplete v-model="form.destCity" :fetch-suggestions="queryDestSearch" placeholder="请搜索到达城市" @select="handleDestSelect" @blur="handleBlur('dest')" class="el-autocomplete"></el-autocomplete>
            </el-form-item>
            <el-form-item label="出发时间">
                <!-- change 用户确认选择日期时触发 -->
                <el-date-picker type="date" v-model="form.departDate" placeholder="请选择日期" style="width: 100%;" @change="handleDate">
                </el-date-picker>
            </el-form-item>
            <el-form-item label="">
                <el-button style="width:100%;" type="primary" icon="el-icon-search" @click="handleSubmit">
                    搜索
                </el-button>
            </el-form-item>
            <div class="reverse">
                <span @click="handleReverse">换</span>
            </div>
        </el-form>
    </div>
</template>

<script>
import moment from "moment";
export default {
    data() {
        return {
            tabs: [
                { icon: "iconfont icondancheng", name: "单程" },
                { icon: "iconfont iconshuangxiang", name: "往返" }
            ],
            form: {
                departCity: "",
                departCode: "",
                destCity: "",
                destCode: "",
                departDate: "",
            },
            currentTab: 0,
            cities: [],
            sales: []
        }
    },
    methods: {
        // tab切换时触发
        handleSearchTab(item, index) {
            this.$alert('暂未开通往返功能，请选择单程票', '提示', {
                type: 'warning', //给一个感叹号
                confirmButtonText: '确定',
            });
        },

        // 出发城市输入框获得焦点时触发
        // value 是选中的值，cb是回调函数，接收要展示的列表
        queryDepartSearch(value, cb) {
            if (!value) {
                cb([])
                return
            }
            this.$axios({
                url: `/airs/city?name=${value}`,
            }).then(res => {
                const { data } = res.data
                const arr = data.map(v => {
                    return {
                        ...v,
                        value: v.name.replace('市', '')
                    }
                })
                this.cities = arr
                cb(arr)
            })

        },

        // 目标城市输入框获得焦点时触发
        // value 是选中的值，cb是回调函数，接收要展示的列表
        queryDestSearch(value, cb) {
            this.queryDepartSearch(value, cb)
        },

        //失去焦点时默认选中数组中第一个数据
        handleBlur(type) {
            if (this.cities.length === 0) return
            this.form[type + 'City'] = this.cities[0].value
            this.form[type + 'Code'] = this.cities[0].sort
        },

        // 出发城市下拉选择时触发
        handleDepartSelect(item) {
            this.form.departCity = item.value
            this.form.departCode = item.sort
        },

        // 目标城市下拉选择时触发
        handleDestSelect(item) {
            this.form.destCity = item.value
            this.form.destCode = item.sort
        },

        // 确认选择日期时触发
        handleDate(value) {
            this.form.departDate = moment(value).format('YYYY-MM-DD')
        },

        // 触发和目标城市切换时触发
        handleReverse() {
            const { departCity, departCode, destCity, destCode } = this.form
            this.form.departCity = destCity
            this.form.departCode = destCode

            this.form.destCity = departCity
            this.form.destCode = departCode
        },

        // 提交表单是触发
        handleSubmit() {
            console.log(this.form)
            //制定一个对象，方便每个数据为空时弹出不同的信息
            const rules = {
                departCity: { message: '请输入出发城市', value: this.form.departCity },
                destCity: { message: '请输入目的城市', value: this.form.destCity },
                departDate: { message: '请选择出发时间', value: this.form.departDate }
            }

            //对象的循环Objec.keys放回的是一个数组

            //约定一个值来给定是否要弹出信息并且跳转
            const valid = true
            Object.keys(rules).forEach(v => {
                const item = rules[v]
                if (!valid) return  //如果前面有信息没有值就只弹出一个错误信息
                if (!item.value) {
                    this.$message.error(item.message)
                    // 有错误信息这valide转变成false不跳转页面
                    valid = false
                }
            })

            if (!valid) return
            //存储到本地存储加载历史记录
            // const airs = JSON.parse(localStorage.getItem('airs') || `[]`)

            // airs.push(this.form)
            // localStorage.setItem('airs',JSON.stringify(airs))

            // 用vuex的方式存储store来加载历史记录
            this.$store.commit('air/setHistory', this.form)
            this.$router.push({
                path: '/air/flights',
                query: this.form
            })
        }
    },
}
</script>

<style scoped lang="less">
.search-form {
    border: 1px #ddd solid;
    border-top: none;
    width: 360px;
    height: 350px;
    box-sizing: border-box;
}

.search-tab {
    span {
        display: block;
        flex: 1;
        text-align: center;
        height: 48px;
        line-height: 42px;
        box-sizing: border-box;
        border-top: 3px #eee solid;
        background: #eee;
    }

    .active {
        border-top-color: orange;
        background: #fff;
    }

    i {
        margin-right: 5px;
        font-size: 18px;

        &:first-child {
            font-size: 16px;
        }
    }
}

.search-form-content {
    padding: 15px 50px 15px 15px;
    position: relative;

    .el-autocomplete {
        width: 100%;
    }
}

.reverse {
    position: absolute;
    top: 35px;
    right: 15px;

    &:after,
    &:before {
        display: block;
        content: "";
        position: absolute;
        left: -35px;
        width: 25px;
        height: 1px;
        background: #ccc;
    }

    &:after {
        top: 0;
    }

    &:before {
        top: 60px;
    }

    span {
        display: block;
        position: absolute;
        top: 20px;
        right: 0;
        font-size: 12px;
        background: #999;
        color: #fff;
        width: 20px;
        height: 20px;
        line-height: 18px;
        text-align: center;
        border-radius: 2px;
        cursor: pointer;

        &:after,
        &:before {
            display: block;
            content: "";
            position: absolute;
            left: 10px;
            width: 1px;
            height: 20px;
            background: #ccc;
        }

        &:after {
            top: -20px;
        }

        &:before {
            top: 20px;
        }
    }
}
</style>
