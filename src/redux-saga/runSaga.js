
import isGenerator from "is-generator";
import isPromise from "is-promise";
import { isEffect } from "./sagaEffectHelp";
import runEffect from "./runEffect";
import Task from "./task";
/**
 * 
 * @param {*} env 上下文
 * @param {*} generator 生成器函数
 * @param  {...any} args 剩余参数
 */

function abc(){
    let i = 0;
    return {
        add:function(){
            i = Math.random()
        },
        getValue:function(){
            return i;
        }
    }
}

export default function(env,generator,...args){
    var bb = abc();
    bb.add();
    const iterator = generator();
    /**判断是否是个生成器函数 如果是生成器函数 不断迭代直到结束 */
    if(isGenerator(iterator)){
       //一直迭代 直到结束
       next();
    }else{
        console.log("是个普通函数")
    }
    
    /**
     * 
     * @param {*} nextValue 传递的上一次迭代的值
     * @param {*} err 错误信息
     * @param {*} isPas 是否结束
     */
    function next(nextValue,err,isPas){
        let res;
        if(err){
            console.log('报错了')
            //如果错误抛出异常
            res = iterator.throw(err);
            console.log("报错的结果："+res);
        }else if(isPas){
            //如果结束 则结束整个迭代
            res = iterator.return();
        }else{
            //一直迭代
            res = iterator.next(nextValue);
        }
        const {value,done} = res;
        console.log(value,done,bb.getValue())
        if(done){
            console.log("迭代结束:"+bb.getValue(),isPas)
            return;
        }

        //1、是否是指令对象 的处理
        //2、是否是promise 的处理
        //3、普通函数的处理

        if(isEffect(value)){
            runEffect(env,value,next);
        }else if(isPromise(value)){
            value.then((r)=>next(r)).catch((error)=>next(null,error))
        }else{
            next(value)
        }
    }   
    return new Task(next);
}