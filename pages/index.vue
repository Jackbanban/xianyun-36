<template>
<<<<<<< HEAD
    <div class="container">

      <div class="banner-content">
          <div class="search-bar"> 
             <el-row 
                type="flex" 
                class="search-tab">
                    <span 
                    v-for="(item,index) in options"
                    :key="index"
                    @click="handleOption(index)"
                    >
                        <i>{{item.name}}</i>
=======

    <div class="container">
        <!-- 轮播图 -->
        <!-- interval：相隔时间
        arrow：是否显示左右的箭头 -->
        <el-carousel 
        :interval="5000" 
        arrow="always">

            <el-carousel-item 
            v-for="(item, index) in banners" 
            :key="index">
                <div class="banner-image" 
                :style="`
                background:url(${$axios.defaults.baseURL + item.url}) center center no-repeat;
                background-size:contain contain;
                `">
                </div>
            </el-carousel-item>
        </el-carousel>

		<!-- 搜索框 -->
        <div class="banner-content">
            <div class="search-bar">
                
                <!-- tab栏 -->
                <el-row 
                type="flex" 
                class="search-tab">
                    <span 
					v-for="(item, index) in options"
					:key="index"
					@click="handleTabChange(index)"
					:class="{active: current === index}">
                        <i>{{item.title}}</i>
>>>>>>> 2554d57f36409b59830665ba68660ab3f0572349
                    </span>
                </el-row>
                
                <!-- 输入框 -->
                <el-row 
                type="flex" 
                align="middle" 
                class="search-input">
<<<<<<< HEAD
                    <input 
                    :placeholder="options[current].placeholder"
                    />
                    <i class="el-icon-search" ></i>
                </el-row>
          </div>
      </div>


      <el-carousel :interval="5000" arrow="always">
        <el-carousel-item v-for="(item,index) in banner" :key="index">
          <div class="banner-image"
          :style="`
          background:url(${$axios.defaults.baseURL + item.url}) center center no-repeat;
          background-size:contain contain
          `">
          </div>
        </el-carousel-item>
    </el-carousel>
=======
                    <input :placeholder="options[current].placeholder"/>
                    <i class="el-icon-search"></i>
                </el-row>
            </div>
        </div>
>>>>>>> 2554d57f36409b59830665ba68660ab3f0572349
    </div>
</template>

<script>
export default {
<<<<<<< HEAD
    data(){
        return{
          banner:[],
          options:[
            {name:'城市',placeholder:'搜索城市',pageUrl:''},
            {name:'酒店',placeholder:'请输入城市搜索酒店',pageUrl:''},
            {name:'机票',placeholder:``,pageUrl:'/air'},
          ],
          current:0
        }
    },
    methods:{
      handleOption(index){
        this.current = index
        if(index === 2){
            this.$router.push('/air')
        }
      },
    },
    mounted(){
        this.$axios({
            url:this.$axios.defaults.baseURL +'/scenics/banners'
        }).then(res=>{
            const {data} = res.data
            this.banner = data
        })
    }
=======
	data(){
		return {
			// 轮播图
			banners: [],

			// tab的数据结构!!!!（重点在于自己会构造出数据结构）
			options: [
				{ title: "攻略", placeholder: "搜索城市" },
				{ title: "酒店", placeholder: "请输入城市搜索酒店" },
				{ title: "机票", placeholder: "" }
			],

			// options2: {
			// 	"攻略": "搜索城市",
			// 	"酒店": "请输入城市搜索酒店",
			// 	"机票": ""
			// },

			// tab栏的索引
			current: 0
		}
	},

	async mounted(){
        // 返回一个pomise, res就是axios的resolve的参数（也就是.then的回调函数的参数）
        const res = await this.$axios({
            url: "/scenics/banners"
        });

        const {data} = res.data;
        this.banners = data;
	},

	methods: {
		// 点击tab栏时候触发
		handleTabChange(index){
			this.current = index;

			if(index === 2){
				this.$router.push("/air")
			}
		}
	}
>>>>>>> 2554d57f36409b59830665ba68660ab3f0572349
}
</script>

<style scoped lang="less">
<<<<<<< HEAD
    .el-carousel__item h3 {
        color: #475669;
        font-size: 18px;
        opacity: 0.75;
        line-height: 300px;
        margin: 0;
    }
  
    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }
  
    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }
    /deep/ .el-carousel__container{
        height:700px;
    }
    .banner-image{
        width:100%;
        height:100%;
    }
    .container{
=======
.container{
>>>>>>> 2554d57f36409b59830665ba68660ab3f0572349
    min-width:1000px;
    margin:0 auto;
    position:relative;

<<<<<<< HEAD
    .banner-content{
        z-index:9;
        width:1000px;
        position:absolute;
        left:50%;
        top:45%;
        margin-left: -500px;
        border-top:1px transparent solid;

        .search-bar{
            width:552px;
            margin:0 auto;
        }

        .search-tab{
            .active{
                i{
                color:#333;
                }
                &::after{
                background: #eee;
                }
            }

=======
    /deep/ .el-carousel__container{
        height:700px;
    }

    .banner-image{
        width:100%;
        height:100%;
    }

    .banner-content{
        z-index:9;
        width:1000px;
        position:absolute;
        left:50%;
        top:45%;
        margin-left: -500px;
        border-top:1px transparent solid;

        .search-bar{
            width:552px;
            margin:0 auto;
        }

        .search-tab{
            .active{
                i{
                color:#333;
                }
                &::after{
                background: #eee;
                }
            }

>>>>>>> 2554d57f36409b59830665ba68660ab3f0572349
            span{
                width:82px;
                height:36px;
                display:block;
                position: relative;
                margin-right:8px;
                cursor: pointer;

                i{
                position:absolute;
                z-index:2;
                display: block;
                width:100%;
                height:100%;
                line-height:30px;
                text-align:center;
                color:#fff;
                }

                &:after{
                position: absolute;
                left:0;
                top:0;
                display:block;
                content: "";
                width:100%;
                height:100%;
                border: 1px rgba(255,255,255,.2) solid;
                border-bottom: none;
                transform: scale(1.1,1.3) perspective(.7em) rotateX(2.2deg);
                transform-origin: bottom left;
                background: rgba(0,0,0,.5);
                border-radius:1px 2px 0 0;
                box-sizing:border-box;
                }
            }
        }

        .search-input{
            width:550px;
            height:46px;
            background:#fff;
            border-radius: 0 4px 4px 4px;
            border: 1px rgba(255,255,255,.2) solid;
            border-top:none;
            box-sizing: unset;

            input{
                flex:1;
                height:20px;
                padding: 13px 15px;
                outline: none;
                border:0;
                font-size:16px;
            }

            .el-icon-search{
                cursor :pointer;
                font-size:22px;
                padding:0 10px;
                font-weight:bold;
            }
        }
    }
}
<<<<<<< HEAD
</style>
=======
</style>
>>>>>>> 2554d57f36409b59830665ba68660ab3f0572349
