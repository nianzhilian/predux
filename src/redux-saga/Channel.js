/**
 * 订阅频道
 */
export default class Channel{
    listeners = {};
    /**
     * 添加一个订阅者
     * @param {*} prop 属性
     * @param {*} func 订阅函数
     */
    take(prop,func){
        if(this.listeners[prop]){
            this.listeners.push(func);
        }else{
            this.listeners[prop] = [func]
        }
    }
    /**
     * 发布者
     * @param {*} prop 属性 
     * @param  {...any} args 参数
     */
    put(prop,...args){
        if(this.listeners[prop]){
            var fns = this.listeners[prop];
            //删除订阅者
            delete this.listeners[prop];
            fns.forEach(fn => {
                fn(...args);
            });
        }
    }
}