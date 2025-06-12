import { put,takeEvery,call, select } from "../../redux-saga/effect";
import {actionTypes} from '../action/movies/searchResultAction'
import { setIsLoading,setListAndTotal } from "../action/movies/searchResultAction";
import { getSearchMovies } from "../../service/movies";
function* fetchList(){
    //设置false
    yield put(setIsLoading(true));
    const searchObj = yield select((state)=>(state.movies.search))
    //获取数据 有可能会获取失败 针对失败进行处理
    try {
        //根据条件筛选数据
        let res = yield call(getSearchMovies,searchObj);
        //触发dispatch 将数据更新到仓库中
        yield put(setListAndTotal(res.movieList,res.movieTotal));
    } catch (error) {
        console.log(error)
    }finally{
        //内部触发action
        yield put(setIsLoading(false));
    }
}
export default function* (){
    //监听获取数据的action
    /**
     * 第一个参数 是要监听的action 类型
     * 第二个参数 是 当监听到action触发时 执行后面的动作
     */
    yield takeEvery(actionTypes.fetchList,fetchList)
}