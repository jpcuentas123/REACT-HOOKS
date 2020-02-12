import React from 'react';
import './App.css';
import ComponentC from './Components/UseContext/ComponentC';
export const UserContext = React.createContext()
export const ChannelContext = React.createContext()
const users = [
  {
    id: 0,
    name: 'Jorge'
  }
]
function App() {
  return (
    <div className="App">
      <UserContext.Provider value={users}>
        <ChannelContext.Provider value={"JP Cuentas"}>
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
