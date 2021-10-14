import React from 'react'
import { useSelector } from 'react-redux'

function item() {
    const result = useSelector(state => state.allproduct.products);
    console.log(result);
    return (
        <div>
            
        </div>
    )
}

export default item
