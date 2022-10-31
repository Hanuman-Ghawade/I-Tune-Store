import { actionType } from "../constants/actionType";

interface actionType {
    type: string,
    payload: string
}
interface initialStateType {
    product: {
        id: number,
        title: string,
        category: string
    }[]
}
const initialState : initialStateType = {
    product : [{
        id: 1,
        title: "Hanuman ",
        category: "Engineer",
    }]
}

export const productReducer = (state = initialState, action:actionType) => {
    switch (action.type) {
        case actionType.setProduct : 
        return state
        default: return state
    }

}