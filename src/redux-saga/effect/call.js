import { createEffect,effectTypes } from "../sagaEffectHelp";
import isPromise from "is-promise";
/**
 * 
 * @param {*} fn 第一个参数可能是一个函数 或者 数组
 * 数组的话  第一个元素是要绑定的上下文 第二个元素是要运行的函数
 * @param  {...any} args 剩余参数
 * @returns 
 */
export function call(fn,...args){
    let context = null,func=fn;
    if(Array.isArray(fn)){
        context = fn[0];
        func = fn;
    }
    return createEffect(effectTypes.CALL,{
        context,
        func,
        args
    })
}

export function runCallEffect(env,effect,next){
    const {context,func,args} = effect.payload;
    let res = func.call(context,...args);
    /** res 运行func返回的  有可能是promise 等待promise完成*/
    if(isPromise(res)){
        res.then((r)=>next(r)).catch(error=>next(null,error));
    }else{
        next(res);
    }
}