import React from 'react';
import './App.css';
import MagicButton from "./global";

const theme = {
  background: "#1ECBE1",
  color: "#E1341E"
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MagicButton theme={theme}>
          Dupa
        </MagicButton>
      </header>
    </div>
  );
}

export default App;
