
import { put,call,delay,select} from "../../redux-saga/effect";
import addUser from "../action/usersAction";
function test(a){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(Math.random()>0.5){
                resolve("promis完成")
            }else{
                reject("promise失败");
            }
        }, 3000);
    })
    
}
export default function* (){
    yield delay(5000);
    console.log("延迟了5秒");
    let res = yield call(test,1234);
    console.log("延迟了3秒执行",res);
    let state = yield select();
    console.log('厂库里的state',state);
}