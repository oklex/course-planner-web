import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Helmet from "react-helmet";

class App extends React.Component<{}, {}> {
  render() {
    return (
      <div className="App">
        <div className="card">
          <h1>Hello world</h1>
        </div>
      </div>
    );
  }
}

export default App;
