
import { put } from "../../redux-saga/effect";
import addUser from "../action/usersAction";
export default function* (){
    let res = yield put(addUser({
        name:'李四'
    }))
    console.log(res)
    console.log('生成器函数运行结束')
}