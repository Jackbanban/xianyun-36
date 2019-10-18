<<<<<<< HEAD
export const state = ()=>{
    return{
        history:[]
=======
export const state = () => {
    return {
        // 搜索的历史记录
        history: []
>>>>>>> 2554d57f36409b59830665ba68660ab3f0572349
    }
}

export const mutations = {
<<<<<<< HEAD
    setHistory(state,data){
        state.history.unshift(data)
=======
    // 设置history的值,data是搜索表单的对象
    setHistory(state, data){
        // 把最新的记录追加到第一个
        state.history.unshift(data);
>>>>>>> 2554d57f36409b59830665ba68660ab3f0572349
    }
}