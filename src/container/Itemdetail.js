import React ,{useEffect}from 'react'
import axios from 'axios'
import {select_Product , remove_product} from '../redux/actions/index'
import { useParams } from 'react-router'
import {useDispatch , useSelector} from 'react-redux'
function Itemdetail() {
    const dispatch = useDispatch();
    const product = useSelector(state => state.product)
    const {productId}= useParams();
    const fetchItemdetail= async(id)=>{
        const response=await axios.get(`https://fakestoreapi.com/products/${id}`)
        .catch((err)=>{
            console.log("error",err);
        })
   dispatch(select_Product(response.data));
    }
useEffect(() => {
    if(productId && productId!="")
   fetchItemdetail(productId);
}, [productId])
    return (
        <div>
            {
            Object.keys(product).length===0?<h1>...Loading</h1>:
            <div class="card" style={{width: "18rem"}}>
  <img class="card-img-top" src={product.image} alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">{product.title}</h5>
    <p class="card-text">{product.description}</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Category : {product.category}</li>
    <li class="list-group-item">rating : {product.rating.rate}</li>
    <li class="list-group-item">Count : {product.rating.count}</li>
  </ul>
  <div class="card-body">
    <a href="#" class="card-link">Add to cart</a>
    <a href="#" class="card-link">Buy Now</a>
  </div>
</div>

            }
        </div>
    )
}

export default Itemdetail
