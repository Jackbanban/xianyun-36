
// state是vuex实现组件之间的传值
export const state = () => ({
    userInfo:{
        user:{}
    }
})
// mutations同步传递 ，里面是函数
export const mutations = {
    //保存用户信息到state
    setUserInfo(state,data){
        state.userInfo = data
    }
}
export const actions = {
    // 封装异步调用登录的方法
    async login(store,data){
        const res = await this.$axios({
            url:'/accounts/login',
            method:'POST',
            data
        })
        if(res.status === 200){
            store.commit('setUserInfo',res.data)
        }
        return res
    },

    //接受验证码
    async sendCaptcha(store,tel){
        const res = await this.$axios({
                        url:'/captchas',
                        method:'POST',
                        data:{
                            tel
                        }
                    })
        return res
    },

    //注册
    async register (store,data){
        const res = await this.$axios({
               url:'/accounts/register',
               method:'POST',
               data
        })
        if(res.status === 200){
              store.commit('setUserInfo',res.data)
        }
        return res
    }
}

