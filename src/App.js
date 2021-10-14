import logo from './logo.svg';
import './App.css';

import { useSelector } from 'react-redux'
import axios from 'axios';
import Item from './container/Item';
import Navbar from './container/Navbar';
function App() {

  return (
    <div >
      <Navbar/>
 <Item/>
    </div>
  );
}

export default App;
