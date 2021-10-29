import React from 'react';
import { Route} from 'react-router'
import {BrowserRouter} from 'react-router-dom'
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/pages/Home';
import Products from './Components/pages/Products';
import Services from './Components/pages/Services';
import SignUp from './Components/pages/SignUp';
import Footer from './Components/Footer';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/> 
        <Route path='/' exact component={Home} />
        <Route path='/services' exact component={Services} />
        <Route path='/products' exact component={Products} />
        <Route path='/sign-up' exact component={SignUp} />
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
