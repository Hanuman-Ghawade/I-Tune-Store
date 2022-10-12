
const initialState: number = 0;

const changeNumber= (state = initialState, action: { type: string; payload: number; }) => {
    switch (action.type) {
        case "INCREMENT": return state + action.payload;
        case "DECREMENT" : return state - action.payload ;
        default: return state;
    }
} 
 
export default changeNumber;