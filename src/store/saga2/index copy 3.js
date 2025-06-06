
import { put,call,delay,select,take} from "../../redux-saga/effect";
//import { take } from 'redux-saga/effects'
import {INCREASE} from "../action/counter";
import addUser from "../action/usersAction";
export default function* (){
    //返回一个完整的action {type:"increase"}
    const res = yield take(INCREASE);
    console.log(res);
}