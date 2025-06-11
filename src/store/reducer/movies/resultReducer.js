import { actionTypes } from "../../action/movies/searchResultAction";

const initState = {
    datas:[],
    total:0,
    isLoading:false
}

export default function searchResult(state = initState,{type,payload}){
    switch (type) {
        case actionTypes.setListAndTotal:
            //合并
            return {
                ...state,
                ...payload
            }
        case actionTypes.setIsLoading:
            //合并
            return {
                ...state,
                isLoading:payload
            }
        default:
            return state;
    }
}