import React from 'react';
import Loader from './Loader';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Loader</h1>
      <div style={{ marginRight: '0.5rem', height: '30%', width: '30%', display: 'flex', flexDirection: 'column' }}>
       <h2>Number of lines</h2>
       <Loader count={5} />
      </div>
      <br />
      <div style={{ marginRight: '0.5rem', height: '30%', width: '30%', display: 'flex', flexDirection: 'column' }}>
        <h2>circle loader</h2>
        <Loader circle />
      </div>
      <div style={{ marginRight: '0.5rem', height: '30%', width: '30%', display: 'flex', flexDirection: 'column' }}>
        <h2>circle loader with custom height & width</h2>
        <Loader circle width={120} height={120} />
      </div>
      <div style={{ marginRight: '0.5rem', height: '30%', width: '30%', display: 'flex', flexDirection: 'column' }}>
        <h2>Single loader with custom height</h2>
        <Loader height={200} />
      </div>
      <div style={{ marginRight: '0.5rem', height: '30%', width: '30%', display: 'flex', flexDirection: 'column' }}>
        <h2>Multiple loader with custom height & width</h2>
        <Loader height={250} width={'60%'} />
        <Loader height={30} style={{ marginTop: '10px'}} />
        <Loader height={30} style={{ marginTop: '10px'}} />
        <Loader height={30} width={'60%'} style={{ marginTop: '10px'}} />
      </div>
    </div>
  );
}

export default App;
