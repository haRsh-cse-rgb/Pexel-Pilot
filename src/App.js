import React from 'react';
import { BrowserRouter as Router , Route , Routes, BrowserRouter } from "react-router-dom";


import Home from './components/Home';
import Header from './components/Header';
import Categories from './components/Categories';


function App() {
  return (
   <Router>
   <Header/>
<Routes>
  <Route path='/' element={<Home/>}></Route>
  <Route path='/category/:id' element={<Categories/>}></Route>
</Routes>

   </Router>
  );
}

export default App;
