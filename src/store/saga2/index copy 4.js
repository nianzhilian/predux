
import { put,call,delay,select,take,fork,cancel} from "../../redux-saga/effect";
//import { take } from 'redux-saga/effects'
import {INCREASE} from "../action/counter";
import addUser from "../action/usersAction";
function* test(){
    yield delay(10000)
    yield 123;
    yield 456;
    return '完成'
}
export default function* (){
    //开启一个新的任务线 不会对当前任务线造成阻塞
    var task = yield fork(test,1,2,3);
    console.log(task);
    //返回一个完整的action {type:"increase"}
    let res = yield take(INCREASE);
    yield cancel(task);
    console.log(res);
}