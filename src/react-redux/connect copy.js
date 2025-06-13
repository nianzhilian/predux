import React from 'react'
import ctx from './ctx'

export default function(mapStateToProps,mapDispatchToProps){
    return function(Com){
        class Temp extends React.PureComponent{
            //指定上下文
            //会找就近的 context
            //通过this.context 获取上下文的数据
            static contextType = ctx;
            //将事件监听回调 传递给被包装的组件
            getEventHandlers(){
                if(typeof mapDispatchToProps === 'function'){
                   return mapDispatchToProps(this.store.dispatch)
                }
            }

            constructor(props,context){
                super(props,context);
                this.store = this.context;
                if(mapStateToProps){
                    this.state = mapStateToProps(this.store.getState())
                }
                if(mapDispatchToProps){
                    this.handles = this.getEventHandlers(this.store.dispatch);
                }

                //添加当dispatch之后  厂库的数据发生变化了  让组件重新渲染
                //添加订阅 返回一个函数  当组件卸载时 取消订阅
                //当dispatch的时候  状态更新完毕之后 会遍历循环调用订阅者 (在这里做状态的更新)
                this.cancle = this.store.subscribe(()=>{
                    //更新状态 让组件重新渲染
                    this.setState(mapStateToProps(this.store.getState()))
                })
            }

            componentWillUnmount(){
                //组件将要卸载时 取消订阅
                this.cancle && this.cancle();
            }

            render(){
                console.log(Temp.dispalyName+'组件渲染了')
                return (
                    <Com {...this.state} {...this.handles} />
                )
            }
        }
        Temp.dispalyName = Com.dispalyName || Com.name;
        return Temp;
    }
    
}