import React, { useContext, useState,useEffect} from 'react'
import ctx from './ctx'

export default function(mapStateToProps,mapStateToDispatch){
    return function(Com){
        function Temp(props){
            const store = useContext(ctx)
            //初始化数据
            const [state, setstate] = useState(mapStateToProps && mapStateToProps(store.getState()))
            useEffect(() => {
                //添加监听器 action触发的时候 调用订阅者 改变数据 让父组件重新渲染  父组件从新渲染之后 数据发生变化 也会导致子组件重新渲染
                return store.subscribe(function(){
                    const newState = mapStateToProps && mapStateToProps(store.getState());
                    setstate(newState)
                })
            }, [store]);
            var handles = {};
            if(mapStateToDispatch){
                if(typeof mapStateToDispatch=='function'){
                    handles = mapStateToDispatch(store.dispatch)
                }
            }
            return (
                <Com {...state} {...handles} {...props} />
            )
        }
        Temp.displayName = Com.displayName || Com.name
        return Temp;
    }
}