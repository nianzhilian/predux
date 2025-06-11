export const CHANGE="change";

//定义action创建函数
export function change(condion){
    return {
        type:CHANGE,
        //参数
        payload:condion
    }
}