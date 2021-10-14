
export const set_Product=(products)=>{
    return {
        type:'set_Product',
        payload : products

    }
}

export const select_Product=(product)=>{
    return {
        type:'select_Product',
        payload : product

    }
}

export const remove_product=()=>{
    return {
        type:'remove_product'
    }
}
