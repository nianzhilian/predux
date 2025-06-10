export const INCREASE = "increase";
export const DECREASE = "decrease";
export const AsyncIncrease = "asyncIncrease";
export const AsyncDecrease = "asyncDecrease";

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

export function asyncIncrease(){
    return {
        type:AsyncIncrease
    }
}

export function asyncDecrease(){
    return {
        type:AsyncDecrease
    }
}
