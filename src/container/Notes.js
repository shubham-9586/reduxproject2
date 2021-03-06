import React from 'react'
import { useState } from 'react';
import {useSelector} from 'react-redux'
import Noteitem from './Noteitem';
function Notes() {
    const products = useSelector(state => state.allProducts.products);
   // products=products.data;
    //console.log(products)
    return (
        <div>
            {
               Object.keys(products).length===0?<h1>...Loading</h1>:
                products.map((data)=>{
                return  <Noteitem data={data}/>
                })

            }
        </div>
    )
}

export default Notes
