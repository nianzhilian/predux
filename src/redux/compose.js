export default function(...middlewares){
    return middlewares.reduce((a,b)=>(...args)=>a(b(...args)))
    // return function(...args){
    //     let lastReturn = null;
    //     for (let index = middlewares.length-1; index >=0; index--) {
    //         //最后一个 将默认的dispatch传递给最后一个中间件  该中间件调用返回一个新的dispatch  并将这个新的dispatch作为参数传递给下一个中间件
    //         if(index == middlewares.length-1){
    //             //该函数接收一个dispatch函数 并返回一个新的dispatch函数
    //             lastReturn = middlewares[index](...args)
    //         }else{
    //             lastReturn = middlewares[index](lastReturn);
    //         }
    //         lastReturn.displayName = `applayMiddle-${index}`;
    //     }
    //     return lastReturn;
    // }
}