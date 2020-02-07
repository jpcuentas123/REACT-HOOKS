import React from 'react';
import './App.css';
import ClassCounter from './Components/ClassCounter';
import UseStateCouter from './Components/UseStateCouter';
import UseStateCounterTwo from './Components/UseStateCounterTwo';
import UseStateCounterThree from './Components/UseStateCounterThree';
import UserStateCounterFour from './Components/UserStateCounterFour';

function App() {
  return (
    <div className="App">
      {/* <ClassCounter/> */}
      {/* <UseStateCouter/> */}
      {/* <UseStateCounterTwo/> */}
      {/* <UseStateCounterThree/> */}
      <UserStateCounterFour/>
    </div>
  );
}

export default App;
