import React, {
  useId,
  useState,
  useEffect,
  useReducer,
  useCallback,
  useImperativeHandle,
  useRef,
  useMemo,
  useContext,
  createRef,
} from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter,
  Link,
  Redirect,
} from "react-router-dom";
import { Container, Alert, Button, AlertHeading } from "react-bootstrap";
import reportWebVitals from "./reportWebVitals";
import {
  Transition,
  CSSTransition,
  SwitchTransition,
  TransitionGroup,
} from "react-transition-group";
import queryString from "query-string";
import { v4 as uuid } from "uuid";
//只运行一次该模块不做任何的导入
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import "animate.css";
import { configureStore } from "@reduxjs/toolkit";
import { applyMiddleware } from "redux";
// import { createStore,bindActionCreators } from "./redux";
import rootReducer from './store/reducer/index';
import loginUserActionCreater from "./store/action/loginUserAction";
import usersActionCreater from "./store/action/usersAction";
const root = ReactDOM.createRoot(document.getElementById("root"));

//中间件是一个函数 该函数是一个创建函数 接收下一个dispatch   并返回一个新的dispatch函数 以备下一个中间件接收

function logg1(store){
  return function(next){
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
    //下面的函数是真正的dispatch函数
    return function(action){
      console.log('日志2前',store.getState(),action);
      next(action);
      console.log('日志2后',store.getState(),action);
    }
  }
}

const store = configureStore({
  reducer:rootReducer,
  middleware:(getDefaultMiddleware)=>{
    console.log(getDefaultMiddleware)
    return [
      ...getDefaultMiddleware(),
      logg1,
      logg2
    ]
  }
})

store.dispatch(usersActionCreater({
  name:"你好啊"
}))

console.log(store.getState())

function App(){
  return (
    <div>
      张三
    </div>
  )
}

root.render(<App />)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
