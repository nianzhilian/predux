// import { configureStore } from "@reduxjs/toolkit";
// import { applyMiddleware } from "redux";
import { createStore,bindActionCreators,applyMiddleware,thunk } from "../redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import logger from "redux-logger";
// import { thunk } from "redux-thunk";
import rootReducer from './reducer';
import createSagaMiddleware from "../redux-saga";
//import createSagaMiddleware from "redux-saga";
import rootSaga from './saga2';
import loginUserActionCreater from "./action/loginUserAction";
import usersActionCreater,{edit} from "./action/usersAction";
import { increase,decrease } from "./action/counter";
//中间件是一个函数 该函数是一个创建函数 接收下一个dispatch   并返回一个新的dispatch函数 以备下一个中间件接收

function logg1(store){
  console.log(store)
  return function(next){
    console.log(next)
    //下面的函数是真正的dispatch函数
    return function(action){
      console.log('日志1前',store.getState(),action);
      next(action);
      console.log('日志1后',store.getState(),action);
    }
  }
}

function logg2(store){
  return function(next){
    console.log(next)
    //下面的函数是真正的dispatch函数
    return function(action){
      console.log('日志2前',store.getState(),action);
      next(action);
      console.log('日志2后',store.getState(),action);
    }
  }
}
console.log(Object.keys(thunk));
const sagaMid = createSagaMiddleware();
const store =  composeWithDevTools(applyMiddleware(sagaMid,thunk,logger))(createStore)(rootReducer);
sagaMid.run(rootSaga);
export default store;