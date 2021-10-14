import { act } from "react-dom/test-utils";
import actionTypes from "../constans/ActionsType";

export const set_Product=(products)=>{
    return {
        type:actionTypes.set_Product,
        payload : products

    }
}

export const select_Product=(product)=>{
    return {
        type:actionTypes.select_Product,
        payload : product

    }
}


export const remove_product=()=>{
    return {
        type:actionTypes.remove_product
    }
}
