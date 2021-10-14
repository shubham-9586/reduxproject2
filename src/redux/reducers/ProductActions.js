import actionTypes from "../constans/ActionsType";


const initialState={
    products:[]
}

export const productreducer= (state=initialState,{type ,payload})=>{
    
    if(type===actionTypes.set_Product)
    {
        return {...state,products:payload};
    }
    else
    {
        return state;
    }
}


export const selectedproductreducer =(state={},{type,payload})=>{
    if(type===actionTypes.select_Product)
    {
        return {...state,...payload};
    }
    else if(type===actionTypes.remove_product)
    {
        return {};
    }
    else{
        return  state;
    }
}

