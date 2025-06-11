
//下面整个返回的是一个新的promise  完成状态看处理过程  完成数据 看返回值
    /*console.log(fetch(`/api/movies?page=${page}&size=${size}`).then((res)=>{
        //如果没有做处理 则状态和 数据跟前一个promise一致   
        //如果做处理了  看处理的过程  处理过程中没有报错 那么就是完成状态  完成的数据取决于 处理过程有没有返回值
        //返回一个新的任务对象 
        //新任务的对象 与该任务的状态和数据一致
        return res
    }))*/
/**
 * 
 * @param {*} page 
 * @param {*} size 
 * @returns 
 */

export async function getMovies(page = 1,size=10) {
    
    return await fetch(`/api/movies?page=${page}&size=${size}`).then((res)=>{
        return res.json();
    }).then(res=>{
        return res.data;
    })
}

/**
 * 
 * @param {*} 当传递的对象不存在时 为其设置默认值
 * 输入页数 查询第几页 以及每页要显示的条数
 * @returns 
 */
export async function getSearchMovies({page=1,size=20}={}){
    return await getMovies(page,size)
}