import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'

function Item() {
    const state = useSelector(state => state.allProducts.products);
    const dispatch = useDispatch()
      const fetchdata=async()=>{
      const response= await axios.get("https://fakestoreapi.com/products")
      .catch((err)=>{
      console.log("error",err);
      })
        //  dispatch(response);
      }
      useEffect(() => {
         fetchdata();
      }, [])
    return (
        <div>
            
        </div>
    )
}

export default Item
