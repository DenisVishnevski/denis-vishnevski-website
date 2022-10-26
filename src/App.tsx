import React from 'react';
import Header from './components/Header';
import Wrapper from './components/Wrapper';
import './scss/global.scss'


function App() {
  return (
    <div className="App">
      <Wrapper>
        <Header />
      </Wrapper>
    </div>
  );
}

export default App;
