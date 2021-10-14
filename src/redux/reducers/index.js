import { combineReducers } from "redux";

import {productreducer,selectedproductreducer} from './ProductActions';

const reducers=combineReducers({
    allProducts:productreducer,
    product:selectedproductreducer
})

export default reducers