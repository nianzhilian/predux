import { LOGIN_USER } from "../action/loginUserAction";
export default function loginReducer(state = {}, action) {
    console.log("loginReducer:",state,action)
    switch (action.type) {
        case LOGIN_USER:
            return {
                ...state,
                user: action.payload
            };
        default:
            return state;
    }
}