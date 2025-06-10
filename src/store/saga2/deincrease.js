
import { put,call,delay,select,take,fork,cancel,takeEvery} from "../../redux-saga/effect";
//import { take } from 'redux-saga/effects'
import {decrease} from "../action/counter";
import addUser from "../action/usersAction";
function* test(){
    yield delay(10000)
    yield 123;
    yield 456;
    return '完成'
}
export default function* (){
    //实时监听 action类型 当action触发的时候 就会运行 对应的generator函数
    const task = yield takeEvery(decrease,test);
    yield delay(10000);
    yield cancel(task);
}