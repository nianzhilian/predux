

function test(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(Math.random()>0.5){
                resolve("promise完成了")
            }else{
                reject("promise报错了");
            }
        }, 2000);
    })
}
export default function* (){
    let res = yield test();
    console.log("接收到的promise结果",res);
    console.log('结束')
}