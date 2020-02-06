import React from 'react';
import './App.css';
import ClassCounter from './Components/ClassCounter';
import UseStateCouter from './Components/UseStateCouter';
import UseStateCounterTwo from './Components/UseStateCounterTwo';
import UseStateCounterThree from './Components/UseStateCounterThree';

function App() {
  return (
    <div className="App">
      {/* <ClassCounter/> */}
      {/* <UseStateCouter/> */}
      {/* <UseStateCounterTwo/> */}
      <UseStateCounterThree/>
    </div>
  );
}

export default App;
