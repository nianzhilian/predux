import { takeEvery } from "redux-saga/effects";
import { ADD_UEER } from "../action/usersAction";

function mockStudent(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(Math.random()>0.5){
                resolve("拿到学生")
            }else{
                reject('错误');
            }
        }, 2000);
    })
}

function* fecthStudent(){
    try {
        let resp = yield mockStudent();
        console.log(resp);
    } catch (error) {
        console.log(error)
    }
}

export default function* (){
    yield takeEvery(ADD_UEER,fecthStudent)
    console.log('正在监听fetchstudent')
}