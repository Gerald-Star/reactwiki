import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import './App.css';
import Characters from "./Components/Characters";
{/*import SearchBar from "./Components/SearchBar";*/ }




 function App() {
   return (
     <div className="App">
            <h1 className="text-center ubuntu my-4">Rick and Morty
         <span className="text-primary">WiKi</span></h1>
       {/*<SearchBar/> */}
       <Characters />
       
       
     
  
    </div>
   );
 }

 export default App;


    

  
