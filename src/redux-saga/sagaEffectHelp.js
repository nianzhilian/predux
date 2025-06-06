/**
 * 类型集合
 */
export const effectTypes = {
    CALL:'CALL',
    PUT:'PUT',
    SELECT:'SELECT'
}

/**
 * effect对象特殊的属性名
 */
const specialEffectName = "@@redux-saga/IO";

//通过这个方法创建指令对象 通过指令对象进行进一步的处理
export function createEffect(type,payload){
    //判断类型是否存在 不存在抛出类型错误
    if(!Object.values(effectTypes).includes(type)){
        throw new TypeError("指令类型不存在")
    }
    return {
        //es6 的计算属性用法
        [specialEffectName]:true,
        type,
        payload
    }
}

/**
 * 
 * @param {*} obj 判断是否是指令对象
 */
export function isEffect(obj){
    if(typeof obj!=='object'){
        return false;
    }
    if(obj[specialEffectName]){
        return true;
    }
    return false;
}

