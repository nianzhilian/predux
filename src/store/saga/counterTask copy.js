
import { take } from "redux-saga/effects";
import { ADD_UEER } from "../action/usersAction";
function* countTask(){
    //一直监听take指令
    while(true){
        //take指令只监听一次
        let res = yield take(ADD_UEER);
        //res 得到的是一个完整的一个action对象
        console.log('得到一个完整的一个action对象',res)
    }
}

export default countTask;