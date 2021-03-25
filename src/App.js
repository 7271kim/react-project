import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component {

  render(){
    fetch('http://honbabzone.com/').then( async (reponse)=>{
      if(reponse.ok){
        const data = await reponse.text();
        console.log(data);
      }
    })

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }

  
}

export default App;
