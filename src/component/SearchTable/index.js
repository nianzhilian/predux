import React from 'react'
//只运行一次该模块不做任何的导入
import './index.css'
export default function SearchTable(props){
    const datas = props.datas.map((item)=>(
        <tr key={item._id}>
            <td>
                {item.title}
            </td>
            <td>
                {item.url}
            </td>
        </tr>
    ))
    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>标题</th>
                    <th>路径</th>
                </tr>
            </thead>
            <tbody>
                {datas}
            </tbody>
        </table>
    )
}