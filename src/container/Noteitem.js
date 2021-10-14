import React from 'react'
import {Link} from 'react'
import {useSelector} from 'react-redux'
function Noteitem(props) {
  //  const products = useSelector(state => state.allProducts.product)
    return (
        <div>
            <div className="card" style={{width: "18rem"}}>
  <img className="card-img-top" src={props.data.image} alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">{props.data.title}</h5>
    <p className="card-text">{props.data.description}</p>
    <a href={`/product/${props.data.id}`} className="btn btn-primary">Know more</a>
  </div>
</div>
        </div>
    )
}

export default Noteitem
