import { takeEvery,select, call,cps } from "redux-saga/effects";
import { ADD_UEER } from "../action/usersAction";

function mockStudent(condition,callback){
    console.log(arguments);
    console.log("mockStudents", condition);
    setTimeout(() => {
        if (Math.random() > 0.5) {
            //nodejs风格
            callback(null, {
                cont: 78,
                datas: [
                    { id: 1, name: "abc" },
                    { id: 2, name: "bcd" }
                ]
            })
        }
        else {
            callback(new Error("出错了！！！1"), null);
        }
    }, 3000);
}

//回调模式的异步
function* fecthStudent(){
    //获取当前厂库的state
    //直接调用 返回的是指令对象 通过指令对象 去做进一步的处理
    const storeState = yield select();
    try {
        const resp = yield cps(mockStudent,storeState);
        console.log(resp);
    } catch (error) {
        console.log(error.message)
    }
    
}

export default function* (){
    yield takeEvery(ADD_UEER,fecthStudent)
    console.log('正在监听fetchstudent')
}