import { ADD_UEER } from "../action/usersAction";
export default function usersReducer(state = [], action) {
    console.log('users:',state,action);
    switch (action.type) {
        case ADD_UEER:
            return [
                ...state,
                action.payload
            ];
        default:
            return state;
    }
}