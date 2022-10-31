import { jsonConstant } from "../../constants/iTuneStore/json";

const initialState: number = 0;

interface actionType {
    type: string,
    payload: number
}

const changeNumber= (state = initialState, action:actionType) => {
    switch (action.type) {
        case jsonConstant.INCREMENT: return state + action.payload;
        case jsonConstant.DECREMENT: return state - action.payload ;
        case jsonConstant.RESET: return state = 0;
        default: return state;
    }
    
} 
export default changeNumber;