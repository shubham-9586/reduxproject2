
const initialState={
    products:[]
}

export const productreducer= (state=initialState,{type ,payload})=>{
    
    if(type==='set_Product')
    {
        return {...state,products:payload};
    }
    else
    {
        return state;
    }
}

export const selectedproductreducer =(state={},{type,payload})=>{
    if(type==='select_Product')
    {
        return {...state,...payload};
    }
    else if(type==='remove_product')
    {
        return {};
    }
    else{
        return  state;
    }
}

