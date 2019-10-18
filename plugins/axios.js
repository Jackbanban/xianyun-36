<<<<<<< HEAD
//单独引用
import {Message} from "element-ui";

// nuxt插件的固定写法
// context包含nuxt下所有的方法，固定的参数
export default ((context)=>{
    // 拦截错误的响应信息，和以前项目中main.js中拦截器不一样
    // main.js中拦截器：拦截所有的请求信息
    // 当前的拦截只拦截错误，如果请求错误就会执行onError中的函数
    context.$axios.onError(res=>{
        // res是错误对象，Error的对象通过response获取详细信息 原生js中的
        const {message,statusCode} = res.response.data
=======
import { Message } from 'element-ui';

// nuxt插件的固定写法
// context包含nuxt下所有的方法，固定有的参数
export default (context) => {
    // 拦截错误的响应信息， 根以前项目的中main.js中拦截器不一样.
    // main.js中拦截器: 拦截所有的请求响应
    // 当前的拦截只拦截错误,如果请求错误就会执行onError中的函数
    context.$axios.onError(res => {
        // res是错误的对象, Error的对象可以通过response获取详细信息
        const {message, statusCode} = res.response.data;
>>>>>>> 2554d57f36409b59830665ba68660ab3f0572349

        if(statusCode === 400){
            Message.error(message)
        }

        if(statusCode === 403){
<<<<<<< HEAD
            // console.log(context)
            // redirect重定向，context里面的原生方法
            context.redirect('/user/login')
        }


    })
})


// export default function({$axios, redirect}){
//     $axios.onError(err => {
//         const {statusCode, message} = err.response.data;
        
//         // 还未使用
//         // if(statusCode === 401 || statusCode === 403){
//         //     Message.warning({message: "请先登录"});
//         //     redirect("/user/login");
//         // }

//         if(statusCode === 400){
//             Message.warning({message});
//         }
//     })
// }
=======
            // 路由重定向的方法
            context.redirect("/user/login");
        }
    })
}
>>>>>>> 2554d57f36409b59830665ba68660ab3f0572349
