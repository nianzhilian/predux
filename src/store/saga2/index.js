
import { put,call,delay,select,take,fork,cancel,takeEvery,all} from "../../redux-saga/effect";
import increase from "./increase";
import deincrease from "./deincrease";
import movies from "./movies";
export default function* (){
    yield all([increase(),deincrease(),movies()]);
    console.log('所有迭代器完成')
}