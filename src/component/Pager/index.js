
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

export function Pager(props){
    const pagesNum = getPageTotal(props.total,props.limit);
    if(pagesNum == 0){
        return;
    }
    return (
        <div>
            <span>首页</span>
            <span>上一页</span>
            <span>下一页</span>
            <span>尾页</span>
            <span>当前页：</span>
        </div>
    )
}