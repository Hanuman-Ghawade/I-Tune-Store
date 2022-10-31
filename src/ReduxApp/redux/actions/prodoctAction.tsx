import { actionType } from "../constants/actionType";

export const setProducts = (products: string) => {
    return {
        type : actionType.setProduct,
        payload: products,
    }
}

export const selectedProduct = (products: string) => {
    return {
        type : actionType.selectedProduct,
        payload: products,
    }
}
export const removeSelectedProduct = (product: string) => {
    return {
        type : actionType.removeSelectedProduct,
        payload: product,
    }
}