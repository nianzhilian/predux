import { fork } from "./fork";
import { take } from "./take";
export function takeEvery(actionType,fn,...args){
   return fork(function* (){
        while(true){
            const action = yield take(actionType);
            yield fork(fn,...args.concat(action));
        }
    })
}