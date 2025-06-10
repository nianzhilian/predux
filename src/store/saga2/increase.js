
import { put,call,delay,select,take,fork,cancel,takeEvery} from "../../redux-saga/effect";
//import { take } from 'redux-saga/effects'
import {INCREASE,asyncIncrease,asyncDecrease,increase,decrease,AsyncIncrease,AsyncDecrease} from "../action/counter";
import addUser from "../action/usersAction";

function* asyncIncreaseFn(){
    yield delay(2000);
    yield put(increase())
}

function* asyncDecreaseFn(){
    yield delay(2000);
    yield put(decrease())
}

export default function* (){
    yield takeEvery(AsyncIncrease,asyncIncreaseFn);
    yield takeEvery(AsyncDecrease,asyncDecreaseFn);
    console.log('正在监听asyncIncrease , asyncDecrease');
}