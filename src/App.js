import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import PuppiesList from "./PuppiesList.js";
import UserForm from "./UserForm";

const imaginaryUser = {
  email: "",
  username: "",
  imaginaryThingId: null
};
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <PuppiesList />
        <UserForm />
      </div>
    );
  }
}

export default App;
