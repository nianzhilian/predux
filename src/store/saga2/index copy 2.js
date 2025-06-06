
import { put,call,delay,select} from "../../redux-saga/effect";
import addUser from "../action/usersAction";
export default function* (){
    const state = yield select((state)=>state.counter);
    console.log(state);
}