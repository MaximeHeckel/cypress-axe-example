import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div role="main" className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button
          style={{
            height: "40px",
            width: "200px",
            background: "cyan",
            cursor: "pointer",
            borderRadius: "4px",
            color: "white"
          }}
          onClick={() => console.log("hello world")}
        >
          Button
        </button>
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

export default App;
