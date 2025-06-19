import { combineReducers } from "../../redux";
// import { combineReducers } from "redux";
import { connectRouter } from "../../connected-react-router";
import counter from "./counter";
import movies from "./movies";
import history from "../history";

// export default (state={},action)=>{
//     console.log('根reducer',state,action)
//     const newState = {
//         loginUser:loginReducer(state.loginUser,action),
//         users:usersReducer(state.users,action)
//     }
//     return newState;
// }

console.log(combineReducers)
console.log(history)
//connectRouter  返回一个处理router的reducer
export default combineReducers({
    counter,
    movies,
    router:connectRouter(history)
});