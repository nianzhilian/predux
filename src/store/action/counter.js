export const INCREASE = "increase";
export const DECREASE = "decrease";

//action创建函数
export function increase(){
    return {
        type:INCREASE
    }
}

export function decrease(){
    return {
        type:DECREASE
    }
}