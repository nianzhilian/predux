import React from "react";
//import { connect } from 'react-redux';
import connect from "../../react-redux/connect";
import SearchBar from "../../component/SearchBar";
import SearchTable from "../../component/SearchTable";
import { Pager } from "../../component/Pager";
import { change } from "../action/movies/searchAction";
import { fetchList } from "../action/movies/searchResultAction";
import store from "..";
import {
  increase,
  decrease,
  asyncIncrease,
  asyncDecrease,
} from "../action/counter";

let mapStateToProps = function (state) {
  return {
    defaultValue: state.movies.search,
  };
};

let mapDispatchToProps = function (dispatch) {
  return {
    onSearch: function (state) {
      //触发修改搜索的state
      dispatch(change(state));
      //重新获取数据
      dispatch(fetchList())
    },
  };
};

const SearchContainer = connect(mapStateToProps, mapDispatchToProps)(SearchBar);

mapStateToProps = function (state) {
  return {
    datas: state.movies.result.datas,
  };
};

const SearchTableContainer = connect(mapStateToProps)(SearchTable);


/**
 * current 当前页
 * total 总共多少条数据
 * limit 每页显示的条数
 * panelNum  当页数比较多 要显示的页码总量
 * onChange 页码改变事件
 * @param {} props 
 */

mapStateToProps = function(state){
  return {
    current:state.movies.search.page,
    total:state.movies.result.total,
    panelNum:10,
    limit:state.movies.search.size
  }
}

mapDispatchToProps = function(dispatch){
  return {
    onChangePage(newPage){
      console.log("newPage:"+newPage)
      //更改页数
      dispatch(change({
        page:newPage
      }))
      //重新拉取列表数据
      dispatch(fetchList())
    }
  }
}

const PageContainer = connect(mapStateToProps,mapDispatchToProps)(Pager)


function Loading(props) {
  return (
    <>
      {props.isLoading && (
        <div
          style={{
            position: "fixed",
            top: 0,
            bottom: 0,
            width: "100%",
            background: "rgba(0,0,0,.5)",
            color: "#fff",
            display:'table',
            height:'100%'
          }}
        >
          <div
            style={{
              display: "table-cell",
              verticalAlign: "middle",
              textAlign: "center",
              fontSize: "2em",
            }}
          >
            正在加载中
          </div>
        </div>
      )}
    </>
  );
}

mapStateToProps = function (state) {
  return {
    isLoading: state.movies.result.isLoading,
  };
};

const LoadingTmp = connect(mapStateToProps)(Loading);

export default class extends React.Component {
  //组件挂载完毕 触发 ajax请求的action
  componentDidMount() {
    store.dispatch(fetchList());
  }
  render() {
    console.log("最大的父组件重新渲染");
    return (
      <>
        <SearchContainer />
        <SearchTableContainer />
        <PageContainer />
        <LoadingTmp />
      </>
    );
  }
}
