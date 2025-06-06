
import { put,call,delay,select,take,fork,cancel} from "../../redux-saga/effect";
//import { take } from 'redux-saga/effects'
import {INCREASE} from "../action/counter";
import addUser from "../action/usersAction";
function* test(){
    yield delay(20000)
    yield 123;
    yield 456;
    return '完成'
}
export default function* (){
    //返回一个完整的action {type:"increase"}
    var task =yield fork(test,1,2,3);
    console.log(task);
    let res = yield take(INCREASE);
    yield cancel(task);
    console.log(res);
}