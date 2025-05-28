
import { take,takeEvery } from "redux-saga/effects";
import { LOGIN_USER } from "../action/loginUserAction";
import { ADD_UEER } from "../action/usersAction";

function* addUserCreateGeneartor(){
    console.log("这是一个普通函数开始");
    let res = yield 123;
    console.log("123res:"+res);
}

function* loginUserCreateGenerator(){
    console.log("这是login的开始");
    let res = yield 456;
    console.log("456res:"+res);
}

//takeEvery 会不断的监听action  当监听到action后 运行一个生成器函数
/** 特点：永远不会结束当前生成器函数 */
function* countTask(){
    //监听到之后会阻塞
    console.log("count开始")
    let res = yield takeEvery(ADD_UEER,addUserCreateGeneartor);
    res = yield takeEvery(LOGIN_USER,loginUserCreateGenerator);
    console.log(res);
    console.log("使用了takeEvery指令 没有监听到action的时候 这个打印会执行 当监听到之后 就不会执行了 且不会结束当前的生成器");
}

export default countTask;