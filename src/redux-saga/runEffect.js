import { runPutEffect } from "./effect/put";
import { effectTypes } from "./sagaEffectHelp";
/**
 * 
 * @param {*} env 运行上下文
 * @param {*} effect 指令对象
 * @param {*} next 运行next
 */
export default function(env,effect,next){
    switch (effect.type) {
        case effectTypes.PUT:
            runPutEffect(env,effect,next);
            break;
    
        default:
           throw new Error("类型无效");
    }
}