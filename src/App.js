
import './App.css';
//import React, { useEffect } from "react";
import Header from "./components/Header"
import Top from "./components/Top"
import Mainboard from "./components/Mainboard"
import Converter from "./components/Convert"
import Breif from "./components/Breif"




function App(){

    return(

    <div className='app'>
      <Top/>
      <Header/>
      <Breif/>
      <Converter/>
      <Mainboard/>
    </div>
  );
}


export default App;
