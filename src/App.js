import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar/Navbar';
import AllFoods from './Components/AllFoods/AllFoods';





function App() {
  return(

    <div>
         <Navbar></Navbar>
         <AllFoods></AllFoods>
         
    </div>
  )  
}

export default App;
