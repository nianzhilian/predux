import { combineReducers } from "../../redux";
// import { combineReducers } from "redux";
import counter from "./counter";
import movies from "./movies";

// export default (state={},action)=>{
//     console.log('根reducer',state,action)
//     const newState = {
//         loginUser:loginReducer(state.loginUser,action),
//         users:usersReducer(state.users,action)
//     }
//     return newState;
// }

console.log(combineReducers)

export default combineReducers({
    counter,
    movies
});