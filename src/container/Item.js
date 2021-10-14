import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { set_Product } from '../redux/actions';
import Notes from './Notes';
function Item() {
    const products = useSelector(state => state.allProducts.products);
    const dispatch = useDispatch();
      const fetchdata=async()=>{
      const response= await axios.get("https://fakestoreapi.com/products")
      .catch((err)=>{
      console.log("error",err);
      })
         dispatch(set_Product(response.data));
      }
      useEffect(() => {
         fetchdata();
      }, [])
     // console.log(products);
    return (
        <div>
            <Notes/>
        </div>
    )
}

export default Item
