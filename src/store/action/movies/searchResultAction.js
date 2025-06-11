//三个类型 datas  total  isLoading
export const actionTypes = {
    setListAndTotal:"setListAndTotal",
    setIsLoading:"setIsLoading",
    fetchList:"fetchList"//监听此action获取列表数据
}

//以下都是纯函数 没有任何的副作用 只是返回一个action对象
export function fetchList(){
    return {
        type:actionTypes.fetchList
    }
}

export function setListAndTotal(arr,total){
    return {
        type:actionTypes.setListAndTotal,
        payload:{
            datas:arr,
            total
        }
    }
}

export function setIsLoading(isLoading){
    return {
        type:actionTypes.setIsLoading,
        payload:isLoading
    }
}


