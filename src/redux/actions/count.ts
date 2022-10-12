import React from "react";


 export const decrementCount = (num: number) => {
    return {
        type: 'DECREMENT',
        payload: num

    }
}

export const incrementCount = (num: number) => {
    return {
        type: 'INCREMENT',
        payload: num
    }
}
