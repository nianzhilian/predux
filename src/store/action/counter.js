export const INCREASE = "increase";
export const DECREASE = "decrease";

//action创建函数
export function increase(){
    return {
        type:increase
    }
}

export function decrease(){
    return {
        type:decrease
    }
}