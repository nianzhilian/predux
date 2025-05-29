
import { take,takeEvery,delay,put} from "redux-saga/effects";
import loginUser,{ LOGIN_USER } from "../action/loginUserAction";
import addUser, { ADD_UEER } from "../action/usersAction";

//delay 阻塞 延时多久继续往下执行
//put 重新触发一个action
let i = 1;
function* addUserCreateGeneartor(){
    console.log('这里会执行1---开始');
    let res = yield delay(5000);
    if(i<3){
        res = yield put(addUser({
            name:"李四"+Math.random()
        }))
    }
    
    i++;
    console.log(res);
    console.log('这里会执行1---结束')
}

function* loginUserCreateGenerator(){
    console.log('这里会执行2---开始');
    yield delay(5000);
    yield put(loginUser());
    console.log('这里会执行2---结束');
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