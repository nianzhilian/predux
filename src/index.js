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
import addUser from "./store/action/usersAction";
import loginUserAction from "./store/action/loginUserAction";
import { increase,decrease,asyncIncrease,asyncDecrease } from "./store/action/counter";
import store from "./store";
import { Provider } from "react-redux";
import CountContainer from "./store/test";
const root = ReactDOM.createRoot(document.getElementById("root"));



console.log(store.getState())

window.adduer = function(){
  store.dispatch(addUser({
    name:"张三"
  }))
}

window.loginUser = function(){
  store.dispatch(loginUserAction());
}

window.increase = function(){
  store.dispatch(increase());
}

window.decrease = function(){
  store.dispatch(decrease());
}

window.asyncIncrease = function(){
  store.dispatch(asyncIncrease())
}

window.asyncDecrease = function(){
  store.dispatch(asyncDecrease());
}

function App(){
  return (
    <Provider store={store}>
      <CountContainer />
    </Provider>
  )
}

root.render(<App />)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
