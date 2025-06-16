
import React from 'react'
//只运行一次该模块不做任何的导入
import './index.css'
/**
 * current 当前页
 * total 总共多少条数据
 * limit 每页显示的条数
 * panelNum  当页数比较多 要显示的页码总量
 * onChange 页码改变事件
 * @param {} props 
 */
// 4 5 6 7 8 9 10 11 12 13  5
//8 - 5 = 3
//3+10-1 12
//3 4 5 6 7 8 9 10 11 12
// 当前页   current 8  显示10个  

/**
 * 
 * @param {*} total 数据总数
 * @param {*} limit 每页显示的条数
 * @returns 总共多少页
 */
function getPageTotal(total,limit){
    return Math.ceil(total / limit);
}

/**
 * 获取要显示页码的起始值
 * @param {*} props 
 * @returns 
 */
function getMin(props){
    let min = props.current - Math.floor(props.panelNum / 2);
    if(min<1){
        min = 1;
    }
    return min;
}
/**
 * 获取要显示页码的结束值
 * @param {*} props 
 * @param {*} min 
 * @param {*} pagesNum 
 */
function getMax(props,min,pagesNum){
    let max = min + props.panelNum - 1;
    if(max > pagesNum){
        max = pagesNum;
    }
    return max;
}

function toPage(props,currentPage){
    //当前页跟要点击的页码相同 不做操作
    if(props.current == currentPage){
        return;
    }
    //分页组件知道当前切换到哪个页码了 但是不知道该做什么
    //外围的组件知道要干什么  但是不知道当前页码数 所以需要通知父组件要干什么
    props.onChangePage && props.onChangePage(currentPage);
}

export function Pager(props){
    const pagesNum = getPageTotal(props.total,props.limit);
    if(pagesNum == 0){
        return;
    }
    const min = getMin(props);
    const max = getMax(props,min,pagesNum);
    const pages = [];
    for(var i = min;i<=max;i++){
        //创建独立的作用域来隔离每次循环的变量状态
        (function(index){
            pages.push(<span key={index} className={props.current == index?'sp active':'sp'} onClick={()=>{toPage(props,index)}}>{i}</span>)
        })(i)
    }
    console.log(pages);
    return (
        <div className='page'>
            <span className={props.current == 1?'sp disabled':'sp'} onClick={()=>toPage(props,1)}>首页</span>
            <span className={props.current == 1?'sp disabled':'sp'} onClick={()=>toPage(props,props.current-1 < 1?1:props.current-1)}>上一页</span>
            {pages}
            <span className={props.current == pagesNum?'sp disabled':'sp'} onClick={()=>toPage(props,props.current+1>pagesNum?pagesNum:props.current+1)}>下一页</span>
            <span className={props.current == pagesNum?'sp disabled':'sp'} onClick={()=>toPage(props,pagesNum)}>尾页</span>
            <span>当前页：{props.current} / {pagesNum}</span>
        </div>
    )
}