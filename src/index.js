import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { HashRouter, Route } from 'react-router-dom'

class Routes extends React.Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={App} />
      </div>
    );
  }
}

ReactDOM.render(
  <HashRouter>
    <Routes />
  </HashRouter>,
  document.getElementById("root")
);
