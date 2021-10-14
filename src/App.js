import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { useSelector } from 'react-redux'
import axios from 'axios';
import Item from './container/Item';
import Navbar from './container/Navbar';
import Itemdetail from './container/Itemdetail';
import About from './container/About';
function App() {

  return (
    <div >
      <Router>
      <Navbar/>
      <Switch>
        <Route exact path="/">
     <Item/>
</Route>
<Route exact path="/product/:productId">
  <Itemdetail/>
  </Route>
  <Route exact path="/about">
  <About/>
  </Route>
  
  <Route >404 Not Found !</Route>
     </Switch>
     </Router>
    </div>
  );
}

export default App;
