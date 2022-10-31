import { jsonConstant } from "../../constants/iTuneStore/json"

 export const decrementCount = (num: number) => {
    return {
        type: jsonConstant.DECREMENT,
        payload: num

    }
}

export const incrementCount = (num: number) => {
    return {
        type: jsonConstant.INCREMENT,
        payload: num
    }
}

export const reset = () => {
    return {
        type: jsonConstant.RESET
    }
}
