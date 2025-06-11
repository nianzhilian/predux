import combineReducers from "../../../redux/combineReducers";
import searchReducer from "./searchReducer";
import searchResult from "./resultReducer";

export default combineReducers({
    search:searchReducer,
    result:searchResult
})