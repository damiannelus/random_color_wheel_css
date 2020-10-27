import React from 'react';
import {ThemeProvider} from 'styled-components';
import './App.css';
import MagicButton from "./global";
import drawComplementaryColors from "./helpers";

let theme = {
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
        <ThemeProvider theme={drawComplementaryColors}>
          <MagicButton>
            drawComplementaryColors
        </MagicButton>
        </ThemeProvider>
      </header>
    </div>
  );
}

export default App;
