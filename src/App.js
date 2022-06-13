import axios from 'axios';
import React, { useState } from "react";
import DisplaySimpson from './components/DisplaySimpson';
import './App.css';

const sampleSimpson = {
  character: "Apu Nahasapeemapetilon",
  quote: "By chilling my loins I increase the chances of impregnating my wife.",
  picture: {
    image: "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FApuNahasapeemapetilon.png?1497567511629",
    characterDirection: "Left"
  },
};

////////////////////////////////////// ci dessous A TERMINER
function App() {

  const [simpson, setSimpson] = useState(sampleSimpson);

  const getSimpson = () => {
    // Send the request
    axios
      .get('https://simpsons-quotes-api.herokuapp.com/quotes')
      // Extract the DATA from the received response
      .then((response) => response.data)
      // Use this data to update the state
      .then((data) => {
        setSimpson(data[0]);
        console.log(data);
      });
  };



  return (
    <div className='App'>
      <DisplaySimpson simpson={simpson} />
    <div>
        <button type="button" onClick={getSimpson}>Get Simpsons Quote</button>
      </div>
    </div>
  );
}
  

export default App;
