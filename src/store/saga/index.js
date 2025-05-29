import { all } from "redux-saga/effects";
import studentTask from "./studentTask";
import countTask from "./counterTask";
//入口saga
export default function* (){
    //yield 后面跟指令  指令本身是一个函数 调用指令函数 返回的是一个指令对象
    //saga会接收到该指令对象，进行各种处理
    /**all指令接收数组  每个数组元素是一个生成器 */
    /** all里面的所有任务完成则 saga运行结束 */
    //all 会等待所有的生成器全部完成之后才会进行下一步处理
    //会阻塞
    yield all([studentTask()]);
    console.log('saga运行结束');
}