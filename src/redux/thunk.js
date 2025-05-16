/**
 * 该函数会生成一个中间件 接收一个可选参数
 */
function createThunkMiddleWare(extra){
    return (store)=>(next)=>(action)=>{
        if(typeof action === 'function'){
            return action(store.dispatch,store.getState,extra)
        }
        return next(action);
    }
}
const thunk = createThunkMiddleWare();

//添加额外参数
thunk.setExtra = createThunkMiddleWare;

export default thunk;