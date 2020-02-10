import React from 'react';
import './App.css';
import ClassCounter from './Components/ClassCounter';
import UseStateCouter from './Components/UseStateCouter';
import UseStateCounterTwo from './Components/UseStateCounterTwo';
import UseStateCounterThree from './Components/UseStateCounterThree';
import UserStateCounterFour from './Components/UserStateCounterFour';
import UseEffect from './Components/UseEffect/UseEffect';
import UseEffectWithClass from './Components/UseEffect/UpdateStateClass';

function App() {
  return (
    <div className="App">
      {/* <ClassCounter/> */}
      {/* <UseStateCouter/> */}
      {/* <UseStateCounterTwo/> */}
      {/* <UseStateCounterThree/> */}
      {/* <UserStateCounterFour/> */}
      {/* <UseEffectWithClass/> */}
      <UseEffect/>
    </div>
  );
}

export default App;
