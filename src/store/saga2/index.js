
import { put,call,delay,select,take,fork,cancel,takeEvery,all} from "../../redux-saga/effect";
import increase from "./increase";
import deincrease from "./deincrease";
export default function* (){
    yield all([increase(),deincrease()]);
    console.log('所有迭代器完成')
}