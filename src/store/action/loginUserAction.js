export const LOGIN_USER = 'LOGIN_USER';
export default ()=>{
    return {
        type:LOGIN_USER,
        payload: {
            name: 'John Doe',
            id:1
        }
    }
}