export default class Task{
    constructor(next,callobj){
        this.next = next;
        this.callObj = callobj;
        this.callObj.cb = ()=>{
            this.resolve && this.resolve();
        }
    }
    cancel(){
        this.next(null,null,true)
    }
    toPromise(){
       return new Promise((resolve,reject)=>{
            this.resolve = resolve;
        })
    }
}