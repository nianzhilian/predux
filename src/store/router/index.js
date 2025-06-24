import { BrowserRouter as Router, Route, Link,Switch ,NavLink} from "react-router-dom";
import { ConnectedRouter } from "../../connected-react-router";
import { Provider,connect } from "../../react-redux";
import store from "..";
import history from "../history";
import { push,createLoactionChange } from "../../connected-react-router/action-creater";
function UseLink(props) {
  return (
    <>
      <NavLink style={{marginRight: '15px'}} to="/">首页</NavLink>
      <NavLink to="/home">home页</NavLink>
    </>
  );
}

function Index(props) {
  return (
    <>
    <div>首页</div>
    <button onClick={props.handleClick}>跳转至home页</button>
    </>
  );
}

const mapDispatchToProps = (dispatch)=>{
  return {
    handleClick(){
      dispatch(push('/home'))
    }
  }
}

Index = connect(null,mapDispatchToProps)(Index);

function Home() {
  return <div>home页面</div>;
}
//路由组件  根据地址匹配组件
//如果不加switch 会匹配多个
//这里 我们只匹配一个
export default function () {
  return (
    <ConnectedRouter history={history}>
      <UseLink />
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/" component={Index} />
      </Switch>
    </ConnectedRouter>
  );
}
