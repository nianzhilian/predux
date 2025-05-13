export default function(obj){
    return function(state={},action){
        let newState = {};
        for (const key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key)) {
                const reducer = obj[key];
                newState[key] = reducer(state[key],action);
            }
        }
        return newState;
    }
}