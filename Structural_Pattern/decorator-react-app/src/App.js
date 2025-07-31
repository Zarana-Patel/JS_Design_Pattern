import React from 'react';
import './App.css';
import WithBorder_Greeting from './components/WithBorder_Greeting';
import Greeting from './components/Greeting';

const DecoratedMessage = WithBorder_Greeting(Greeting);

function App() {
  return (
    <div className="App">
     <Greeting name="I am plain message"/>
     <h2>With Border:</h2>
     <DecoratedMessage name="Decorated Message" />
    </div>
  );
}

export default App;
