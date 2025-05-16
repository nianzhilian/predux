export const ADD_UEER = 'add';
export const EDIT="edit";
//通过redux-thunk 可以 dispatch一个函数
export function edit(){
    return async function(dispatch,getState){
        dispatch(addUser({
            name:"大海"
        }))
        return getState();
    }
}
export default function addUser(user){
    return {
        type:ADD_UEER,
        payload:user
    }
}