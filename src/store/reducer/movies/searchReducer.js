import { CHANGE } from "../../action/movies/searchAction";

const initState = {
    page:1,
    size:20
}

export default function(state = initState,action){
    switch (action.type) {
        case CHANGE:
            //将传递的参数跟上一次的状态进行合并
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}